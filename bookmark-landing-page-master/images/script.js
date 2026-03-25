const mobileNav = document.getElementById("mobile-nav");
const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".closed");

hamburger.addEventListener("click", () =>{
    mobileNav.style.top = "0";
    hamburger.style.display = "none";
   
});
closed.addEventListener("click", () => {
    mobileNav.style.top = "-100%";
    hamburger.style.display = "block";
    
});


// ===============================tab---------------- 
const tBtn = document.querySelectorAll(".t-btn");
const tabContent = document.querySelectorAll(".tab-content");

tBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        tBtn.forEach(btn => {
            btn.classList.remove("active")
        });
        btn.classList.add("active");


        tabContent.forEach(content => {
            content.classList.remove("active");
        });
        tabContent[i].classList.add("active");
    });
});

// ===============================faq---------------- 
const faqs = document.querySelectorAll(".faq-card");
faqs.forEach(faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    });
});

// ===============================form----------------
const form = document.querySelector("form");
const warningMsg = document.querySelector("#warningMsg");
const input = document.querySelector("input");
const success = document.querySelector("#success");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const emailValue = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "" || !emailPattern.test(emailValue)) {
        warningMsg.style.display = "block";
        input.classList.add("active");

        setTimeout(() => {
            warningMsg.style.display = "none";
            input.classList.remove("active");
        }, 5000);

    } else {
        success.style.display = "flex";
        warningMsg.style.display = "none";
        input.classList.remove("active");
         setTimeout(() => {
            success.style.display = "none";
        }, 2000);

        form.reset();
    }
});