function menuToggle() {
  let displayIcon = document.getElementById("mobile-menu-btn");
  let menu = document.getElementById("mobile-menu");
  menu.classList.toggle("left-[0px]");
  menu.classList.toggle("left-[770px]");

  if (
    displayIcon.src.match(
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1695302633/img/hamburger_mhqxeb.svg"
    )
  ) {
    displayIcon.src =
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1695302635/img/close_aj6xmr.svg";
    displayIcon.classList.toggle("rotate-90");
  } else {
    displayIcon.src =
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1695302633/img/hamburger_mhqxeb.svg";
    displayIcon.classList.toggle("rotate-90");
  }
}

function dropdown() {
  let subMenu = document.getElementById("sub-menu");
  let subMenuIcon = document.getElementById("drop-down-arrow");
  subMenu.classList.toggle("max-h-0");
  subMenu.classList.toggle("max-h-22");
  subMenuIcon.classList.toggle("rotate-0");
  subMenuIcon.classList.toggle("rotate-180");
  // if (subMenu.style.display === "none" || subMenu.style.display === "") {
  //   subMenu.style.display = "block";
  //   subMenuIcon.classList.add("rotate-180");
  // } else {
  //   subMenu.style.display = "none";
  //   subMenuIcon.classList.remove("rotate-180");
  // }
}

function expand(id) {
  let cardIcon = document.getElementById(`${id}`);
  if (
    cardIcon.src.match(
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1695302636/img/expand-arrow_vfngd3.svg"
    )
  ) {
    cardIcon.src =
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1695302635/img/close_aj6xmr.svg";
  } else {
    cardIcon.src =
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1695302636/img/expand-arrow_vfngd3.svg";
  }
}

