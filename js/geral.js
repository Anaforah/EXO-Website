//efeito cursor
const letterSpacing = getComputedStyle(
  document.querySelector(":root")
).getPropertyValue("--letter-spacing-x");

let cursor = document.querySelector(".cursor");
let cursorLink = document.querySelector(".link");
let cursorIcon = document.querySelector(".icon");

let iconMap = {
  Home: "fa-house",
  Services: "fa-bell",
  About: "fa-user",
  Contact: "fa-envelope"
};

document.addEventListener("mousemove", (event) => {

  const mouseX = event.clientX + window.pageXOffset;
  const mouseY = event.clientY + window.pageYOffset;

  cursor.style.left = mouseX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = mouseY - cursor.offsetHeight / 2 + "px";

  cursor.classList.remove("active");
  cursorLink.innerHTML = "";
  cursorIcon.innerHTML = "";

  let elements = document.elementsFromPoint(event.clientX, event.clientY);
  elements.forEach((elem) => {
    if (elem.tagName == "A") {
      cursor.classList.add("active");

      elem.innerHTML.split("").forEach((letter, i) => {
        let circleLetter = document.createElement("div");
        circleLetter.classList.add("circle-letter");
        circleLetter.innerHTML = letter;
        circleLetter.style.transform = "rotate(" + i * letterSpacing + "deg)";

        let circleLetterBottom = document.createElement("div");
        circleLetterBottom.classList.add("circle-letter-bottom");
        circleLetterBottom.innerHTML = letter;
        circleLetter.appendChild(circleLetterBottom);

        cursorLink.appendChild(circleLetter);
      });

      if (iconMap[elem.innerHTML]) {
        let circleIcon = document.createElement("i");
        circleIcon.classList.add("fa");
        circleIcon.classList.add(iconMap[elem.innerHTML]);
        cursorIcon.appendChild(circleIcon);
      }
      elem.addEventListener("click", function() {
        window.location.href = this.href;
      });
    }
  });
});


// Menu Mobile

let button = document.querySelector(".menuButton");
let nav = document.querySelector(".nav2")

button.addEventListener("click", function(evt) {
  console.log("menu button click", evt);

  nav.classList.toggle("show");

  evt.stopPropagation();
});


document.addEventListener("click", function(event) {
  console.log("document click", event);

  nav.classList.remove("show");
});
