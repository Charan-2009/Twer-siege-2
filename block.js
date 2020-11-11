class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)
        this.visibility = 255;
    }
    display()  {

        if(this.body.speed<3){
            Block.visibility = true
          }
          else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            //Creating a disintegrating effect
            tint(255,this.visibility);
            pop();
          }

        rectMode(CENTER)
        fill(171,247,247)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}