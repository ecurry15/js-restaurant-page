export function menu () {
  const contentDiv = document.querySelector('#content');
contentDiv.replaceChildren();

//Top Nav ----
const topNav = document.createElement('div');
topNav.className = "topNav";
contentDiv.appendChild(topNav);

//Nav HamBurger Icon --- Smaller Screens ---//
const hamburgerIcon = document.createElement('i');
hamburgerIcon.className = "fa-solid fa-bars";
topNav.appendChild(hamburgerIcon);
//----------//

//Logo ----
const logoImg = document.createElement('img');
logoImg.className = "logoImg";
logoImg.src = "https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png";
topNav.appendChild(logoImg);

//Location ---
const locationWrapper = document.createElement('div');
locationWrapper.className = 'locationWrapper';
topNav.appendChild(locationWrapper);
//Location Icon ---
const locationIcon = document.createElement('i');
locationIcon.className = 'fa-solid fa-location-dot';
locationWrapper.appendChild(locationIcon);
//Location text ----
const locationText = document.createElement('p');
locationText.className = 'locationText';
locationText.textContent = "Find a restaurant";
locationWrapper.appendChild(locationText);
//Location End---

//Main Nav Elements ---
const mainNav = document.createElement('nav');
mainNav.className = 'mainNav';
topNav.appendChild(mainNav);

//Elements ---
const menu = document.createElement('li');
menu.textContent = "Menu";
menu.id = "menu";

const stories = document.createElement('li');
stories.textContent = "Stories";
stories.id = "stories";
const about = document.createElement('li');
about.textContent = "About";
const careers = document.createElement('li');
careers.textContent = "Careers";
mainNav.append(menu, stories, about, careers);

//Sign in ---
const signInWrapper = document.createElement('div');
signInWrapper.className = "signInWrapper";
topNav.appendChild(signInWrapper);
// chick-One ---
const chickOne = document.createElement('h3');
chickOne.textContent = "Chick-fil-A One";
signInWrapper.appendChild(chickOne);
//Sign in text --
const span1 = document.createElement('span');
span1.textContent = "( ";
signInWrapper.appendChild(span1);
const signIn = document.createElement('p');
signIn.textContent = "Sign In";
signInWrapper.appendChild(signIn);
const span2 = document.createElement('span');
span2.textContent = " )";
signInWrapper.appendChild(span2);
//Sign in End---

//Order --
const orderFood = document.createElement('button');
orderFood.textContent = "Order food";
topNav.appendChild(orderFood);
//Search --
const searchIcon = document.createElement('i');
searchIcon.className = 'fa-solid fa-magnifying-glass';
topNav.appendChild(searchIcon);

//Order Now --- Smaller Screen -- //
const orderNow = document.createElement('p');
orderNow.className = "orderNow";
let newline = "\r\n";
orderNow.textContent = `Order ${newline} Now`;
topNav.appendChild(orderNow);

//Menu drop down menu nav -----
const menuDropDown = document.createElement('nav');
menuDropDown.className = "menuDropDown";
contentDiv.appendChild(menuDropDown);
//Menu Items ---
const breakFast = document.createElement('li');
breakFast.textContent = "Breakfast";
menuDropDown.appendChild(breakFast);

const entrees = document.createElement('li');
entrees.textContent = "Entrées";
menuDropDown.appendChild(entrees);

const salads = document.createElement('li');
salads.textContent = "Salads";
menuDropDown.appendChild(salads);

const sides = document.createElement('li');
sides.textContent = "Sides";
menuDropDown.appendChild(sides);

const kids = document.createElement('li');
kids.textContent = "Kid's Meals";
menuDropDown.appendChild(kids);

const treats = document.createElement('li');
treats.textContent = "Treats";
menuDropDown.appendChild(treats);

const drinks = document.createElement('li');
drinks.textContent = "Drinks";
menuDropDown.appendChild(drinks);

const sauce = document.createElement('li');
sauce.textContent = "Dipping Sauces and Dressings";
menuDropDown.appendChild(sauce);

const catering = document.createElement('li');
catering.textContent = "Catering";
menuDropDown.appendChild(catering);

let menuDropOpen = false;

menu.addEventListener('mouseover', function() {
  menuDropDown.style.display = "flex";
  menuDropOpen = true;
})

document.addEventListener('mouseover', e => {
  if (e.target.id == "menu" || e.target.className == "menuDropDown" || e.target.closest('.menuDropDown') || e.target.className == "bannerWrapper" || e.target.className == "topNav") {
    return
  } else {
    if (menuDropOpen) {
      menuDropDown.style.display = "none";
      menuDropOpen = false;
    }
  }
})

//Top Nav End----

//Menu Title ---- //
const menuBanner = document.createElement('div');
contentDiv.appendChild(menuBanner);
menuBanner.className = "menuBanner";
//Menu Wrapper
const menuTitleWrap = document.createElement('div');
menuTitleWrap.className = "menuTitleWrap";
menuBanner.appendChild(menuTitleWrap);
//Chic-fil-A ----
const menuTitleChick = document.createElement('h1');
menuTitleChick.textContent = "Chick-fil-A";
menuTitleWrap.appendChild(menuTitleChick);
//Icon ----
const registered = document.createElement('i');
 registered.className = "fa-regular fa-registered";
 registered.id = "registered";
 menuTitleWrap.appendChild(registered);
 //Menu -----
 const menuTitleMenu = document.createElement('h1');
 menuTitleMenu.textContent = "Menu";
 menuTitleWrap.appendChild(menuTitleMenu);

const availability = document.createElement('p');
menuBanner.appendChild(availability);
availability.textContent = "Availability may differ at different locations."
}