
const SoundPressureText = document.getElementById("SoundPressureText");
const SoundPressureSlider = document.getElementById("SoundPressureSlider");
const SoundPressureCanvas = document.getElementById("SoundPressureCanvas");
const SPC=SoundPressureCanvas.getContext("2d");

var SoundPressureValue = 10**(50/20);; // Pascals

SoundPressureText.textContent="Pressure: "+Math.round(SoundPressureValue)+" Pa";
    
let Patm = 100000;
let oscillations = 5;
let lengthPressureRandom=1000;
let randomnessPressureRandom=0.25;
const pressureRandom = new Array(lengthPressureRandom).fill(0).map((x,i) => Math.sin(i/lengthPressureRandom*2*Math.PI*oscillations)+randomnessPressureRandom*(Math.random()-1));


SoundPressureUpdate(SoundPressureValue)

SoundPressureSlider.oninput = function(){ 
    let rangeLevel=this.value;
    SoundPressureValue=10**(rangeLevel/20);
    SoundPressureText.textContent="Pressure: "+Math.round(SoundPressureValue)+" Pa";
    SoundPressureUpdate(SoundPressureValue)


}

function SoundPressureUpdate(SoundPressureValue){
    // clear canvas
    SoundPressureCanvas.width=SoundPressureCanvas.clientWidth;
    SoundPressureCanvas.height=SoundPressureCanvas.clientHeight;

    SPC.clearRect(0,0,SoundPressureCanvas.width,SoundPressureCanvas.height)

    // Draw axis
    let x2px = x => x*SoundPressureCanvas.width;
    let y2px = y => (1-y)*SoundPressureCanvas.height;
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    SPC.beginPath()
    SPC.strokeStyle = 'black';
    SPC.lineWidth = 2;
    SPC.fontSize = 1*rem;
    SPC.moveTo(x2px(.1),y2px(.9))
    SPC.lineTo(x2px(.1),y2px(.1))
    SPC.lineTo(x2px(.9),y2px(.1))
    SPC.stroke()

    // Draw Patm line
    SPC.beginPath()
    SPC.strokeStyle = 'blue';
    SPC.lineWidth = 1;
    SPC.moveTo(x2px(.1),y2px(.5))
    SPC.lineTo(x2px(.9),y2px(.5))
    SPC.stroke()

    // Text Patm
    SPC.font = 0.1*SoundPressureCanvas.height+"px Arial ";
    SPC.fillText("Patm",x2px(0.9),y2px(.5))
    SPC.fillText("p",x2px(0.05),y2px(.5))
    SPC.fillText("Time",x2px(0.5),y2px(.01))

    // Pressure signal
    SPC.beginPath()
    SPC.strokeStyle = 'red';
    SPC.lineWidth = 1;
    SPC.moveTo(x2px(.1),y2px(.5))
    pressureRandom.forEach((y,i)=> {SPC.lineTo(x2px(.1+i/lengthPressureRandom*.8), y2px(y*SoundPressureValue/Patm*.4+.5))})
    SPC.stroke()

}




