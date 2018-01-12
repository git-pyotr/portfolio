(function() {

var body = document.querySelector("body");
var preview = document.querySelectorAll(".item-preview");
var item = document.querySelector(".module");
var itemImage = document.querySelector(".item-image");
var image = document.querySelector(".image");
var ancor = document.querySelectorAll(".menu-item");

function showModule(elem) {
  var elemPosition = window.pageYOffset;
  item.classList.toggle("show");	
  image.src = "img/" + elem.alt;
  item.style = "top: " + elemPosition + "px";
  body.classList.toggle("scroll-off");
}

item.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.toggle("scroll-off");
  item.classList.toggle("show");	
});

for (var i = 0; i < preview.length; i++) {
	preview[i].addEventListener("click", function(event) {
    event.preventDefault();

    showModule(this.firstElementChild);
	});
}

for (var i = 0; i < ancor.length; i++) {
	ancor[i].addEventListener("click", function(event) {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    this.classList.add("active");
	});
} 

})();