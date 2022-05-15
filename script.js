const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.onclick = () => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
