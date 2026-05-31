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
let modal = document.querySelector(".modal-test");
let answertest = document.querySelector(".answerTest");
let trueText = document.querySelector(".truetext");
let falseText = document.querySelector(".falsetext");
// modal close
let overlayClose = document.querySelector(".overlay");
let CloseModalClose = document.querySelector(".fa-xmark");
let CloseModalClose2 = document.querySelector(".btn-ok");
//footer
let footer = document.querySelector("footer");
let exitCount = 0;
let minuta = 15;
let sekunta = 0;

let newData = new Date();
const randomTest = () => {
  testFormes.forEach((testForm) => testForm.classList.add("hidden"));
  const mathRandom = Array.from(testFormes).sort(() => 0.5 - Math.random());
  const random10 = mathRandom.slice(0, 10);
  random10.forEach((testForm) => testForm.classList.remove("hidden"));
};
randomTest();

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
  });
  if (correct == 10) {
    answertest.textContent = "Полное понимание.";
  } else if (correct == 9 || correct == 8) {
    answertest.textContent = "Хороший результат.";
  } else if (correct == 7 || correct == 6) {
    answertest.textContent = "Средний уровень.";
  } else if (correct == 5) {
    answertest.textContent = "Начальный уровень.";
  } else if (correct == 0 || falseCorrect == 0) {
    answertest.textContent = "Пожалуйста, сделай что-нибудь.";
  } else {
    answertest.textContent = "Нужно больше учиться.";
  }
  main.classList.add("hidden");
  modal.classList.remove("hidden");
  trueText.textContent = correct;
  falseText.textContent = falseCorrect;
  let hour =
    newData.getHours() < 10 ? "0" + newData.getHours() : newData.getHours();
  let minut =
    newData.getMinutes() < 10
      ? "0" + newData.getMinutes()
      : newData.getMinutes();
  let date =
    newData.getDate() < 10 ? "0" + newData.getDate() : newData.getDate();
  let month = String(newData.getMonth() + 1).padStart(2, "0");
  let year = newData.getFullYear();
  let timeMinut = 14 - minuta;
  let timeSecunt = 60 - sekunta;
  let list = JSON.parse(localStorage.getItem("list")) || [];
  list.push({
    correct : correct,
    falseCorrect : falseCorrect,
    time: `${timeMinut < 10 ? "0" + timeMinut : timeMinut}:${timeSecunt < 10 ? "0" + timeSecunt : timeSecunt}`,
    data: `${date}.${month}.${year}`,
    hour : `${hour}:${minut}`
  });
  localStorage.setItem("list", JSON.stringify(list));
  console.log(list);
}
// true & folse
kontrolBtn.addEventListener("click", () => {
  hesapla();
  clearInterval(interval);
  document.addEventListener("visibilitychange", () => {
    exitCount = 0;
  });
  document.addEventListener("mouseleave", (e) => {
    if (e.clientY <= 0) exitCount = 0;
  });
});

//   Header  Menus
menu.addEventListener("click", () => {
  menus.classList.toggle("hidden");
});
//hour
let interval = setInterval(() => {
  if (sekunta === 0) {
    if (minuta === 0) {
      hesapla();
      return;
    }
    minuta--;
    sekunta = 59;
  } else {
    sekunta--;
  }
  minut.textContent = String(minuta).padStart(2, "0");
  secunt.textContent = String(sekunta).padStart(2, "0");
}, 1000);
// modal close
function HandleExit() {
  exitCount++;
  if (exitCount === 2) {
    overlayClose.classList.remove("hidden");
  }
  if (exitCount === 3) {
    let inputRadio = document.querySelectorAll('input[type="radio"]');
    inputRadio.forEach((radio) => (radio.checked = false));
    randomTest();
  }
  if (exitCount === 4) exitCount = 0;
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden) HandleExit();
});
document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 0) HandleExit();
});
CloseModalClose.addEventListener("click", () => {
  overlayClose.classList.add("hidden");
});
CloseModalClose2.addEventListener("click", () => {
  overlayClose.classList.add("hidden");
});
//footer
footer.addEventListener("click", hiddenMenus);
