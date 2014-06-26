var particle = {
    position: null,
    velocity: null,
    centerY: null,
    centerX: null,
    xRadius: 400,
    yRadius: 200,
    xSpeed: .1,
    ySpeed: .131,
    xAngle: 0,
    yAngle: 0,

    create: function(x, y, speed, direction){
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.centerX = x;
        obj.centerY = y;
        obj.velocity = vector.create(0 ,0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        return obj;
    },

    update: function(){
        this.position._x = this.centerX + Math.cos(this.xAngle) * this.xRadius;
        this.position._y = this.centerY + Math.sin(this.yAngle) * this.yRadius;
        this.xAngle += this.xSpeed;
        this.yAngle += this.ySpeed;

        this.position.addTo(this.velocity);

    }
}