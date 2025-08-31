const density = "Ñ@#W$9876543210?!abc;:+=-,._                      ";

let video;

let asciiDiv;

let isFrozen = false;

let isFlipped = false;

let textsize = 10;

let slider;



function setup(){
    noCanvas();
    const isMobile = window.innerWidth<600;
    let aspectRatio = window
    const cols = isMobile ? 40: 128;
    const rows = isMobile ? floor((window.innerHeight/window.innerWidth)*cols): 72;
    video = createCapture(VIDEO).parent("canvas-container");
    video.size(cols, rows);
    asciiDiv = createDiv().parent("canvas-container");


    

    document.querySelector(".capture").addEventListener("click", () => isFrozen = true);
    document.querySelector(".start").addEventListener("click", () => isFrozen = false);
    
    document.querySelector(".copy").addEventListener("click", ()=> {
        const asciiText = asciiDiv.html().replace(/<br\>/g, "\n").replace(/&nbsp;/g, "");
       if(isFrozen) {
        navigator.clipboard.writeText(asciiText)
        .then(()=>alert("copied ASII image to clipboard"))
        .catch(err => console.error("copy failed", err));
       }
       else{
        alert("first capture to copy")
       }
    });  
    document.querySelector(".flip").addEventListener("click", () => isFlipped = !isFlipped)




    }
    function draw(){

   if(isFrozen) return;


   // background(0);


    //image(test, 0, 0, width, height);

    //let w = width/test.width;
    //let h = height/test.height;

    video.loadPixels();
        let asciiImg = '';
        
        
    for(let j=0; j< video.height; j++){
            //let row = '';
        for(let i =0; i< video.width; i++){
            let x = isFlipped ? (video.width - 1 - i) : i;
            const pIndex = (x+j*video.width) * 4;
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


