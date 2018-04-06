var link = document.querySelector(".popup-link");
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".block-overlay");
var closeButton = popup.querySelector(".close-popup");

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('show-popup');
	overlay.classList.add('show-overlay');
});

closeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('show-popup');
	overlay.classList.remove('show-overlay');
});

overlay.addEventListener('click', function() {
	popup.classList.remove('show-popup');
	overlay.classList.remove('show-overlay');
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27 && popup.classList.contains('show-popup')) {
		evt.preventDefault();
		popup.classList.remove('show-popup');
		overlay.classList.remove('show-overlay');
	}
});