let gds_item=document.createElement("li")
gds_item.classList.add("gds__item")
const gds_spawn=document.querySelector(".gds__list")
let gds_name=document.createElement("h1")
let gds_titel=document.createTextNode("мороженое")
gds_name.appendChild(gds_titel)
let gds_logo=document.createElement("img")
gds_logo.src="img/35.jpg"
let gds_buton=document.createElement("buton")
let gds_removal=document.createTextNode("удалить")
gds_buton.appendChild(gds_removal)
gds_buton.setAttribute("onclick","del()")
let f1_item=document.querySelectorAll(".gds__item")[0]

function del(){
    gds_buton.parentNode.remove();
    f1_item.classList.remove("hide_f1")
}

function spawning(){
    gds_spawn.appendChild(gds_item)
    gds_item.appendChild(gds_name)
    gds_item.appendChild(gds_logo)
    gds_item.appendChild(gds_buton)
    f1_item.classList.add("hide_f1")
}

