const iconBurguer = document.querySelector("#icon_lines");
const menu = document.querySelector("#menu");
iconBurguer.addEventListener("click",function(){
    menu.classList.toggle("show_menu");
});