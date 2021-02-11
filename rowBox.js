class RowBox extends Box {
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(rowImg, 0,0,this.w, this.h);
        pop();
    }

}