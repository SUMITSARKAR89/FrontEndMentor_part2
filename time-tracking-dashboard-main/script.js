// ==== JSON DATA directly inside JS ====
const data = [
  {
    title: "Work",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 }
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 }
    }
  },
  {
    title: "Study",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 }
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 }
    }
  },
  {
    title: "Social",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 }
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 }
    }
  }
];

// ==== SELECT ALL NEEDED ELEMENTS ====
const btns = document.querySelectorAll("#pBtn .btn");
const cards = document.querySelectorAll(".box-card");

// ==== BUTTON EVENT ==== 
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
     btns.forEach(b => {
      b.classList.remove("active");
    });
  btn.classList.add("active");

    // get clicked button text: Daily / Weekly / Monthly
    // this text is taken because of object array
    let showBtn = btn.innerText.toLowerCase();
    // this function is taken because of object array
    updateUI(showBtn);
  });
});

// ==== UPDATE FUNCTION ====
function updateUI(t) {

  let text = "";
if (t === "daily") {
text = "Yesterday - ";
} else if (t === "weekly") {
text = "Last Week - ";
} else {
text = "Last Month - ";
}

  // loop every card
  cards.forEach((card, i) => {
    const title = data[i].title;
    const current = data[i].timeframes[t].current;
    const previous = data[i].timeframes[t].previous;

    // inject data in each card
    card.querySelector(".title").innerText = `${title}`;
    card.querySelector("h1").innerText = `${current}hrs`;
    card.querySelector("p").innerText = text + previous + "hrs";
  });
}