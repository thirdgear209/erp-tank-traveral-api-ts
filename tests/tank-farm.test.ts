import { expect } from 'chai';

import TankFarm from '../src/models/tank-farm.model';
import Tank from '../src/models/tank.model';

describe('Tank farm operations',()=>{
    let tankFarm;

    it('Should set tank references correctly',()=>{
        tankFarm = new TankFarm();

        tankFarm.addTankRef(1, 'Tank 1');
        tankFarm.addTankRef(2, 'Tank 2');
        tankFarm.addTankRef(3, 'Tank 3');
        tankFarm.addTankRef(1, 'Tank 1');

        expect(tankFarm.getTankCount()).to.equal(3);
        
    })
});