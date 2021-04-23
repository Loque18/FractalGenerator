var $helper = $('#helper');
var $bgColor = $('#bg-color');

var $colorA = $('#colorA');
var $colorB = $('#colorB');

var $percentage = $('#percentage');
var $percentageLabel = $('#label-percentage');

var $angle = $('#angle');
var $angleLabel = $('#label-angle');

//input
$helper.change(e => setHelper($helper.prop('checked')));
$bgColor.on('input', e => setBgColor($bgColor.val()));
$colorA.on('input', e => setColA($colorA.val()));
$colorB.on('input', e => setColB($colorB.val()));
$percentage.on('input', e => setPercetage($percentage.val()));
$angle.on('input', e => setAngle($angle.val()));

var setHelper = val =>{

    config.props.helper = val;
    reset();

};

var setBgColor = val =>{

    config.ui.bgColor = val;
    $('body').css({background: config.ui.bgColor});


};



var setColA = val =>{

    config.props.colorA = val;
    reset();

};

var setColB = val =>{

    config.props.colorB = val;
    reset();
};

var setPercetage = val => {

    config.props.percentage = val;
    $percentageLabel.html(`percentage ${config.props.percentage}`);

    reset();

};

var setAngle = val => {

    config.props.angle = val;
    $angleLabel.html(`angle ${config.props.angle} °`);
    myPoly.angle = config.props.angle * Math.PI/180;

    reset();


};



//output
var setProps = (helperVal, colA, colB, prct, ang) => {


    //$helper.val(true);
    $helper.prop('checked', helperVal);

    $bgColor.val(config.ui.bgColor);
    setBgColor(config.ui.bgColor);


    $colorA.val(colA);
    $colorB.val(colB);

    $percentage.val(prct);
    $percentageLabel.html(`percentage ${prct}`);

    $angle.val(ang);
    $angleLabel.html(`angle ${config.props.angle} °`);
}
