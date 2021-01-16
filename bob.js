class Bob {
    constructor(x,y,r){
        var ball_options = {
           isStatic : false,
           restitution : 1,
           friction : 0.1,
           density : 1

        }
        this.body = Bodies.circle(x,y,r/2,ball_options);
        World.add(world,this.body);
    }

    display (){

        var pos = this.body.position;
        fill("green");
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.body.circleRadius,this.body.circleRadius);
        
     

    }
}