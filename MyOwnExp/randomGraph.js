var node = {
    _x:1,
    _y:0,
    _radius: 5,

    create: function(x, y, rad){
        var obj = Object.create(this);
        obj._x = x;
        obj._y = y;
        obj._radius = rad ? rad : this._radius;
        return obj;
    },

    getX: function(){
        return this._x;
    },

    getY: function(){
        return this._y;
    },

    draw: function(context){
        context.beginPath();
        context.arc(this._x, this._y, this._radius, 0, Math.PI*2, false);
        context.fill();
    }
};

window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var quant_max_nodes = 10;
    var quant_nodes = Math.ceil(Math.random()*quant_max_nodes);
    var nodes = [], i;

    for(i = 0; i < quant_nodes; i++)
        nodes.push(node.create(width*Math.random(), height*Math.random()));

    for(i = 0; i < quant_nodes; i++)
        nodes[i].draw(context);

    function randomize(num){
        return Math.floor(Math.random()*num)
    }

    function update(){
        context.clearRect(0,0,width, height);
        nodes.push(node.create(width*Math.random(), height*Math.random()));
        nodes[nodes.length - 1].draw(context);
        for(i = 0; i < nodes.length; i++){
            context.beginPath();
            i = randomize(nodes.length);
            context.moveTo(nodes[i].getX(), nodes[i].getY());
            var randomPositionNode = randomize(nodes.length);
            context.lineTo(nodes[randomPositionNode].getX(), nodes[randomPositionNode].getY());
            context.stroke();
        }
        requestAnimationFrame(update);
    }

    update();
};