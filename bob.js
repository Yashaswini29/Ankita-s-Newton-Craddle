
  class Bob {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      this.body = Bodies.circle(x, y, 20,options);
      this.radius = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
       ellipseMode(RADIUS);
    fill("pink");
    strokeWeight(3);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    
    
    }
  };