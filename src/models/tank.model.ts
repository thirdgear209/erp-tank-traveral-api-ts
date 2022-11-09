import MovementSegment from './movement-segment.model';
import Movement from './movement.model';

/**
 * Tank entity:
 *      The tank entity is responsible for representing a physical tank, and all historical activity 
 * related to the tank.
 * 
 *      The usage pattern is assumed to be a low write, high read pattern.
 * 
 * Tracking movements:
 *      Movements are stored in a linked list fashion, where related movements are stored in sequental blocks within 
 * the overall list. Groups of related movements are referred to as 'movement blocks', where the overall goal is to store 
 * all activity for a series of operations in a sequential set of nodes, or movment block.
 * 
 * Example:
 * 
 *  Given a tank:
 *      1) It starts as empty (operation a)
 *      2) Some content is added (operation b)
 *      3) Half the contents are drained out (operation c)
 *      4) In a subseuent operation, the remainder of the contents are drained out. (operation d)
 *      5) The tank is cleaned (operation e)
 *      6) Some new content is added in (operation f)
 *      7) Then remainder of the contents are drained out in a single operation (operation g)
 *  
 *  The state of the data structure would be modeled as follows:
 *      [operation a]-->[operation b]-->[operation c]-->[operation d]-->[operation e]-->[operation f]-->[operation g]-->
 * 
 *      Whereas [operation a] through [operation e] would be a group of related operations, and the remaining set, [operation f-g]
 *      would represent a second set of related operations.
 * 
 *      Any series of related movements will be stored as a continuous block, which each individual movement within that block 
 *      occuring in the order of actual operations as they ocurred, however at a 'block' level, the ordering of the blocks is irelevant 
 *      of the orer in which they occurered.
 * 
 *      
 * 
 */
export default class Tank{

    id: Number;
    name: String;
    nextMovementSegmentId: Number;
    previousMovementSegmentId: Number;
    rootMovement : Movement = null;

    constructor(id: Number, name: String){
        this.id = id;
        this.name = name;
    }

    /**
     * 
     * Add a movement to the in memory data set. 
     * 
     * @param movement 
     * @returns 
     */
    addMovement(movement: Movement){

        if(movement.source.isMinimalLinkInfoPresent()){
            throw new Error("'source' movement segment need to have minimal valid opinter validation");
        }

        if(movement.destination.isMinimalLinkInfoPresent()){
            throw new Error("'destination' movement segment need to have minimal valid opinter validation");
        }

        if(this.rootMovement == null){
            this.rootMovement = movement;
            return;
        }

    }

    getAllMovementCount(){
        let count = 0;
        if(this.rootMovement==null){
            return 0;
        }
        count = 1;

        return count;
    }

    getAllMovements(){
        return this.rootMovement;
    }

}