const density = "Ñ@#W$9876543210?!abc;:+=-,._                      ";

let video;

let asciiDiv;

let isFrozen = false;


function setup(){
    noCanvas();
    video = createCapture(VIDEO).parent("canvas-container");
    video.size(75, 75);
    asciiDiv = createDiv().parent("canvas-container");

    document.querySelector(".capture").addEventListener("click", () => isFrozen = true);
    document.querySelector(".start").addEventListener("click", () => isFrozen = false);
    }

    function draw(){

   if(isFrozen) return;
    background(0);


    //image(test, 0, 0, width, height);

    //let w = width/test.width;
    //let h = height/test.height;

    video.loadPixels();
        let asciiImg = '';

 
    for(let j=0; j< video.height; j++){
            //let row = '';
        for(let i =0; i< video.width; i++){
            const pIndex = (i+j*video.width) * 4;
            const r = video.pixels[pIndex+0];
            const g = video.pixels[pIndex+1];
            const b = video.pixels[pIndex+2];
            const avg = (r+ g+ b)/3;

            const len = density.length;
            const cIndex = floor(map(avg, 0, 255, len, 0));

            const c = density.charAt(cIndex);
            if(c == ' ') asciiImg+= '&nbsp;'
            else asciiImg +=c;
        
            //row += density.charAt(cIndex);
        }

        asciiImg += '<br/>';
        //console.log(row);
            //createDiv(row).parent("canvas-container");
    }
    
    asciiDiv.html(asciiImg);


}