import { expect } from 'chai';

import TankFarm from '../src/models/tank-farm.model';
import Tank from '../src/models/tank.model';
import Movement from '../src/models/movement.model';

describe('Movement entity',()=>{
    
    it('Initialize properly', ()=>{
        let movement:Movement = new Movement();

    });

    it('Intialize properly based on JSON data',()=>{

        let date : Date = new Date();

        let mvmntCompletionDate = date.setDate(-5);
        let woCreationDate = date.setDate(-6);
        let woCompletionDate = date.setDate(-4);
        let woValidationDate = date.setDate(-3);

        const movementJson = {
            id: 1,
            gallonsMoved: 101,
            completionDate: mvmntCompletionDate,
            workOrder:{
                id: 100,
                workOrderNumber: '22-1000', 
                creationDate: woCreationDate, 
                completionDate: woCompletionDate,
                validationDate: woValidationDate
            },
            source: {
                id: null,
            },
            destination: {
                id: null,

            }
        }

        let movement:Movement = new Movement(movementJson);

        expect(movement).is.not.null;
        expect(movement.id).to.equal(1);
        expect(movement.gallonsMoved).to.equal(101);
        expect(movement.workOrder).is.not.null;
        expect(movement.workOrder.id).to.equal(100);
        expect(movement.workOrder.workOrderNumber).to.equal('22-1000');
        expect(movement.workOrder.creationDate).to.equal(woCreationDate);
        expect(movement.workOrder.completionDate).to.equal(woCompletionDate);
        expect(movement.workOrder.validationDate).to.equal(woValidationDate);
        
        
    })
});