
// Plotting library in JS
var currentFigureElem, figureNumber=0;

var figure=function(parent=document.querySelector("body")){
    figureNumber=figureNumber+1;
    let figureDiv=document.createElement("div");
    figureDiv.style("display:flex;flex-direction:column;align-items:center;justify-contents:center;")
    currentFigureElem=document.createElement("canvas");
    currentFigureElem.style="width:80%lheight:80%;border: 1px solid black";
    figureDiv.appendChild(currentFigureElem)
}



var plot = function(x,y,{...args}){

    



}











