var $itTotal = $('#it-total');
var $itFrame = $('#it-frame');

//input
$itTotal.change(e => setTotalIterations($itTotal.val()));
$itFrame.change(e => setInterationsPerFrame($itFrame.val()));

var setTotalIterations = val =>{

    config.interations.total = val;
    //console.log(config.canvas.width);
    reset();

};

var setInterationsPerFrame = val =>{
    config.interations.frame = val;
    //console.log(config.canvas.height);
    reset();
};



//output
var setIterations = (itTotalVal, itFrameVal) => {
    $itTotal.val(itTotalVal);
    $itFrame.val(itFrameVal);
    //console.log(itTotalVal);
}
