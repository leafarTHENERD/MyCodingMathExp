window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * .5,
        centerX = width * .5,
        //radius = 200, 
        xRadius = 400,
        yRadius = 200,
        //speed = .01,
        xSpeed = .1,
        ySpeed = .131,
        //angle = 0,
        xAngle = 0,
        yAngle = 0,
        x, y;


    render();

    function render(){
        //context.clearRect(0, 0, width, height);

        x = centerX + Math.cos(xAngle /*angle*/) * xRadius; // radius,
        y = centerY + Math.sin(yAngle /*angle*/) * yRadius; // radius;

        
        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI*2, false);
        context.fill();

        //angle += speed;
        xAngle += xSpeed;
        yAngle += ySpeed;

        requestAnimationFrame(render);
    }    

/*
    var centerY = height * .5,
        centerX = width * .5,
        radius = 200,
        speed = 0.1,
        angle = 0,
        numObjects = 200,
        slice = (Math.PI * 2) / numObjects,
        x, y, i=0;


    render();

    function render(){
        //for (var i = 0; i < numObjects; i++) {

        //context.clearRect(0, 0, width, height);
        angle = i * slice;

        x = centerX + Math.cos(angle) * radius,
        y = centerY + Math.sin(angle) * radius;

            
        context.beginPath();
        context.arc(x , y, 2, 0, Math.PI*2, false);
        context.fill();        
            
        //}
        centerY += speed;
        centerX += speed*Math.pow(speed,i*i);

        i++;

        requestAnimationFrame(render);


    }


*/
};