class Bird extends BaseClass {
    constructor(x, y) {
      super(x, y, 55, 55);
      this.image = loadImage("images/biird.png");
      this.SmokeImage = loadImage("images/smoke.png");

      this.trajectory = [];
    }
    display() {
        super.display();
        //console.log(this.body.velocity.x);
        if(this.body.velocity.x > 1 && this.body.position.x > 400){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }
        for(var i = 0; i < this.trajectory.length; i++){
          image(this.SmokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
};