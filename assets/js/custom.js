// When the user scrolls the page, execute myFunction
window.onscroll = function () {};

var trigger = document.getElementById("trigger");
trigger.addEventListener("click", removeClass, false);
function removeClass() {
  var name = document.getElementById("name");
  trigger.classList.add("hidden");
  name.classList.remove("hidden");
  name.classList.add("animate__animated");
  name.classList.add("animate__flipInX");
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    //$nav.toggleClass("bg-light", $(this).scrollTop() > 20);
  });
});
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  console.log("ciao");
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("ul#navLink li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 170) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
      console.log("dio cane");
    }
  });
};
function loader() {
  let load = document.getElementById("line-container");
  let btn = document.getElementById("loading");
  load.classList.remove("hidden");
  btn.classList.add("hidden");
  var lineBar = new ProgressBar.Line("#line-container", {
    strokeWidth: 4,
    trailWidth: 0.5,
    from: { color: "#d7b20b" },
    to: { color: "#d7b20b" },
    text: {
      value: "0",
      className: "progress-text",
      style: {
        color: "black",
        position: "absolute",
        top: "-30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
    },
  });

  lineBar.animate(1, {
    duration: 1300,
  });
}

function displayer() {
  setTimeout(function () {
    let load = document.getElementById("line-container");
    let abt = document.getElementById("abt-me");
    let abt2 = document.getElementById("abt-me2");
    let abt3 = document.getElementById("abt-me3");
    let abt4 = document.getElementById("abt-me4");
    let abt5 = document.getElementById("abt-me5");
    load.classList.add("hidden");
    abt.classList.remove("hidden");
    abt.classList.add("animate__animated");
    abt.classList.add("animate__fadeIn");
    abt2.classList.remove("hidden");
    abt2.classList.add("animate__animated");
    abt2.classList.add("animate__fadeIn");
    abt3.classList.remove("hidden");
    abt3.classList.add("animate__animated");
    abt3.classList.add("animate__fadeIn");
    abt4.classList.remove("hidden");
    abt4.classList.add("animate__animated");
    abt4.classList.add("animate__fadeIn");
    abt5.classList.remove("hidden");
    abt5.classList.add("animate__animated");
    abt5.classList.add("animate__fadeIn");
  }, 1400);
}
function show() {
  let content = document.getElementById("hider");
  let btnsm = document.getElementById("hidem");
  let btnsl = document.getElementById("showm");
  content.classList.remove("hider-m");
  btnsm.classList.add("hidden");
  btnsl.classList.remove("hidden");
}
function hide() {
  let content = document.getElementById("hider");
  let btnsm = document.getElementById("hidem");
  let btnsl = document.getElementById("showm");
  content.classList.add("hider-m");
  btnsl.classList.add("hidden");
  btnsm.classList.remove("hidden");
}
