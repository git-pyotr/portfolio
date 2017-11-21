(function() {

var preview = document.querySelectorAll(".preview");
var item = document.querySelector(".module");
var itemImage = document.querySelector(".item-image");
var image = document.querySelector(".image");
var ancor = document.querySelectorAll(".menu-item");

item.addEventListener("click", function(event) {
  event.preventDefault();
  item.classList.toggle("show");	
});

for (var i = 0; i < preview.length; i++) {
	preview[i].addEventListener("click", function(event) {
    event.preventDefault();
    var elemPosition = window.pageYOffset + 50;
    item.classList.toggle("show");	
    image.src = "img/" + this.alt;
    itemImage.style = "margin-top: " + elemPosition + "px";
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