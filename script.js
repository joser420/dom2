console.log("Script started") 
function changeColor(){
    console.log("click");
    let color = prompt("enter a new color for the poem");
    let poem = document.getElementById("poem");
    
    poem.style.color = color;
}
