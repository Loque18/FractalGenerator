var $cwidth = $('#cWidth');
var $cHeight = $('#cHeight');

//input
$cwidth.change(e => setCanvasWidth($cwidth.val()));
$cHeight.change(e => setCanvasHeight($cHeight.val()));
var setCanvasWidth = w =>{

    config.canvas.width = w;
    //console.log(config.canvas.width);
    resizeCanvas(config.canvas.width, config.canvas.height);
    reset();

};

var setCanvasHeight = h =>{
    config.canvas.height = h;
    //console.log(config.canvas.height);
    resizeCanvas(config.canvas.width, config.canvas.height);
    reset();
};



//output
var setMenuDimensions = (w, h) => {

    $cwidth.val(w);
    $cHeight.val(h);
}
