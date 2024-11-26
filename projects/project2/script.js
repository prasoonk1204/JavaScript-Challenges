document.querySelector(".barMain").style.width = "0%";

const btnNext = document.querySelector(".btnN");
btnNext.addEventListener("click", () => {
  barFill();
  itemFill();
  updateBtn();
});

const btnPrev = document.querySelector(".btnP");
btnPrev.addEventListener("click", () => {
  itemEmp();;
  barEmp();
  updateBtn();
});

function barFill() {
  let x = parseFloat(document.querySelector(".barMain").style.width);
  if (x != 90) {
    x = x + 30;
    document.querySelector(".barMain").style.width = x + "%";
  }
}

function itemFill() {
  let y = parseFloat(document.querySelector(".barMain").style.width);
  if (y >= 30) {
    document.querySelector(".i2").classList.add("active");
  }
  if (y >= 60) {
    document.querySelector(".i3").classList.add("active");
  }
  if (y >= 90) {
    document.querySelector(".i4").classList.add("active");
  }
}

function barEmp() {
  let a = parseFloat(document.querySelector(".barMain").style.width);
  if (a != 0) {
    a = a - 30;
    document.querySelector(".barMain").style.width = a + "%";
  }
}

function itemEmp() {
  let b = parseFloat(document.querySelector(".barMain").style.width);
  if (b <= 30) {
    document.querySelector(".i2").classList.remove("active");
  }
  if (b <= 60) {
    document.querySelector(".i3").classList.remove("active");
  }
  if (b <= 90) {
    document.querySelector(".i4").classList.remove("active");
  }
}

function updateBtn(){
    let z = parseFloat(document.querySelector(".barMain").style.width);

    if (z == 0){
        btnPrev.disabled = true;
        btnPrev.style.background = "#6c6c6c";
    }
    else {
        btnPrev.disabled = false;
        btnPrev.style.background = "#0091ff";
    }

    if (z == 90) {
      btnNext.disabled = true;
      btnNext.style.background = "#6c6c6c";
    } 
    else {
      btnNext.disabled = false;
      btnNext.style.background = "#0091ff";
    }
}
updateBtn();