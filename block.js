class Block{
    constructor(x, y, width, height) {
        var options={
          restitution :0.4,
          friction :0.0,  
        }
        this.visibility = 255;
        //load image
        this.image = loadImage("block.png");
       
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //add to world
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        //if speed of the blocks is less than 3 then the blocks should be displayed
        if(this.body.speed <3){
          push();
          var angle = this.body.angle;
          var pos= this.body.position;
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0,0,this.width,this.height);
          pop();
         
        }else{
          //if speed is more than 3 then the blocks shoud vanish
          World.remove(world,this.body);
          // push() and pop() conditions to avoid unexpected behavior.
          push ();
          //the visibility of the blocks should get reduced by 5 each time
          this.visibility = this.visibility-5;
          tint (255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop ();
        }
       
      }
}
