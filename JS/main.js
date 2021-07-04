"use strict";

function showMenu() {
    const menu = document.querySelector(".mobile-menu");
    const buttonMenu = document.querySelector(".btn-mobile");
    const content = document.querySelector(".mobile-wrapper");

    menu.classList.add("mobile__active");

    setTimeout( () => buttonMenu.style.display = "inline-flex", 400);
    content.style.display = "flex";
}




function closeMenu() {
    const menu = document.querySelector(".mobile-menu");
    const buttonMenu = document.querySelector(".btn-mobile");
    const content = document.querySelector(".mobile-wrapper");

    menu.classList.remove("mobile__active");
    buttonMenu.style.display = "none";
    content.style.display = "none";
}



//скрипт керпки наверх и блока поделиться


// скрипт для кнопки наверх

let bodyElem = document.body;
//обработчик событий
window.onscroll = function () {
	toTop();
};

document.documentElement.setAttribute("style", "scroll-behavior: smooth");

function toTop() {
    const menu = document.querySelector(".mobile-menu");
	let buttonScroll = document.querySelector(".back-to-top");

	        if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
                buttonScroll.classList.add("back-to-active");
	        } else {
		        buttonScroll.classList.remove("back-to-active");
	        }

}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//скрипт для блока поделиться
function showMedia() {
	const platforms = document.querySelector(".content-m-share");
	const linksPlatform = document.querySelectorAll(".link-m-link");

	platforms.classList.toggle("disabled");

		for (let i = 0; i < linksPlatform.length; i++) {
			linksPlatform[i].classList.toggle("actived-link");
		}
} 


//скрипт для прелоадера
let mask = document.querySelector(".mask");

window.addEventListener("load", () => {
    mask.classList.add("hide");

    setTimeout( () => mask.remove(), 400 );
})



