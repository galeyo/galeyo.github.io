//Navigation toggle button
var buttonToggler = document.querySelector(".navbar-toggler");
buttonToggler.onclick = function() {
	var nav = document.querySelector(".navbar-list-link");
	if (nav.className === "navbar-list-link") {
		nav.className += " responsive";
	} else {
		nav.className = "navbar-list-link";
	}
}

//Scroll fadeIn navigation menu 
window.onscroll = () => scrollFunction();
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.querySelector(".navbar").style.backgroundColor = "#ffffff";
	} else {
		document.querySelector(".navbar").style.backgroundColor = "";
	}
}
