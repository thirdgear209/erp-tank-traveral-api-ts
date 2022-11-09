import { expect } from 'chai';

import Tank from '../src/models/tank.model';
import Movement from '../src/models/movement.model';
import MovementSegment from '../src/models/movement-segment.model';
import {getMockMovementJson} from './generator.util';

describe('Tank model',()=>{
    let tank:Tank;
    let source:MovementSegment;
    let dest:MovementSegment;

    it('Should initialize',()=>{
        tank = new Tank(1, 'Tank 1');
    })

    it('Should add root movement correctly',()=>{
        tank = new Tank(1, 'Tank 1');

        const json = getMockMovementJson();

        let movement:Movement = new Movement(json);
        source = new MovementSegment();
        source.previous = new MovementSegment();
        dest = new MovementSegment();
        
        movement.source = source;
        movement.destination = dest;

        tank.addMovement(movement);

        const count = tank.getAllMovementCount();
        expect(count).to.equal(1);

    })

    it('Should add two consequtive movements correcly (in order)',()=>{
        tank = new Tank(1, 'Tank 1');

    })

    it('Should add two consequtive movements correcly (out of order)',()=>{
        tank = new Tank(1, 'Tank 1');

    })


});