
function getMockMovementJson(){
        
    return {
            id: 1,
            gallonsMoved: 101,
            completionDate: null,
            workOrder:{
                id: 100,
                workOrderNumber: '22-1000', 
                creationDate: null, 
                completionDate: null,
                validationDate: null
            },
            source: {
                id: null,
            },
            destination: {
                id: null,

            }
        }
};

export{getMockMovementJson};