var $vertices = $('#vertices');

//input
$vertices.change(e => setPolyVertices($vertices.val()));

var setPolyVertices = val =>{
    config.poly.vertices = val;
    reset();
};



//output
var setMenuPolyVertices = val => $vertices.val(val);
