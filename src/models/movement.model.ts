import MovementSegment from './movement-segment.model';
import WorkOrder from './work-order.model';

export default class Movement{
    id: Number;
    source: MovementSegment;
    destination: MovementSegment;
    workOrder: WorkOrder;
    gallonsMoved: Number;
    
    constructor(movementJson = null ){
        
        if(movementJson!=null){
            this.id = movementJson.id;
            this.gallonsMoved = 101;
            this.workOrder = new WorkOrder();
            this.workOrder.id = movementJson.workOrder.id;
            this.workOrder.workOrderNumber = movementJson.workOrder.workOrderNumber;
            this.workOrder.creationDate =    movementJson.workOrder.creationDate;
            this.workOrder.completionDate = movementJson.workOrder.completionDate;
            this.workOrder.validationDate = movementJson.workOrder.validationDate;

        }

    }

}