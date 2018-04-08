var link = document.querySelector(".popup-link");
var mapLink = document.querySelector(".main-contacts-map")
var popup = document.querySelector(".popup");
var popupMap = document.querySelector(".popup-map");
var overlay = document.querySelector(".block-overlay");
var closeButton = popup.querySelector(".close-popup");
var closeMap = popupMap.querySelector(".close-popup");

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('show-popup');
	overlay.classList.add('show-overlay');
});

mapLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupMap.classList.add("show-popup");
	overlay.classList.add("show-overlay");
});

closeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('show-popup');
	overlay.classList.remove('show-overlay');
});

closeMap.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupMap.classList.remove("show-popup");
	overlay.classList.remove("show-overlay");
})

overlay.addEventListener('click', function() {
	popup.classList.remove('show-popup');
	popupMap.classList.remove("show-popup");
	overlay.classList.remove('show-overlay');
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27 && popup.classList.contains('show-popup')) {
		evt.preventDefault();
		popup.classList.remove('show-popup');
		overlay.classList.remove('show-overlay');
	}
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27 && popupMap.classList.contains('show-popup')) {
		evt.preventDefault();
		popupMap.classList.remove('show-popup');
		overlay.classList.remove('show-overlay');
	}
});