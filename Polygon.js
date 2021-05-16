class Polygon {
    constructor(x, y,angle ,radius) {
        var opt = {
            'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, 6, 50, [opt])        
          this.radius = 50;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,50, this.radius);
        pop();
      }
  }