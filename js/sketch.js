const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";


function preload(){
    test = loadImage('assets/test.png');
}


function setup(){
    noCanvas();
    //video = createCapture(VIDEO);
    //video.size(48, 48)
    
    background(0);
    //image(test, 0, 0, width, height);

    let w = width/test.width;
    let h = height/test.height;

    test.loadPixels();

    for(let j=0; j< test.height; j++){
            let row = '';
        for(let i =0; i< test.width; i++){
            const pIndex = (i+j*test.width) * 4;
            const r = test.pixels[pIndex+0];
            const g = test.pixels[pIndex+1];
            const b = test.pixels[pIndex+2];
            const avg = (r+ g+ b)/3;

            const len = density.length;
            const cIndex = floor(map(avg, 0, 255, len, 0));

            const c = density.charAt(cIndex);
            if(c == ' ') row+= '&nbsp;'
            else row +=c;
        
            //row += density.charAt(cIndex);
        }
        //console.log(row);
            createDiv(row).parent("canvas-container");
    }


}