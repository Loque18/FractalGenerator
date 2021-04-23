let w = config.canvas.width;
let h = config.canvas.height;

function Poly(xx, yy){

    w = config.canvas.width;
    h = config.canvas.height;
    
    this.x = xx;
    this.y = yy;
    this.angle = 0;

    this.rr =  h/2 - 10;
    this.numberOfVertices = 0;
    this.vts = [];

    this.showCircle = false;

    this.col = color(0, 0, 255);
}

Poly.prototype.initialize = function(){

    const divisiones = TWO_PI / this.numberOfVertices;
    let r = this.rr;

    this.vts = [];

    for(let i = 0; i < this.numberOfVertices; i++){

        let ang = i * divisiones + this.angle;
        let x = r * cos(ang) + (w/2 + this.x);       let y = -r * sin(ang) + (h/2 + this.y);

        ang = (i+1) * divisiones + this.angle;
        let dx = r * cos(ang) + (w/2 + this.x);      let dy = -r * sin(ang) + (h/2 + this.y);

        this.vts.push( createVector(x, y) );
    }
}

Poly.prototype.getVertices = function(){
    return this.vts;
}

Poly.prototype.display = function(){

    push();

    colorMode(HSB);

    for(let i = 0; i < this.numberOfVertices; i++){

        let idx = (i+1)%this.numberOfVertices;

        let x = this.vts[i].x;      let dx = this.vts[idx].x;
        let y = this.vts[i].y;      let dy = this.vts[idx].y;

        stroke(360, 100, 100);
        strokeWeight(8);
        point(x, y);
        strokeWeight(1);

        stroke( this.col );
        line(x, y, dx, dy);
    }

    if(this.showCircle){
        stroke( this.col );
        noFill();
        ellipse(this.x + (w/2), this.y + (h/2) , this.rr*2);
    }

    pop();
}
