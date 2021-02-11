class Slingshot {
    constructor(x, y, body) {
        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: .05,
            length: 30
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyB = null;
    }
    attach(body){
        this.sling.bodyB=body;
    }

    show() {
        if (this.sling.bodyB) {
            stroke(255);
            let posA = this.sling.pointA;
            let posB = this.sling.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}