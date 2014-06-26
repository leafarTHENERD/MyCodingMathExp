window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
    /*
        position = vector.create(100, 100),
        velocity = vector.create(0, 0);

    velocity.setLength(3);
    velocity.setAngle(Math.PI / 6);
    */
        //p = particle.create(100, 100, 3, Math.PI / 6);
        particles = [],
        numParticles = 100;

    for (var i = 0; i < numParticles; i++) {
        particles.push(particle.create(width / 2, height / 2, Math.random()* 4 + 1, Math.random() * Math.PI * 2));
    }

    update();

    function update(){
        //context.clearRect(0, 0, width, height);

        //position.addTo(velocity);
        //p.update();
        for (var i = 0; i < numParticles; i++) {
            var p = particles[i];
            p.velocity.setLength(Math.random()* 40 + 1);
            p.velocity.setAngle(Math.random() * Math.PI * 2);
            p.update();
            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 3, 0, Math.PI * 2, false);
            context.fill();
        }
/*
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fill();
*/
        requestAnimationFrame(update);
    }
};