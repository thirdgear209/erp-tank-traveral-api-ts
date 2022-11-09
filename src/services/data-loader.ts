/**
 * 
 * DataLoader:
 * 
 * Given a data set, originating from a data store (RDBMS, NoSQL, etc), load objects into object models. Responsibility boundary
 * here is just to translate for (A, B, C) source into objects to be stored in memory for down the chain operartions. 
 * 
 * Assumptions: 
 *  Load operations are loaded into memory, assuminig that we have enough space to store them, we are just concearned with 
 * translating raw data into object representations. i.e. we dont care about where the data 'comes from' and in 'what format', 
 * 
 * 
 */

import Tank from '../models/tank.model';
import TankFarm from '../models/tank-farm.model';

export default class DataLoader{
    tankFarm : TankFarm;

    constructor(){
        this.tankFarm = new TankFarm();
    }
    async loadTanks(input : String){
        let results = [];

        

        return results;
    }

    async loadMovements(){
        let results = [];


        return results;
    }

    async loadMovementSeqments(){
        let results = [];


        return results;
    }
   
}

export {DataLoader};