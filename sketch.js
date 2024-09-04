function setup() {
  createCanvas(600, 400);
}//creates a canvas 400 pixels high and 600 pixels wide;


function draw() {
  background(125, 206, 235);
//sun in top right corner
fill( "yellow" ) ; 
stroke( "orange" ) ;
strokeWeight ( 20 ) ;
circle(550, 50, 100) ;
//grass on bottom half
stroke ( 0 ) ; //black outline
strokeWeight ( 1 ) ; //outline thickness
fill ( "green" ) ;
rect ( 0, 200, 600, 200 ) ;
}
