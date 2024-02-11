const bady=document.querySelector("bady")
const header__item=document.querySelector(".header__link")

function dark(){
console.log("тёмный")
bady.style.background="grey"
}
function light(){
    console.log("светлый")
    bady.style.background="white"
    header__item.forEach(element => {
element.style.color=
    })
}
