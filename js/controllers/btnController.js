var $btn = $('#switchBtn');
var $btnReset = $('#btn-reset');
var $btnDownload = $('#btn-download');
var $btnSave = $('#btn-save');

var $menu = $('#menu');

//input
$btn.click(e => {

    config.ui.menuVisible = !config.ui.menuVisible;
    setMenuVisibility(config.ui.menuVisible);

});

$btnReset.click(e => {

    reset();
});

$btnDownload.click(e => {

    config.saves.count++;
    saveCanvas(configL.saves.mainCanvas, `fractal ${config.saves.count}`, 'png');
});

$btnSave.click(e => {

    saveData();
});



//output

var setMenuVisibility = state => {
    $menu.css({
        display: state ? 'block' : 'none'
    });
};
