class Dustbin
{
    
    constructor(x,y,width,height)
    {
        var options =
        {
          'restitution':0.0,
          'friction':1.0,
          'density':1.0,
          "isStatic":true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
		World.add(world, this.body);
		this.addimage = loadImage("dustbingreen.png");
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
	Imagemode(CENTER);
	 image(this.image,0,0,this.width,this.height)
      fill(0,0,255);
      super.display();
       pop();
    }
} 