let blr = document.querySelector(".img");
let cnt = document.querySelector(".cc");

blr.addEventListener("load", () => {
  bl();
});

function bl() {
  let i= 100;
  const interval = setInterval(() => {
    blr.style.filter = `blur(${i}px)`;
    cnt.textContent = `${i}%`;
    if (i === 0) {
      clearInterval(interval);
      cnt.style.display = "none";
    }
    i--;
  }, 30)
}

