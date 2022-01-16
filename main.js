noseX = 0
noseY = 0
function preload(){
clownNose = loadImage('https://i.postimg.cc/BnD0D9Cn/download.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('Model Loaded');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-10;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}
}

function draw() {
    image(video,0,0,400,400);
    image(clownNose,noseX,noseY,30,30);
}

function take_snapshot(){
save('myFilterImage.png');
}