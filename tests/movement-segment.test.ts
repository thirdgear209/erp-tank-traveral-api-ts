import { expect } from 'chai';

import MovementSegment from '../src/models/movement-segment.model';

describe('Movement segment entity',()=>{
    
    it('Should validate on minimal requirements for prev and next', ()=>{
        let ms:MovementSegment;
        
        ms = new MovementSegment();
        expect(ms.isMinimalLinkInfoPresent()).to.equal(false);

        ms = new MovementSegment();
        ms.next = new MovementSegment();
        expect(ms.isMinimalLinkInfoPresent()).to.equal(true);
        
        ms = new MovementSegment();
        ms.next = new MovementSegment();
        expect(ms.isMinimalLinkInfoPresent()).to.equal(true);

        ms = new MovementSegment();
        ms.next = new MovementSegment();
        ms.previous = new MovementSegment();
        expect(ms.isMinimalLinkInfoPresent()).to.equal(true);

    });

});