import Movement from './movement.model';
import Tank from './tank.model';

export default class MovementSegment{
    
    public id: Number;
    public tankRef: Tank;
    public dest: Tank;
    public next: MovementSegment = null;
    public previous: MovementSegment = null;
    public movement: Movement;

    isMinimalLinkInfoPresent(){
        return  this.next==null && this.previous==null;
    }

}