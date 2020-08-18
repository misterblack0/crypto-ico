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
