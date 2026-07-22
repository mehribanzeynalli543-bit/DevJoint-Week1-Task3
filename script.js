document.addEventListener("DOMContentLoaded", function(){
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".header__link");
    const heroBtn = document.getElementById("hero-btn");

    if(hamburgerBtn && navMenu){
        hamburgerBtn.addEventListener("click", function(){
            navMenu.classList.toggle("active");
        });
    }

    navLinks.forEach((link)=> {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const targetId=this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if(targetSection){
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                if(navMenu.classList.contains("active")){
                    navMenu.classList.remove("active");
                }
            }
        });
    });

    if (heroBtn){
        heroBtn.addEventListener("click", function(){
            const contactSection = document.getElementById("contact");
            if(contactSection){
                contactSection.scrollIntoView({
                    behavior:"smooth",
                });
            }
        });
    }
});