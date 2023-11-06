const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

console.log(menu);
console.log(menuIcon);

menuIcon.addEventListener("click", () => {
	menu.classList.toggle("-top-96");
	menu.classList.toggle("top-20");
	menu.classList.toggle("min-h-screen");
});

const explorer = document.getElementById("explorer");
const adventurer = document.getElementById("adventurer");
const infinity = document.getElementById("infinity");

window.addEventListener("resize", () => wordChange());

function wordChange() {
	if (window.innerWidth > 640) {
		explorer.innerHTML = "$";
		adventurer.innerHTML = "$$";
		infinity.innerHTML = "$$$";
	} else {
		explorer.innerHTML = "Affordable Exploration";
		adventurer.innerHTML = "Best Selling Rocket";
		infinity.innerHTML = "Luxury Starship";
	}
}

wordChange();

let menuItems = document.getElementsByClassName("menu-item");
menuItems = Array.from(menuItems);

menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", () => {
		menu.classList.toggle("-top-96");
		menu.classList.toggle("top-20");
		menu.classList.toggle("min-h-screen");
	});
});
