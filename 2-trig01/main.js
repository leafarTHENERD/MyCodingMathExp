window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    context.translate(0, height / 2);
    context.scale(1, -1);

    for(var angle = 0; angle < 2 * Math.PI; angle += .01){
        var x = angle * 200,
            y = Math.sin(angle) * 200;

        context.fillRect(x,y, 50, .1);
        context.fillRect(x,y, .1, 50);

        x = angle * 205,
        y = Math.sin(angle) * 205 * Math.random();

        context.fillRect(x,y, 50, .1);
        context.fillRect(x,y, .1, 50);

    }

};