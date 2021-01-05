var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.createElement("button");


function setGradient(){
    body.style.background = "linear-gradient(to right, "
        + color1.value + ","
        + color2.value + ")";
    css.textContent = body.style.background + ";";

}

function createButton() {
    button.appendChild(document.createTextNode("Generate a random gradient!"));
    body.appendChild(button);
}

body.style.background = "linear-gradient(to right, "
        + color1.value + ","
        + color2.value + ")";
    css.textContent = body.style.background + ";"

createButton();

button.addEventListener("click", function(){
    color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
})
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
