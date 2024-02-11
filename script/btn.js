let btn_state = false
const btn_buy = document.getElementById("btn_buy")
let bank = 0
let product_price = document.querySelector(".product__price")
let basket_price = document.querySelector(".basket__prise")
console.log(product_price) 
function buy() {
    console.log("buy")
    if (btn_state === false) {
        btn_buy.innerHTML = "в корзине";
        btn_buy.style.background = "red";
        btn_state=true
    }
    else{
        btn_buy.innerHTML = "покупка";
        btn_buy.style.background = "silver";
        btn_state=false
    }

}