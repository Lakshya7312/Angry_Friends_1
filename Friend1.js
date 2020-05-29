class Friend1 extends BaseClass{
    constructor(x, y) {
        super(x, y, 100, 100);
        this.image = loadImage("images/friend1.png");
        this.Visibility = 255;

        console.log(this.body.speed);
    }
    display() {
        if(this.body.speed < 3){
            super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
    }

    score() {
     if(this.Visibility < 0 && this.Visibility > 800){
         score ++;
     }    
    }
};