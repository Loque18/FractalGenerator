var myPoly;
var x, y;
var vtcs = [];
var nodo0, nodo1, nodo2;
var total = 0;
var col;
var sat = 80;
var bri = 100
var ini = 0;
var fin = 0;

function setup() {

    configL.saves.mainCanvas = createCanvas(config.canvas.width, config.canvas.height);
    //scale(5);
    init();



}

function draw() {
    //background(220);

    if(total < (config.interations.total * 100000)){
        for(let ite = 0; ite < (config.interations.frame * 1000); ite++, total++){

            nodo2 = floor( random(vtcs.length) );
             //while( (nodo0 == nodo2) && nodo1 == (nodo1+4)%vtcs.length){//&& nodo1 == (nodo1+1)%vtcs.length || nodo0 == (nodo2+vtcs.length+3)%vtcs.length-2){//} || nodo1 == (nodo2+1)%vtcs.length ) {
             while( (nodo0 == nodo1) && nodo0 == (nodo2+vtcs.length+3)%vtcs.length-2 || nodo1 == (nodo2+1)%vtcs.length ) {
              nodo2 = floor( random(vtcs.length) );
         }
            nodo0 = nodo1;
            nodo1 = nodo2;

            let r = nodo2;

            for(let i = 0; i < vtcs.length; i++){

                if(r == i){
                    //choose color
                    x = lerp(x, vtcs[i].x, config.props.percentage);
                    y = lerp(y, vtcs[i].y, config.props.percentage);
                    push();



                    //col = lerpColor(color(config.props.colorA), color(config.props.colorB), total/(config.interations.total * 100000));
                    //col = lerpColor(color(config.props.colorA), color(config.props.colorB), random(0, 1))//r/vtcs.length);
                    //col = lerpColor(color(config.props.colorA), color(config.props.colorB), r/vtcs.length);
                    //col = color( map(r, 0, vtcs.length-1, ini, fin) , sat, bri);
                    colorMode(HSB);
                    col = color( map(r, 0, vtcs.length-1, ini, fin) , sat, bri);
                    //console.log(col);
                    //noLoop();
                    pop();
                    break;
                }
            }

            stroke(col);
            strokeWeight(random(1));
            point(x, y);
        }

    }
}

var reset = () => {

    init();

    total = 0;
}

var init = () => {
    //background(220);
    clear();
    //poly
    myPoly = new Poly(0, 0);
    myPoly.showCircle = config.props.helper;
    myPoly.numberOfVertices = config.poly.vertices;
    myPoly.angle = config.props.angle * Math.PI/180;
    myPoly.initialize();

    //first point
    x = random(config.canvas.width);
    y = random(config.canvas.height);
    vtcs = myPoly.getVertices();

    //colors
    ini = hue( color(config.props.colorA) );
    fin = hue( color(config.props.colorB) );

    sat = saturation(color(config.props.colorA));
    bri = brightness(color(config.props.colorA));

    //helper
    if(config.props.helper)
    {
         myPoly.display();
         push();
         strokeWeight(8);
         stroke(0, 255, 0);
         point(x, y);
         pop();
    }





}
