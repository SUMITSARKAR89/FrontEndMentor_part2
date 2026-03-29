//1 ------------------------------darkMood---------
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const logo = document.querySelector(".logo img");

moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";
    body.classList.add("darkmode");
    logo.src = "images/ChatGPT_Image_Mar_27__2026__09_33_30_PM-removebg-preview.png";
    logo.style.width = "130px";
    
    
    document.querySelector("header").style.setProperty("--bgopacity", "0.1");
    document.querySelector("main").style.setProperty("--mainopacity", "0.1");
});
sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
    body.classList.remove("darkmode");
    logo.src = "images/logo.svg";
    logo.style.width = "100px";
    
    
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

// 4------------------------------faq---------
 const faqCard = document.querySelectorAll('.faq-card');

faqCard.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// 5------------------------------price---------

const pBtn = document.querySelector(".p-btn");
const priceBody = document.querySelector(".priceBody");

pBtn.addEventListener("click", () => {
    priceBody.style.display = "flex";
});

    const toggleBtn = document.querySelector(".toggleBtn");
      const dot = document.querySelector(".dot");

      const price1 = document.getElementById("price1");
      const price2 = document.getElementById("price2");
      const price3 = document.getElementById("price3");

    
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
// 6------------------------------form---------

      const form = document.querySelector("form");
      const email = document.querySelector("#email");
      const errorMsg = document.querySelector(".errorMsg");
      const submitMsg = document.querySelector(".submitMsg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let emailValue = email.value.trim();
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(emailValue === "" || !pattern.test(emailValue)){
            errorMsg.style.display = "block";
            submitMsg.style.display = "none";
            email.style.border = "1px solid  hsl(12, 88%, 59%)";
            setTimeout( () => {
               errorMsg.style.display = "none";
               email.style.border = "none";

            },3000);

        }else{
            errorMsg.style.display = "none";
            submitMsg.style.display = "block";
            email.style.border = "1px solid  rgb(13, 216, 13)";
             setTimeout( () => {
               submitMsg.style.display = "none";
                email.style.border = "none";

            },5000);
        };
        form.reset();
      });


    //   7===================
    const cards = document.getElementById('c-cards');
const allCards = document.querySelectorAll('.c-card');
const c_next = document.querySelector('.c-next');
const c_prev = document.querySelector('.c-prev');
const dotsContainer = document.getElementById('dots');

let index = 0;

function getVisible(){
  if(window.innerWidth <= 720) return 1;
  if(window.innerWidth <= 980) return 2;
  return 3;
}

function maxIndex(){
  const visible = getVisible();
  return Math.max(0, allCards.length - visible);
}

function update(){
    
  const cardWidth = allCards[0].offsetWidth ;
  cards.style.transform = `translateX(-${index * cardWidth}px)`;

  document.querySelectorAll('.c-dot').forEach(d=>d.classList.remove('active'));
  if(dotsContainer.children[index]){
    dotsContainer.children[index].classList.add('active');
  }
}

function createDots(){
  dotsContainer.innerHTML = '';
  for(let i=0;i<=maxIndex();i++){
    const dot = document.createElement('span');
    dot.className='c-dot';
    if(i===0) {
        dot.classList.add('active')

    };

    dot.onclick=()=>{
      index=i;
      update();
    };

    dotsContainer.appendChild(dot);
  }
}

c_next.onclick=()=>{
  if(index < maxIndex()){
    index++;
    update();
  }
};

c_prev.onclick=()=>{
  if(index > 0){
    index--;
    update();
  }
};

window.addEventListener('resize', ()=>{
  index = 0;
  createDots();
  update();
});

createDots();
update();