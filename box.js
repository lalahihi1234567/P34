class Box{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.1
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        fill("red");
        stroke("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }
}