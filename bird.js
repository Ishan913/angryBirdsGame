class Bird {
    constructor(x, y, r) {
        this.body = Matter.Bodies.circle(x, y, r);
        Matter.World.add(world, this.body);
        this.r = r;
        this.gravity = .4;
        this.vx = 25;
        this.vy = -10;
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(birdImg, 0, 0, this.r * 2, this.r * 2);
        pop();
    }

    randomMovement() {
        const pos = this.body.position;
        pos.x += this.vx;
        this.vy+=this.gravity;
        pos.y += this.vy;
    }
}