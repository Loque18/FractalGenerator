window.addEventListener('keydown', e => {

    //console.log(e.which);

    switch (e.which) {

        case 70:
            config.ui.menuVisible = !config.ui.menuVisible;
            setMenuVisibility(config.ui.menuVisible);
            break;

        case 83:
            saveData();
            break;

        case 82:
            loadData();

        default:
            break;

    }


});
