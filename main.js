
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM content loaded");

});
let colorBox = document.getElementById("color-box");
let changeColor = document.getElementById("change-color-btn");

// Es6
const getRandomColor=() =>{
let letter = "123456789ABCDEF"
 let color = "#"
 for(let i =0; i<6 ;i++ ){
  color += letter[(Math.random()*16 <<0)];  //math.floor= <<0
  console.log(color)
 }
  colorBox.style.backgroundColor = color;
}
changeColor.addEventListener("click",getRandomColor);


