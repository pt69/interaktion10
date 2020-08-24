var button;

function setup() {
  createCanvas(400, 300);
  background(240);

  button = createButton("Plopp!");
  button.position(20, 20);
  button.mousePressed(plopp);
  button.style('padding', '5px 5px')
        .style('width', '100px')
        .style('font-size', '25px')
        .style('background-color', 'rgb(100, 200, 50)')
        .style('color', 'rgb(255, 255, 255)')
        .style('border-style', 'solid')
        .style('border-color', 'rgb(255, 255, 255)')
        .style('cursor', 'pointer')
        .style('outline', 'none')
        .style('margin', '0px')
        .style('font-family', 'Indie Flower')  
}

function draw() {
}

function plopp() {
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(10,60));
}