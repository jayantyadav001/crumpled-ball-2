class Box{
    constructor(x,y,width,height,color) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
      
        World.add(world,this.body);
        this.image =loadImage("paper.png");
    }

    display() {
        imageMode(CENTER);
        
       
        image(this.image,0,0,this.width,this.height);
    }
}