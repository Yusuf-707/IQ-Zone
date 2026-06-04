let header = document.querySelector("header");
let menu = document.querySelector(".menu");
let menus = document.querySelector(".menusa");
let listGroup = document.querySelector(".list-group");
let listId = 0;
menu.addEventListener("click", () => {
  menus.classList.toggle("hidden");
});
let showList = JSON.parse(localStorage.getItem("list")) || [];
if (showList.length) {
  showList.forEach((list, i) => {
    listGroup.innerHTML += `
    <li class="wrap">
                <div class="card">

                    <div class="card-header">
                        <div class="header-left">
                            <span class="session-label">Результат сессии</span>
                            <span class="session-date">${list.data}</span>
                        </div>
                        <div class="time-badge">
                            <i class="ti ti-clock"></i>
                            <span>${list.time}</span>
                        </div>
                    </div>

                    <div class="card-body">

                        <div class="ring-section">
                            <div class="ring-wrap">
                                <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="44" cy="44" r="36" stroke="#e5e4df" stroke-width="8" />
                                    <circle class="ring-correct" cx="44" cy="44" r="36" stroke="#97C459"
                                        stroke-width="8" stroke-dasharray="226.2" stroke-dashoffset="226.2"
                                        stroke-linecap="round" transform="rotate(-90 44 44)" />
                                    <circle class="ring-wrong" cx="44" cy="44" r="36" stroke="#F09595" stroke-width="8"
                                        stroke-dasharray="226.2" stroke-dashoffset="226.2" stroke-linecap="round"
                                        transform="rotate(-90 44 44)" />
                                </svg>
                                <div class="ring-center">
                                    <span class="ring-pct">0%</span>
                                    <span class="ring-sub">результат</span>
                                </div>
                            </div>

                            <div class="ring-stats">
                                <div class="stat-row">
                                    <div class="stat-left">
                                        <span class="stat-dot dot-green"></span>
                                        <span class="stat-name">Правильный ответ</span>
                                    </div>
                                    <span class="stat-val">${list.correct}<span class="denom">/10</span></span>
                                </div>
                                <div class="stat-row">
                                    <div class="stat-left">
                                        <span class="stat-dot dot-red"></span>
                                        <span class="stat-name">Неправильный ответ</span>
                                    </div>
                                    <span class="stat-val">${list.falseCorrect}<span class="denom">/10</span></span>
                                </div>
                                <div class="stat-row">
                                    <div class="stat-left">
                                        <span class="stat-dot dot-gray"></span>
                                        <span class="stat-name">Ответ не получен</span>
                                    </div>
                                    <span class="stat-val">${list.noCorrect}<span class="denom">/10</span></span>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="metrics">
                            <div class="metric">
                                <i class="ti ti-list-numbers metric-icon"></i>
                                <span class="metric-val">10</span>
                                <span class="metric-label">Всего вопросов</span>
                            </div>
                            <div class="metric">
                                <i class="ti ti-hourglass metric-icon"></i>
                                <span class="metric-val">${list.time}</span>
                                <span class="metric-label">Затрата времени</span>
                            </div>
                        </div>

                    </div>

                    <div class="card-footer">
                        <div class="footer-left">
                            <i class="ti ti-calendar"></i>
                            ${list.data}.. ${list.hour}
                        </div>
                        <div class="status-pill">
                            <i class="ti ti-circle-check"></i>
                            удалить
                        </div>
                    </div>

                </div>
            </li>`;
  });
}
let statusPill = document.querySelectorAll(".status-pill");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector("#close-modal-btn");
let deleteBtn = document.querySelector("#delete-btn");
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  listId = 0;
});
statusPill.forEach((e, i) => {
  e.addEventListener("click", () => {
    deleteList(i);
  });
});
console.log(listId);
function deleteList(id) {
  listId = id;
  overlay.classList.remove("hidden");
}
function deleteListFromStorage() {
  showList.splice(listId, 1);
  localStorage.setItem("list", JSON.stringify(showList));
  location.reload();
  listId = 0;
}
deleteBtn.addEventListener("click", deleteListFromStorage);

let correct = list.correct;
let wrong = list.falseCorrect;
let total = 10;
let rc = document.querySelector("ring-correct");
let rw = document.querySelector("ring-wong");
let circ = 226.2;
var cFill = circ * (correct / total);
rc.setAttribute("stroke-dashoffset", circ - cFill);

// Kırmızı yay (yeşilin bittiği yerden başlar)
var wFill = circ * (wrong / total);
var wRot = -90 + (correct / total) * 360;
rw.setAttribute("transform", "rotate(" + wRot + " 44 44)");
rw.setAttribute("stroke-dashoffset", circ - wFill);

// Ortadaki yüzde yazısı
var pct = Math.round((correct / total) * 100);
document.querySelector(".ring-pct").textContent = pct + "%";
