const leftButton = document.getElementById("left-button")
const rightButton = document.getElementById("right-button")

window.addEventListener("keydown",(e)=>{
    switch (e.key) {
        case "rightArrow":
        goToNextPage()
        break;
        case "leftArrow":
        goToPreviousPage();
        break;
        case "downArrow":
        goToNextPage()
        break;
        case "upArrow":
        goToPreviousPage();
        break;
        default:
        break;
    }
})


leftButton.addEventListener("click",()=>{goToPreviousPage();})
rightButton.addEventListener("click",()=>{goToNextPage();})

leftButton.addEventListener("touch",()=>{goToPreviousPage();})
rightButton.addEventListener("touch",()=>{goToNextPage();})

function goToNextPage(){
    let sections = document.querySelectorAll("section");

}