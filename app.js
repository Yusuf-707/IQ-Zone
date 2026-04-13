let body = document.querySelector("body")
//header
let header = document.querySelector("header")
let menu = document.querySelector(".menu");
let menus = document.querySelector(".menusa");

let btnBoy = document.querySelector(".btn-boy");
//years
let boyYears = document.querySelector(".boy-years");
//boy year
let BoyYear12 = document.querySelector(".byear12");
let BoyYear1215 = document.querySelector(".byear1215");
let BoyYear1518 = document.querySelector(".byear1518");
let BoyYear18 = document.querySelector(".byear18");
//test boy
let tests = document.querySelectorAll(".test");
let testBoy12 = document.querySelector(".test-boy-12");
let testBoy1215 = document.querySelector(".test-boy-1215");
let testBoy1518 = document.querySelector(".test-boy-1518");
let testBoy18 = document.querySelector(".test-boy-18");
//footer
let footer = document.querySelector("footer")

function hiddenMenus() {
    menus.classList.add("hidden")
}

//   Header  Menus
menu.addEventListener("click", () => {
    menus.classList.toggle("hidden")
})

// ! tests.addEventListener("click", hiddenMenus)
// years boy & girl
boyYears.addEventListener("click", hiddenMenus)

//test boy
BoyYear12.addEventListener("click", () => {
    testBoy12.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus
})
BoyYear1215.addEventListener("click", () => {
    testBoy1215.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus
})
BoyYear1518.addEventListener("click", () => {
    testBoy1518.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus
})
BoyYear18.addEventListener("click", () => {
    testBoy18.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus
})

footer.addEventListener("click", () => {
    container.classList.remove("hidden");
    boyYears.classList.add("hidden");
    girlYears.classList.add("hidden");
})