class Box {
    constructor(x, y, w, h) {
        this.body = Matter.Bodies.rectangle(x, y, w, h);    
        // const option = {
        //     position:{
        //         x:x,
        //         y:y
        //     },
        //     w:w,
        //     h:h,
        //     stiffness:.5
        // }
        // this.body = Matter.Constraint.create(option);
        Matter.World.add(world, this.body);
        this.x=x;
        this.y=y;
        this.w = w;
        this.h = h;

    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER)
        rect(0,0, this.w, this.h);
        pop();
    }
}