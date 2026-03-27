//1 ------------------------------darkMood---------
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const logo = document.querySelector(".logo img");

moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";
    body.classList.add("darkmode");
    logo.classList.add("active");
    document.querySelector("header").style.setProperty("--bgopacity", "0.1");
    document.querySelector("main").style.setProperty("--mainopacity", "0.1");
});
sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
    body.classList.remove("darkmode");
    logo.classList.remove("active");
     document.querySelector("header").style.setProperty("--bgopacity", "1");
      document.querySelector("main").style.setProperty("--mainopacity", "0.4");
});


// 2------------------------------menuBar---------
const mobileNav = document.getElementById("mobileNav");
const xMenu = document.querySelector(".closed");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    xMenu.style.display = "block";
    
    mobileNav.style.top = "0";
});
xMenu.addEventListener("click", () => {
    hamburger.style.display = "block";
    xMenu.style.display = "none";
    mobileNav.style.top = "-100%";
});


// 3------------------------------about Tab---------

const tabBtn = document.querySelectorAll(".btn");
const aboutContent = document.querySelectorAll(".about-content");

tabBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        tabBtn.forEach( btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        aboutContent.forEach(tab => {
            tab.classList.remove("active");
        });
        aboutContent[i].classList.add("active");
    });
});

// 3------------------------------faq---------
 const faqCard = document.querySelectorAll('.faq-card');

faqCard.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// 3------------------------------price---------

    const toggleBtn = document.querySelector(".toggleBtn");
      const dot = document.querySelector(".dot");

      const price1 = document.getElementById("price1");
      const price2 = document.getElementById("price2");
      const price3 = document.getElementById("price3");

      // toggle state maintain
      let yearly = true;

      toggleBtn.addEventListener("click", () => {
        yearly = !yearly; // state change

        if (!yearly) {
          // Dot left side
          dot.style.transform = "translateX(-15px)";

          // Yearly price
          price1.innerHTML = `<span>$</span>199.99`;
          price2.innerHTML = `<span>$</span>249.99`;
          price3.innerHTML = `<span>$</span>399.99`;
        } else {
          // Dot right side
          dot.style.transform = "translateX(0)";

          // Monthly price
          price1.innerHTML = `<span>$</span>19.99`;
          price2.innerHTML = `<span>$</span>24.99`;
          price3.innerHTML = `<span>$</span>39.99`;
        }
      });