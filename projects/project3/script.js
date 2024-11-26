document.querySelector(".cont").style.width = "50px";
let s = document.querySelector(".icon");

s.addEventListener("click", () => {
    sBarExp()
});

function sBarExp() {
  let a = document.querySelector(".cont").style.width;
  if(a=="50px"){
    document.querySelector(".input").style.display = "initial";
    document.querySelector(".cont").style.width = "350px";
  }
  else{
    document.querySelector(".input").style.display = "none";
    document.querySelector(".cont").style.width = "50px";
  }
  }

    
