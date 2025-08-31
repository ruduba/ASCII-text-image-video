const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";


function preload(){
    test = loadImage('assets/test.png');
}


function setup(){
    createCanvas(400, 400).parent("canvas-container");
}

function draw(){
    background(0);
    //image(test, 0, 0, width, height);

    let w = width/test.width;
    let h = height/test.height;

    test.loadPixels();

    for(let i =0; i< test.width; i++){
        for(let j =0; j< test.height; j++){
            const pIndex = (i+j*test.width) * 4;
            const r = test.pixels[pIndex+0];
            const g = test.pixels[pIndex+1];
            const b = test.pixels[pIndex+2];
            const avg = (r+ g+ b)/3;

            noStroke();
            fill(255);
            //square(i*w, j*h, w);

            const len = density.length;
            const cIndex = floor(map(avg, 0, 255, len, 0));
            textSize(w);
            textAlign(CENTER, CENTER);
            text(density.charAt(cIndex), i*w+w*0.5, j*h+h*0.5);
        }
    }

}