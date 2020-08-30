/* Pie chart */

const dataInput = (e) => e;

let config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [
          dataInput(73),
          dataInput(55),
          dataInput(38),
          dataInput(32),
          dataInput(12),
        ],
        backgroundColor: [
          "#f85d77",
          "#5ad6f8",
          "#61f89f",
          "#ac56f7",
          "#f8c04e",
        ],
      },
    ],
    labels: [
      "Financial Overhead",
      "Bonus & Fund",
      "IT Infrastructure",
      "Bounty and Overhead",
      "Gift Code Inventory",
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

window.onload = function () {
  let ctx = document.getElementById("chart-area").getContext("2d");
  window.myDoughnut = new Chart(ctx, config);
};

/* FAQS tabs for accordion */

function openTab(event, tab) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  event.currentTarget.className += " active";
}

const defaultTab = document.getElementById("select-general");

defaultTab.addEventListener("click", () => openTab(event, "tab-general"));

document
  .getElementById("select-ico")
  .addEventListener("click", () => openTab(event, "tab-ico"));

document
  .getElementById("select-token")
  .addEventListener("click", () => openTab(event, "tab-token"));

document
  .getElementById("select-investors")
  .addEventListener("click", () => openTab(event, "tab-investors"));

defaultTab.click(); // Show a tab by default

/* FAQS Accordion */

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Sticky navbar */

/* window.onscroll = function() {myFunction();};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
} */
