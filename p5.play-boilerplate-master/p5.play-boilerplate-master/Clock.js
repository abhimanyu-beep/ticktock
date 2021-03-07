class Clock{
    constructor(x,y,radius){

    this.body = bodies.circle(x,y,radius)
    this.radius = radius;
    World.add(world,this.body)

    }

    display(){
        ellipse(0,0,this.radius,this.radius)
    }

}