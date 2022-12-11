// Selects the h3 tag
var css = document.querySelector("h3");
// Selects the color1 class
var color1 = document.querySelector(".color1");
// Selects the color2 class
var color2 = document.querySelector(".color2");
// Selects the gradient id associated with the body tag
var body = document.getElementById("gradient");

// console.log(body);
// body.style.background = "red";
// console.log(css);
// console.log(color1);
// console.log(color2);

// Changes the gradient background to the 
// range between the colors chosen by the user
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

// 
	css.textContent = body.style.background + ";";
	// The result will appear in the h3 area
	// Copy it the the background of the css
	// to keep the colors selected on any web page
}

// Listens for color1 to change
color1.addEventListener("input", setGradient);
	// console.log(color1.value);

// Listens for color2 to change
color2.addEventListener("input", setGradient);
	// console.log(color2.value);
