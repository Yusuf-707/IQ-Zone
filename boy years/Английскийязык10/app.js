let body = document.querySelector("body");
//header
let header = document.querySelector("header");
let menu = document.querySelector(".menu");
let menus = document.querySelector(".menusa");
let minut = document.querySelector(".minut");
let secunt = document.querySelector(".secunt");
//form
let main = document.querySelector("main");
const testFormes = document.querySelectorAll(".test-form");
// answers
let kontrolBtn = document.querySelector(".kontrol-btn");
let trueResult = document.querySelector(".true-result");
let falseResult = document.querySelector(".false-result");
//modal
let modal = document.querySelector(".modal");
let trueText = document.querySelector(".truetext");
let falseText = document.querySelector(".falsetext");
//footer
let footer = document.querySelector("footer");
function hiddenMenus() {
  menus.classList.add("hidden");
}
function hesapla() {
  let correct = 0;
  let falseCorrect = 0;
  let answers = document.querySelectorAll('input[type="radio"]:checked');
  answers.forEach((item) => {
    if (item.value === "true") {
      correct++;
    } else {
      falseCorrect++;
    }
  })
  main.classList.add("hidden");
  modal.classList.add("show");
  trueText.textContent = correct;
  falseText.textContent = falseCorrect;
};
// true & folse
kontrolBtn.addEventListener("click", () => {
  hesapla()
  clearInterval(interval)
  });

//   Header  Menus
menu.addEventListener("click", () => {
  menus.classList.toggle("hidden");
});
//hour
let minuta = 15;
let sekunta = 0;

let interval = setInterval(() => {
  if (sekunta === 0) {
    if (minuta === 0) {
      hesapla();
      return;
    }
    minuta --;
    sekunta = 59;
  }else {
    sekunta --;
  };
  minut.textContent = String(minuta).padStart(2, "0");
  secunt.textContent = String(sekunta).padStart(2, "0");
}, 1000);
testFormes.forEach((testForm) => testForm.classList.add("hidden"));
const mathRandom = Array.from(testFormes).sort(() => 0.5 - Math.random());
const random10 = mathRandom.slice(0, 10);
random10.forEach((testForm) => testForm.classList.remove("hidden"));


//footer
footer.addEventListener("click", hiddenMenus);
