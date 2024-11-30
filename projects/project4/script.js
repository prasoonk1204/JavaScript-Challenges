let m1 = document.querySelector(".m1")
let m2 = document.querySelector(".m2")


m1.addEventListener('click', ()=> {
    rotateMenu();
    rotate();
    appear();
} )

m2.addEventListener('click', ()=> {
    rotateMenuUndo();
    rotateUndo();
    appearUndo();

} )

function rotate() {
    document.getElementById("main").style.transform = "rotate(-25deg)";
}
function rotateMenu() {
    document.querySelector(".menu").style.rotate = "-90deg";
}
function rotateUndo() {
    document.getElementById("main").style.transform = "rotate(0deg)";
}
function rotateMenuUndo() {
    document.querySelector(".menu").style.rotate = "0deg";
}

function appear() {
    document.querySelector(".i1").style.animation = "slide .8s";
    document.querySelector(".i2").style.animation = "slide .8s";
    document.querySelector(".i3").style.animation = "slide .8s";
}
function appearUndo() {
    document.querySelector(".i1").style.animation = "slideUndo .5s linear";
    document.querySelector(".i1").style.animationDelay = "120ms";
    document.querySelector(".i2").style.animation = "slideUndo .5s linear";
    document.querySelector(".i2").style.animationDelay = "60ms";
    document.querySelector(".i3").style.animation = "slideUndo .5s linear";
}

