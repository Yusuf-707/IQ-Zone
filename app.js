let body = document.querySelector("body")
//header
let header = document.querySelector("header")
let menu = document.querySelector(".menu");
let menus = document.querySelector(".menusa");

let btnBoy = document.querySelector(".btn-boy");
//years
let boyYears = document.querySelector(".boy-years");
//boy year
let BoyYear10 = document.querySelector(".byear10");
let BoyYear1114 = document.querySelector(".byear1114");
let BoyYear1518 = document.querySelector(".byear1518");
let BoyYear18 = document.querySelector(".byear18");
//test boy
let tests = document.querySelectorAll(".test");
let testBoy10 = document.querySelector(".test-boy-10");
let testBoy1114 = document.querySelector(".test-boy-1114");
let testBoy1518 = document.querySelector(".test-boy-1518");
let testBoy18 = document.querySelector(".test-boy-18");
// TODO test15,18
    //* matematika
let matematika1518Uruvin = document.querySelector(".matematika1518-uruvin")
let matematika1518 = document.querySelector(".matematika1518")
    //* himiya
let himiya1518 = document.querySelector(".himiya1518")
let himiya1518Uruvin = document.querySelector(".himiya1518-uruvin")
    //* inglish
let inglish1518 = document.querySelector(".inglish1518")
let inglish1518Uruvin = document.querySelector(".inglish1518-uruvin")
    //* fizika
let fizika1518 = document.querySelector(".fizika1518")
let fizika1518Uruvin = document.querySelector(".fizika1518-uruvin")

// TODO test 18
    //* matematika
let matematika18Uruvin = document.querySelector(".matematika18-uruvin")
let matematika18 = document.querySelector(".matematika18")
    //* himiya
let himiya18 = document.querySelector(".himiya18")
let himiya18Uruvin = document.querySelector(".himiya18-uruvin")
    //* inglish
let inglish18 = document.querySelector(".inglish18")
let inglish18Uruvin = document.querySelector(".inglish18-uruvin")
    //* fizika
let fizika18 = document.querySelector(".fizika18")
let fizika18Uruvin = document.querySelector(".fizika18-uruvin")


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
BoyYear10.addEventListener("click", () => {
    testBoy10.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus()
})
BoyYear1114.addEventListener("click", () => {
    testBoy1114.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus()
})
BoyYear1518.addEventListener("click", () => {
    testBoy1518.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus()
})
BoyYear18.addEventListener("click", () => {
    testBoy18.classList.remove('hidden')
    boyYears.classList.add('hidden')
    hiddenMenus()
})

function testboy1518hidden() {
    testBoy10.classList.add("hidden")
    testBoy1114.classList.add("hidden")
    testBoy1518.classList.add('hidden')
}
function testboy18hidden() {
    testBoy18.classList.add("hidden")
}
// TODO test15,18
    //* matematika
matematika1518.addEventListener("click", () => {
    matematika1518Uruvin.classList.remove('hidden')
    testboy1518hidden()
    hiddenMenus()
})
    //* himiya
himiya1518.addEventListener("click", () => {
    himiya1518Uruvin.classList.remove('hidden')
    testboy1518hidden()
    hiddenMenus()
})
    //* inglish
inglish1518.addEventListener("click", () => {
    inglish1518Uruvin.classList.remove('hidden')
    testboy1518hidden()
    hiddenMenus()
})
    //* fizika
fizika1518.addEventListener("click", () => {
    fizika1518Uruvin.classList.remove('hidden')
    testboy1518hidden()
    hiddenMenus()
})
//TODO test 18
    //* matematika
matematika18.addEventListener("click", () => {
    matematika18Uruvin.classList.remove('hidden')
    testboy18hidden()
    hiddenMenus()
})
    //* himiya
himiya18.addEventListener("click", () => {
    himiya18Uruvin.classList.remove('hidden')
    testboy18hidden()
    hiddenMenus()
})
    //* inglish
inglish18.addEventListener("click", () => {
    inglish18Uruvin.classList.remove('hidden')
    testboy18hidden()
    hiddenMenus()
})
    //* fizika
fizika18.addEventListener("click", () => {
    fizika18Uruvin.classList.remove('hidden')
    testboy18hidden()
    hiddenMenus()
})

footer.addEventListener("click", () => {
    container.classList.remove("hidden");
    boyYears.classList.add("hidden");
    girlYears.classList.add("hidden");
})