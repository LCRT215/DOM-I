const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo. ("src", siteContent["nav"]["img-src"]);

// const nav = document.querySelectorAll("nav a");
// nav.forEach((link, i) => {
//   link.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
// });

// const ctaH1 = document.getElementsByClassName("cta-text")[0];

// ctaH1.getElementByTagName("h1")[0].innerHTML = siteContent['cta']["h1"]

//NAV
const nav = document.querySelectorAll("nav a");
nav.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
});

const logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];
console.log(nav);

nav[0].style.color = "green";
nav.forEach(currentValue => {
  currentValue.style.color = "green";
});
//.style.color = "#ff0000";

//CTA SECTION
const ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

//MAIN-CONTENT

const contentText = document.querySelectorAll(".text-content");

contentText[0].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["features-h4"];
contentText[0].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["features-content"];

contentText[1].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["about-h4"];
contentText[1].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["about-content"];

contentText[2].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["services-h4"];
contentText[2].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["services-content"];

contentText[3].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["product-h4"];
contentText[3].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["product-content"];

contentText[4].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["vision-h4"];
contentText[4].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["vision-content"];

//MIDDLE IMG
const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

//CONTACT
const contact = document.getElementsByClassName("contact")[0];
console.log(contact);

contact.getElementsByTagName("h4")[0].innerHTML =
  siteContent["contact"]["contact-h4"];
contact.getElementsByTagName("p")[0].innerHTML =
  siteContent["contact"]["address"];
contact.getElementsByTagName("p")[1].innerHTML =
  siteContent["contact"]["phone"];
contact.getElementsByTagName("p")[2].innerHTML =
  siteContent["contact"]["email"];

//FOOTER
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];
