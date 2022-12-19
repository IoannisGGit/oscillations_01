const canvasWidth = 1400;
const canvasHeight = 600;
const cellSize = 100;
const cellPadding = cellSize - cellSize / 4;
const numCircles = 10;
let rows, cols;
let c1, c2, c3;
let t = 0;
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    rows = canvasWidth / cellSize;
    cols = canvasHeight / cellSize;

    //colors
    c1 = color(125, 173, 11);
    c2 = color(179, 12, 24);
    c3 = color(80, 15, 123);
}

function draw() {
    background(0);
    stroke(255);
    fill(0);
    noStroke();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // rect(i * cellSize, j * cellSize, cellSize, cellSize);
            push();
            translate(i * cellSize + cellSize / 2, j * cellSize + cellSize / 2);

            const index = i * cols + j;
            const cIndex = i * rows + j;

            for (let k = numCircles; k > 0; k--) {
                const diameter = map(k, 0, numCircles - 1, 20, cellPadding);
                const offsetRadius = map(k, 0, numCircles - 1, 20, 0);
                const x = offsetRadius * cos(t + t * index * 0.07);
                const y = offsetRadius * sin(t + t * index * 0.07);
                indexToColor(k + cIndex);
                circle(x, y, diameter);
            }

            pop();
        }
    }
    t += 0.02;
}

function indexToColor(_index) {
    if (_index % 3 === 0) fill(c2);
    else if ((_index + 1) % 3 === 0) fill(c3);
    else fill(c1);
}
