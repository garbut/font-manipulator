function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('posenet is intialized');
}

function gotPoses()
{
    if(results.length > 0)
        {
            console.log(results);
            LeftWristX = results[0].pose.nose.x;
            RightWristX = results[0].pose.nose.y;
            console.log("LeftWristX =" + LeftWristX +'RightWristX = ' + RightWristX);   
            difference = LeftWristX - RightWristX;
            calculated_difference = Math.floor(difference);
            textSize(calculated_difference);
        }
}

function draw()
{
    background('#969A97');
    textSize(10);
    fill('#F90093');
    text('HELLO',10,15)

}



