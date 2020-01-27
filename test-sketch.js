/* Jan. 23, 2020 
My goal is to create a green city on a blue background
*/

//setup
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

//drawing fxn
function draw() {
// declaration of variables:allows to change where city & symbols are located on canvas
var x = 200;
var y = 200;
  // line 1
line(x, y+100, x, y+200);
  stroke(75)
  strokeWeight(2);
  //line 2
  line(x, y+100,x+350,y);
  stroke(75)
  strokeWeight(2);
    //line 3
  line(x, y+200,x+450,y+200);
  stroke(75)
  strokeWeight(2);
  //line 4
    line(x+350, y,x+450,y);
  stroke(75)
  strokeWeight(2);
  //line 4
    line(x+450, y,x+450,y+200);
  stroke(75)
  strokeWeight(2);
  //circle 1
  noStroke();
  fill(255,53,139);
  ellipse(x+100, y+100, 50, 50);
    //circle 2
  noStroke();
  fill(255,53,139);
  ellipse(x+300, y+100, 100, 100);
}
