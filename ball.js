class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, 300, 200, options);
        this.width = 300;
        this.height = 200;
        this.image = loadImage("s.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}