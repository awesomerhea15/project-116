noseX = 0;
noseY = 0;

mustache_image = "";

function preload(){
mustache_image = loadImage("https://i.postimg.cc/nr1MxCtL/mustache-image.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache_image, noseX, noseY, 30, 30);

}

function take_snapshot(){
    save("image.png")
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }

}
