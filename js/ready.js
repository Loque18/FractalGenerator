$('document').ready(() => {



    setMenuVisibility(config.ui.menuVisible);

    setMenuDimensions(config.canvas.width, config.canvas.height);

    setMenuPolyVertices(config.poly.vertices);

    setIterations(config.interations.total, config.interations.frame);

    setProps(config.props.helper, config.props.colorA, config.props.colorB, config.props.percentage, config.props.angle);
});
