class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.007,
            length: 2
        }
        this.Sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Sling);
    }

    fly(){
        
        this.Sling.bodyA = null;

    }  
    attach(){
        this.Sling.bodyA = polygon.body;   
    }

    display(){
        if (this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}