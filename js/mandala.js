let symmetry = 12;
let angle;

function setup() {
  angle = 360 / symmetry;
  const canvas = createCanvas(600, 600);
  canvas.parent('mandala-container');
  canvas.id('mandala-canvas'); // <- le damos un ID al canvas
  background(20);

  angleMode(DEGREES);
  colorMode(HSB);
  strokeWeight(2);

  select('#guardarMandala').mousePressed(saveMandala);
  select('#limpiarMandala').mousePressed(clearCanvas);
}


function windowResized() {
  let container = select('#mandala-container');
  let size = min(container.width, container.height);
  resizeCanvas(size, size);
  background(20);
}


function draw() {
  translate(width / 2, height / 2);
  if (mouseIsPressed && mouseY > 0) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    let hue = map(mx, -width / 2, width / 2, 0, 360);
    stroke(hue, 80, 100);

    for (let i = 0; i < symmetry; i++) {
      rotate(angle);
      line(mx, my, pmx, pmy);
      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}

function saveMandala() {
  saveCanvas('mandala', 'png');
}

function clearCanvas() {
  background(20);
}

