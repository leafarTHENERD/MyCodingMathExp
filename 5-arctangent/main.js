window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        arrowX = width * .5,
        arrowY = height * .5,
        dx, dy,
        angle = 0,
        circleAngle = 0,
        speed = .01,
        radius = 200,
        x, y;

    render();

    function render(){
        context.clearRect(0, 0, width, height);

        x = arrowX + Math.cos(circleAngle) * radius,
        y = arrowY + Math.sin(circleAngle) * radius

        context.save();
        context.translate(x, y);
        context.rotate(angle);

        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);
        context.stroke();

        circleAngle -= speed;

        context.restore();
        requestAnimationFrame(render);
    }
        
    document.body.addEventListener("mousemove", function(event){
        dx = event.clientX - arrowX;
        dy = event.clientY - arrowY;
        angle = Math.atan2(dy, dx);
    });
};