function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
} 

function draw(){
    let c = color(255, 0, 0);
    fill(c);
    noStroke();

    rect(40, 15, 550, 55);
    rect(40, 395, 550, 55)
    rect(15, 15, 55, 400);
    rect(573, 15, 55, 400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(40, 40, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 40, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(40, 420, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(600, 420, 70);
    
}

function take_snapshot(){
    save('picture.png')
} 