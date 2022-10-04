song = "";
left_wrist_X = 0;
left_wrist_Y = 0;
right_wrist_X = 0;
right_wrist_Y = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    left_wrist_X = results[0].pose.leftWrist.x;
    left_wrist_Y = results[0].pose.leftWrist.y;
    right_wrist_X = results[0].pose.rightWrist.x;
    right_wrist_Y = results[0].pose.rightWrist.y;
    console.log("Left wrist x = "+left_wrist_X);
    console.log("Left wrist y = "+left_wrist_Y);
    console.log("Right wrist x = "+right_wrist_X);
    console.log("Right wrist y = "+right_wrist_Y);
}
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}