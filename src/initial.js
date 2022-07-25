export function initial() {
const content = document.getElementById('content');
//Top Nav ----
const topNav = document.createElement('div');
topNav.className = "topNav";
content.appendChild(topNav);

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

//Top Nav End----

//Main Content ---
const mainContentContainer = document.createElement('section');
mainContentContainer.className = "mainContentContainer";
content.appendChild(mainContentContainer);

//Banner
const banner = document.createElement('div');
banner.className = "bannerWrapper";
mainContentContainer.appendChild(banner);
//Img--
const bannerImg = document.createElement('img');
bannerImg.src = "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/CFA_Icon_CFAOne2_Red_PMS_new.png?h=288&w=288&la=en";
bannerImg.className = "bannerImg";
banner.appendChild(bannerImg);

//Text
const bannerTextWrap = document.createElement('div');
bannerTextWrap.className = "bannerTextWrap";
banner.appendChild(bannerTextWrap);
const makeEveryOrder = document.createElement('h3');
makeEveryOrder.textContent = "Make every order count";
bannerTextWrap.appendChild(makeEveryOrder);
const joinTextWrap = document.createElement('div');
joinTextWrap.className = "joinTextWrap";
bannerTextWrap.appendChild(joinTextWrap);
const join = document.createElement('h1');
join.textContent = "Join Chick-fil-A One"
joinTextWrap.appendChild(join);
 const reserved = document.createElement('i');
 reserved.className = "fa-regular fa-registered";
 joinTextWrap.appendChild(reserved);
 const today = document.createElement('h1');
 today.textContent = "today";
 joinTextWrap.appendChild(today);

 //Join Today
const joinToday = document.createElement('div');
joinToday.className = "joinToday";
banner.appendChild(joinToday);
const joinTodayText = document.createElement('p');
joinTodayText.className = "joinTodayTextP";
joinTodayText.textContent = "Join today";
joinToday.appendChild(joinTodayText);
const joinArrow = document.createElement('i');
joinArrow.className = "fa-solid fa-angle-right";
joinTodayText.appendChild(joinArrow);


joinTodayText.addEventListener('mouseover', function() {
  joinArrow.style.right = "-2px";
})

joinTodayText.addEventListener('mouseout', function() {
  joinArrow.style.right = "0px";
})


const orderContainer = document.createElement('div');
orderContainer.className = "orderContainer";
mainContentContainer.appendChild(orderContainer);

//LeftSide content --
const leftSideContent = document.createElement('div');
leftSideContent.className = "leftSideContent";
orderContainer.appendChild(leftSideContent);
const peach = document.createElement('h1');
peach.textContent = "Peach";
const milkShake = document.createElement('h1');
milkShake.textContent = "Milkshake";
const season = document.createElement('h1');
season.textContent = "season is here";
leftSideContent.appendChild(peach);
leftSideContent.appendChild(milkShake);
leftSideContent.appendChild(season);

const inLineShakeText = document.createElement('h4');
inLineShakeText.className = "inLineShakeText";
inLineShakeText.textContent = "Peach Milkshake season is here";
leftSideContent.appendChild(inLineShakeText);

const coolOff = document.createElement('p');
coolOff.textContent = "Cool off with this creamy classic";
leftSideContent.appendChild(coolOff);

//Order buttons ---
const orderButtonsWrap = document.createElement('div');
orderButtonsWrap.className = "orderButtonsWrap";
leftSideContent.appendChild(orderButtonsWrap);

//1st button
const orderPickUp = document.createElement('div');
orderButtonsWrap.appendChild(orderPickUp);
//Icon
const orderIcon = document.createElement('i');
orderIcon.className = "fa-solid fa-utensils";
orderPickUp.appendChild(orderIcon);
//Text
const orderText = document.createElement('p');
orderText.textContent = "Order Pickup";
orderPickUp.appendChild(orderText);
//2nd button
const orderDelivery = document.createElement('div');
orderButtonsWrap.appendChild(orderDelivery);
//Icon
const deliveryIcon = document.createElement('i');
deliveryIcon.className = "fa-solid fa-car-side";
orderDelivery.appendChild(deliveryIcon);
//Text
const deliveryText = document.createElement('p');
deliveryText.textContent = "Order Delivery";
orderDelivery.appendChild(deliveryText);

//RightSide---- 
const rightSideContent = document.createElement('div');
orderContainer.appendChild(rightSideContent);
const shakeImg = document.createElement('img');
shakeImg.src = "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1918791242001/6f42cbab-9dd5-453b-ac27-8f11658e157a/7f0d0e79-6c2a-4371-ad98-10b9e5b72801/1280x720/match/image.jpg";
shakeImg.className = "shake";
rightSideContent.appendChild(shakeImg);


//Shake animation -----
const mediaQuery = window.matchMedia('(min-width: 980px)');
const mobileMediaQuery = window.matchMedia('(max-width: 979px)');

window.addEventListener('load', (event) => {
  if (mediaQuery.matches) {
    shakeImg.style.transform = "translateX(0px)";
  }
});

window.addEventListener('mousemove', function() {
  if (mobileMediaQuery.matches) {
    shakeImg.style.transform = "translateX(-50%)";
  } else {
    shakeImg.style.transform = "translateX(0px)";
  }
})


//Menu drop down menu nav -----
const menuDropDown = document.createElement('nav');
menuDropDown.className = "menuDropDown";
content.appendChild(menuDropDown);
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

};

