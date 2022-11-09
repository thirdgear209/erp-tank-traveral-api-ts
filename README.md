#TankTraversal

##Background
On a previous project, I was tasked with modeling tank movements, and supporting various read operations VIA an ORM layer. For basic operations to lookup a particular entity, performance was not an issue. Servicing REST requests with an ORM layer is generally an easy task, requests are frequently short running. 

Running long running processes is a whole different deal. The number of operations, read, and write operations can absolutely batter a persistent datastore with numerous transactions, which not only impact system performance, but the overall performance of the process. So based off of personal experience, large read write running processes tend to hit performance limitations. IO and network operations have a performance cost, and storing things in memory offers a more performant alternative (CS 101).

At some point I came up with an idea to load data required into memory, denormalied, structured, which would eliminate per transaction io/network hits. This project is intended to provide a possible solution for an in memory solution to modeling physical historical activity into a rapid in memory lookup structure.

##Domain problem
Imagine a scenario where there is a manufacting process where the the physical product is a liquid (this could be beer, wine, fruit juice, etc). The entire manufacturing process consists of purchashing raw materials, putting them into storage tanks, and them subsequently moving them across a series of tanks until they are finally put into a final consumer package. 

Let imagine this, let's make orange juice! Trucks come in, oranges are unloaded, they need to be washed, skins need to be removed, the juice needs to be estracted, seeds filtered out, we have a pasturization step ( to eliminate bacteria ), we need to cool the product after the pasturization step, then there might be a few filtering steps based on a pulp level, maybe a few sweetener additives, etc. At each step of the manufacturing process, things get moved between different pieces of equipment, and they entire contents do not get moved at once. What is not important is the actual product, specific steps involved, etc. but a process where there is a physical product that is a result of a series of steps. 

Example (Oranges):
    Case (A: Simpliest case) 
        [oranges delivered into a bin, washed, juice exctracted]
        [pasturization, heated process, ocurrs in a specific tank/storage thingy]
        [cooling, needed for storage, also a different location]
        [finally everything ends up in bottles]
        Pretty easy, everything from start to finish went 100% from one location to the other, from start to finish. Very easy to track where and when happened at any given step in the process.
    Case (B: Reality)
        [you but as much as possible at a given window period for a harvest period]
        [you have a short time to process it and get it to a cooled storage state]
        [you store large amounts of the raw product for future tweaking to meet on demand product shipping]
        [This results in exponentially changes in the point A to Z process, and this can get really detailed based on the number of movement]

Requirements:
    Track a series of operations for a given raw product [think input] from start to finish. 
    No assumptions are based a straight A-Z movement path, in fact the inverse, defaulting to a large number of steps.
    Ability to view the contents of a storage container at any given historical period.
    Ability to view where product was moved from a given historical point in time to the current point in time. I.e. If we need ot go back in time to modify a transaction, all forward transactions will need to be updated based on the previous as well
    For the scope of the data structure, this is a high read, low write operation
    All data should be loaded upon application initialization, and then updates should be supported on demand.    
    Source to destination operations are one to many at most.

    Example:
        [step 1]-->[step 2]-->[step 3]
            Updating 'step 1' would include updating 'step 2' and 'step 3' into scope
        [step 1]-->[step 2]
            [step 2]-->[step 3.1]
            [step 2]-->[step 3.2]
                [step 3.1]-->[step 4]
                [step 3.2]-->[step 4]
            'step 2' introduces two split paths, so updates to any previous paths would require us to modify any subsequent paths. Imagine a scenario where a lot of this activity happens, and we need to go back historically to make changes on a frequest bases.  

    Assumptions:
        All operations for the initial load process have the memory capacity to not exceed heap space available.
        


##