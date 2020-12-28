var ball;
var position ,database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    var loc = database.ref("ball/positions");
    
    
    loc.on("value",readop,showerror);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/positions").update({
        x:ball.x+x,
        y:ball.y+y
    })
}

function readop(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function showerror(){
    console.log(error);
}