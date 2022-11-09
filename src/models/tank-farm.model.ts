
import Tank from './tank.model';
import Movement from './movement.model';

export default class TankFarmModel{

    tanks: Map<Number, Tank>;
    
    constructor(){
        this.tanks = new Map();
    }

    addTankRef(id: Number, name: String){
        if(!this.tanks.has(id)){
            this.tanks.set(id, new Tank(id, name));
        }
    }

    addMovement(){
        tankMovement: Movement;

    }


    getTankCount(){
        return this.tanks.size;
    }


}