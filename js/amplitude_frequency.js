

var AmplitudeFrequencyCanvas=document.getElementById('AmplitudeFrequencyCanvas');
AmplitudeFrequencyCanvas.width=window.innerWidth*.9;
AmplitudeFrequencyCanvas.height=400;
var c=AmplitudeFrequencyCanvas.getContext('2d');

var Line=function(xcoords,ycoords){
    this.xcoords=xcoords;
    this.ycoords=ycoords;
    this.update=function(xcoords,ycoords){
        this.xcoords=xcoords;
        this.ycoords=ycoords;
        this.draw();
    };
    this.draw=function(){
        AmplitudeFrequencyCanvas.width=AmplitudeFrequencyCanvas.clientWidth;
        AmplitudeFrequencyCanvas.height=AmplitudeFrequencyCanvas.clientHeight;
        c.clearRect(0,0,AmplitudeFrequencyCanvas.width,AmplitudeFrequencyCanvas.height);
        c.beginPath();
        c.moveTo(this.xcoords[0],this.ycoords[0]);
        for(var i=0;i<=this.xcoords.length;i++){
            c.lineTo(this.xcoords[i],this.ycoords[i]);
        }
        c.strokeStyle = 'blue';
        c.lineWidth = 8;
        c.stroke();
    };
}
var line = new Line();
function updateLine(){
    
    let X = linspace(0,AmplitudeFrequencyCanvas.width)
    let Y = add(AmplitudeFrequencyCanvas.height/2,mul(amplitude,X.map(x => Math.sin(2*Math.PI*frequency*x/AmplitudeFrequencyCanvas.width))));
    
    
    line.update(X,Y);
    
}

// GET AMPLITUDE FROM SLIDER
var amplitude = AmplitudeFrequencyCanvas.height/2;
const amplitudeSlider=document.getElementById("amplitudeSlider");
const amplitudeOutput = document.getElementById("amplitudeOutput");
amplitudeSlider.oninput = function(){ 
    amplitude = Math.round(parseInt(this.value)/50*AmplitudeFrequencyCanvas.height/2);
    updateLine();
    amplitudeOutput.textContent="Amplitude:"+amplitude;
}

//GET FREQUENCY FROM SLIDER
var frequency = 1;
const frequencySlider=document.getElementById("frequencySlider");
const frequencyOutput = document.getElementById("frequencyOutput");
frequencySlider.oninput = function(){ 
    frequency=parseInt(this.value)/50;
    updateLine();
    frequencyOutput.textContent="Frequency:"+frequency;
}




updateLine();












// Event listener for window resizing
window.addEventListener('resize',
function(event){
    AmplitudeFrequencyCanvas.width = window.innerWidth;
    AmplitudeFrequencyCanvas.height = window.innerHeight*.9;
    meanposx = AmplitudeFrequencyCanvas.width/2; // mean position in x direction
    meanposy = AmplitudeFrequencyCanvas.height/2; // mean position in y direction
    console.log('Window resized')
    updateLine();
    
})



