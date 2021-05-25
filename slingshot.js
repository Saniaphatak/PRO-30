//define class slingshot
class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 20,
        }
        this.bodyA = this.bodyA;
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    //set bodyA to null
    fly(){
        this.chain.bodyA = null;
    }

    // to attach the bodyA to polygon body.
    attach(body){
        this.chain.bodyA = body;
    }

    display(){
        strokeWeight(4);
        stroke("white");
        //display slingshot only when bodyA is null
        if(this.chain.bodyA){
            line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}