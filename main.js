function preload() {
}
function setup(){
    canvas= createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
   video.hide() ;
}
function draw (){
    image(video,0,0,640,480);
    stroke('red');
  strokeWeight(5);
  fill(255,0,0)
    circle(40, 40, 60);
    circle(610,40,60)
circle(40,460,60)
circle(610,460,60)
rect(50, 40, 530, 20);
stroke('green');
  strokeWeight(5);
  fill(0,255,0)
  rect(50, 40, 530, 20);
 rect(40,460,530,20)
 rect(30, 30, 25, 400);
 rect(610,30,25,400)

}
function take_snapshot(){
    save('student_name.png');
}
