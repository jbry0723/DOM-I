const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let title=document.getElementsByTagName("title");
title[0].textContent="Great Idea!"

let navBarButtons=document.querySelectorAll("nav a")
let nav=document.querySelector("nav")
navBarButtons[0].textContent="Services"
navBarButtons[0].style.color="green"
navBarButtons[1].textContent="Product"
navBarButtons[1].style.color="green"
navBarButtons[2].textContent="Vision"
navBarButtons[2].style.color="green"
navBarButtons[3].textContent="Features"
navBarButtons[3].style.color="green"
navBarButtons[4].textContent="About"
navBarButtons[4].style.color="green"
navBarButtons[5].textContent="Contact"
navBarButtons[5].style.color="green"


let FAQlink=document.createElement("a");
FAQlink.textContent="FAQ";
FAQlink.href="#";
FAQlink.style.color="green"
document.querySelector("nav").appendChild(FAQlink)

let Partners=document.createElement("a");
Partners.textContent="Partners";
Partners.href="#";
Partners.style.color="green"
document.querySelector("nav").prepend(Partners)





let logoImg= document.querySelector("#logo-img")


let ctaText= document.querySelector(".cta-text")
let ctaTexth1=ctaText.querySelector('h1')
ctaTexth1.innerText="Dom \n is \n Awesome"
getStartedButton=ctaText.querySelector("button")
getStartedButton.textContent="Get Started"

let ctaImg=document.querySelector("#cta-img")
ctaImg.src='img/header-img.png'


let topConth4=document.querySelectorAll(".top-content h4")
topConth4[0].textContent="Features"
topConth4[1].textContent="About"
let topContp=document.querySelectorAll(".top-content p")
topContp[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContp[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let midImg=document.querySelector("#middle-img")
midImg.src="img/mid-page-accent.jpg"

let bottomConth4=document.querySelectorAll(".bottom-content h4")
bottomConth4[0].textContent="Services"
bottomConth4[1].textContent="Product"
bottomConth4[2].textContent="Vision"

let bottomContp=document.querySelectorAll(".bottom-content p")
bottomContp[0].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomContp[1].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomContp[2].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contacth4=document.querySelector(".contact h4")
contacth4.textContent="Contact"

let contactp=document.querySelectorAll(".contact p")

contactp[0].innerText="123 Way 456 Street \n Somewhere USA"
contactp[1].textContent="1 (888) 888-8888"
contactp[2].textContent="sales@greatidea.io"

let footerText=document.querySelector("footer p")
console.log(footerText)
footerText.textContent="Copyright Great Idea! 2018"
