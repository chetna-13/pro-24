class Paper
{
    constructor (x,y,r)
    {
        var options = {
          isStatic:true,
            restitution : 0.2 , 
            friction : 0.5 , 
            density : 1.2
        }
        this.x=
        this.y=
        this.r=
        this.body = Bodies.rectangle(x,y,r/2,options);
        World.add(world,this.body); 
    }
    display()
    {
        
        var pos  = this.body.position;
        push();
        translate(pos.x , pos.y);
        rectMode (CENTER);
        strokeWeight(3);
        fill(255,0,255);
        eclipe(0,0,this.r);
        pop();
    }
}