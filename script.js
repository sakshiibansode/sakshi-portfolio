/*=========================================
    PORTFOLIO JAVASCRIPT
    Author : Sakshi Bansode Portfolio
==========================================*/

/*==============================
Mobile Navigation
==============================*/

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("active");

    menuBtn.classList.toggle("fa-times");

};

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("fa-times");

    };

});

/*==============================
Sticky Header
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

/*==============================
Active Navigation
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================
Typing Effect
==============================*/

const typingElement = document.querySelector(".typing-text");

const words = [

    "Data Engineer",

    "Azure Engineer",

    "PySpark Developer",

    "SQL Developer",

    "Cloud Enthusiast"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingElement.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent = currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 70 : 120);

}

typeEffect();

/*==============================
Back To Top
==============================*/

const topButton = document.querySelector("#backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*==============================
Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
Reveal Animation
==============================*/

const revealElements = document.querySelectorAll(

".section-title,.about-container,.skill-card,.timeline-item,.project-card,.certificate-card,.contact-box,.contact-form"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/*==============================
Skill Bar Animation
==============================*/

const progressBars = document.querySelectorAll(".progress-bar span");

const progressObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(()=>{

                bar.style.width = width;

            },200);

        }

    });

},

{

    threshold:0.4

});

progressBars.forEach(bar=>{

    progressObserver.observe(bar);

});

/*==============================
Counter Animation
==============================*/

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const text = counter.innerText;

const number = parseInt(text);

if(isNaN(number)) return;

let current = 0;

const increment = Math.ceil(number/60);

const updateCounter=()=>{

current += increment;

if(current > number){

current = number;

}

counter.innerText = current + text.replace(/[0-9]/g,'');

if(current < number){

requestAnimationFrame(updateCounter);

}

}

updateCounter();

}

});

},

{

threshold:0.4

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==============================
Contact Form
==============================*/

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

contactForm.reset();

});

}

/*==============================
Fade Animation
==============================*/

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.progress-bar span{

transition:width 2s ease;

}

`;

document.head.appendChild(style);

/*==============================
Current Year
==============================*/

const yearElement = document.querySelector(".year");

if(yearElement){

yearElement.textContent = new Date().getFullYear();

}

/*==============================
Console Message
==============================*/

console.log("%cWelcome to Sakshi's Portfolio 🚀",
"color:#38BDF8;font-size:18px;font-weight:bold;");