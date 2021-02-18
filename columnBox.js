class ColumnBox extends Box {

    constructor(x,y,w,h){
        super(x,y,w,h);
    }

    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(columnImg, 0,0,this.w, this.h);
        pop();
    }

}