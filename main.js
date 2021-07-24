function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 175);

    canvas = createCanvas(500, 400);
    canvas.position(800, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model Successfuly Loaded!");
}

function draw(){
    background("#FFFF00");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}