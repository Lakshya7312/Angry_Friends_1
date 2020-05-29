class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
      this.sling = Constraint.create(options);
      this.pointB = pointB;
      this.sling1 = loadImage("images/sling1.png");
      this.sling2 = loadImage("images/sling2.png");
      this.sling3 = loadImage("images/sling3.png");
      World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

   display() {
       image(this.sling1, 250, 93);
       image(this.sling2, 220, 85);
       if(this.sling.bodyA){
       var pointA = this.sling.bodyA.position;
       var pointB = this.pointB;
       push();
       strokeWeight(7);
       stroke(48, 22, 8);
       if(pointA.x < 220){
       line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+20);
       line(pointA.x-20, pointA.y, pointB.x+70, pointB.y+20);
       image(this.sling3, pointA.x-35, pointA.y-10, 20, 30);
       }
       else{
           line(pointA.x+20, pointA.y+20, pointB.x+25, pointB.y+20);
           line(pointA.x+30, pointA.y+20, pointB.x+70, pointB.y+25);
           image(this.sling3, pointA.x+15, pointA.y+3, 20, 30);
       }
       pop();
   }
}
}