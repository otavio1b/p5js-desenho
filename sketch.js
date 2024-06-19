let brushSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Desenha um círculo onde o mouse é pressionado
  if (mouseIsPressed) {
    let col = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 200);
    fill(col);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}

function keyPressed() {
  // Limpa a tela quando a tecla 'C' é pressionada
  if (key === 'c' || key === 'C') {
    background(255);
  }
  // Aumenta o tamanho do pincel com a tecla 'UP'
  if (keyCode === UP_ARROW) {
    brushSize += 5;
  }
  // Diminui o tamanho do pincel com a tecla 'DOWN'
  if (keyCode === DOWN_ARROW) {
    brushSize = max(5, brushSize - 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}
