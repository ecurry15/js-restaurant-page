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

//Mobile only menu banner -----
const getStartedBanner = document.createElement('div');
getStartedBanner.className = "getStartedBanner";
contentDiv.appendChild(getStartedBanner);

const getStartedText = document.createElement('h1');
getStartedText.textContent = "What kind of order can we get started for you?";
getStartedBanner.appendChild(getStartedText);

const pickupDeliveryCateringWrap = document.createElement('div');
pickupDeliveryCateringWrap.className = "pickupDeliveryCateringWrap";
getStartedBanner.appendChild(pickupDeliveryCateringWrap);

const menuPickWrap = document.createElement('div');
pickupDeliveryCateringWrap.appendChild(menuPickWrap);

const menuPickIcon = document.createElement('i');
menuPickIcon.className = "fa-solid fa-store";
menuPickWrap.appendChild(menuPickIcon);

const menuPickText = document.createElement('p');
menuPickText.textContent = "Order\n Pickup";
menuPickWrap.appendChild(menuPickText);

const menuDeliveryWrap = document.createElement('div');
pickupDeliveryCateringWrap.appendChild(menuDeliveryWrap);

const menuDeliveryIcon = document.createElement('i');
menuDeliveryIcon.className = "fa-solid fa-car";
menuDeliveryWrap.appendChild(menuDeliveryIcon);

const menuDeliveryText = document.createElement('p');
menuDeliveryText.textContent = "Order \n Delivery";
menuDeliveryWrap.appendChild(menuDeliveryText);

const menuCateringWrap = document.createElement('div');
pickupDeliveryCateringWrap.appendChild(menuCateringWrap);

const menuCateringIcon = document.createElement('i');
menuCateringIcon.className = "fa-solid fa-bell-concierge";
menuCateringWrap.appendChild(menuCateringIcon);

const menuCateringText = document.createElement('p');
menuCateringText.textContent = "Order \n Catering";
menuCateringWrap.appendChild(menuCateringText);
//Mobile only menu banner End---------

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
//Menu Banner End ------

//Mobile only Entree bar ---
const entreeBar = document.createElement('div');
entreeBar.className = "entreeBar";
contentDiv.appendChild(entreeBar);

const entreeBarImg = document.createElement('img');
entreeBarImg.className = "entreeBarImg";
entreeBarImg.src = "https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png";
entreeBar.appendChild(entreeBarImg);

const entreeBarTitle = document.createElement('p');
entreeBarTitle.textContent = "Entrées";
entreeBar.appendChild(entreeBarTitle);

const entreeBarArrow = document.createElement('i');
entreeBarArrow.className = "fa-solid fa-chevron-up";
entreeBar.appendChild(entreeBarArrow);



const menuPageContent = document.createElement('section');
contentDiv.appendChild(menuPageContent);
menuPageContent.className = "menuPageContentWrap";

//ROW One ---------
const rowOne = document.createElement('div');
menuPageContent.appendChild(rowOne);
rowOne.className = "rowOne";

//1st img ---
const leftSideOne = document.createElement('div');
rowOne.appendChild(leftSideOne);

const imgContainerOne = document.createElement('div');
imgContainerOne.className = "imgContainer";
leftSideOne.appendChild(imgContainerOne);
const leftSideOneImg = document.createElement('img');
leftSideOneImg.src = "https://www.cfacdn.com/img/order/menu/Online/Entrees/Jul19_CFASandwich_pdp.png";
imgContainerOne.appendChild(leftSideOneImg);

const leftSideOneTitle = document.createElement('h1');
leftSideOneTitle.textContent = "Chick-fil-A Chicken Sandwich";
leftSideOne.appendChild(leftSideOneTitle);

const leftSideOneNutrition = document.createElement('p');
leftSideOneNutrition.textContent =  "440 Cal per Sandwich";
leftSideOne.appendChild(leftSideOneNutrition);

const leftSideOneButton = document.createElement('button');
leftSideOneButton.textContent = "Order now";
leftSideOne.appendChild(leftSideOneButton);

//middle -------- ---
const middleOne = document.createElement('div');
rowOne.appendChild(middleOne);

const imgContainerMiddleOne = document.createElement('div');
imgContainerMiddleOne.className = "imgContainer";
middleOne.appendChild(imgContainerMiddleOne);

const middleOneImg = document.createElement('img');
middleOneImg.src = "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0004_NEWStack6200001CFAPDPDeluxeSandwich1085png.png";
imgContainerMiddleOne.appendChild(middleOneImg);

const middleOneTitle = document.createElement('h1');
middleOneTitle.textContent = "Chick-fil-A Deluxe Sandwich";
middleOne.appendChild(middleOneTitle);

const middleOneNutrition = document.createElement('p');
middleOneNutrition.textContent =  "500 Cal per Sandwich";
middleOne.appendChild(middleOneNutrition);

const middleOneButton = document.createElement('button');
middleOneButton.textContent = "Order now";
middleOne.appendChild(middleOneButton);

// Right ----------
const rightOne = document.createElement('div');
rowOne.appendChild(rightOne);

const imgContainerRightOne = document.createElement('div');
imgContainerRightOne.className = "imgContainer";
rightOne.appendChild(imgContainerRightOne);

const rightOneImg = document.createElement('img');
rightOneImg.src = "https://www.cfacdn.com/img/order/menu/Online/Entrees/CFASpicySandwich_1080.png";
imgContainerRightOne.appendChild(rightOneImg);

const rightOneTitle = document.createElement('h1');
rightOneTitle.textContent = "Spicy Chicken Sandwich";
rightOne.appendChild(rightOneTitle);

const rightOneNutrition = document.createElement('p');
rightOneNutrition.textContent =  "460 Cal per Sandwich";
rightOne.appendChild(rightOneNutrition);

const rightOneButton = document.createElement('button');
rightOneButton.textContent = "Order now";
rightOne.appendChild(rightOneButton);

//ROW One --------- End ----

//Row Two  --------------
const rowTwo = document.createElement('div');
menuPageContent.appendChild(rowTwo);
rowTwo.className = "rowOne";

//1st img ---
const leftSideTwo = document.createElement('div');
rowTwo.appendChild(leftSideTwo);

const imgContainerTwo = document.createElement('div');
imgContainerTwo.className = "imgContainer";
leftSideTwo.appendChild(imgContainerTwo);
const leftSideTwoImg = document.createElement('img');
leftSideTwoImg.src = "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0012_%5BFeed%5D_0001s_0023_Entrees_Spicy-Deluxe-Sandwich.png";
imgContainerTwo.appendChild(leftSideTwoImg);

const leftSideTwoTitle = document.createElement('h1');
leftSideTwoTitle.textContent = "Spicy Deluxe Sandwich";
leftSideTwo.appendChild(leftSideTwoTitle);

const leftSideTwoNutrition = document.createElement('p');
leftSideTwoNutrition.textContent =  "550 Cal per Sandwich";
leftSideTwo.appendChild(leftSideTwoNutrition);

const leftSideTwoButton = document.createElement('button');
leftSideTwoButton.textContent = "Order now";
leftSideTwo.appendChild(leftSideTwoButton);
//------

//middle -------- ---
const middleTwo = document.createElement('div');
rowTwo.appendChild(middleTwo);

const imgContainerMiddleTwo = document.createElement('div');
imgContainerMiddleTwo.className = "imgContainer";
middleTwo.appendChild(imgContainerMiddleTwo);

const middleTwoImg = document.createElement('img');
middleTwoImg.src = "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png";
imgContainerMiddleTwo.appendChild(middleTwoImg);

const middleTwoTitle = document.createElement('h1');
middleTwoTitle.textContent = "Grilled Chicken Sandwich";
middleTwo.appendChild(middleTwoTitle);

const middleTwoNutrition = document.createElement('p');
middleTwoNutrition.textContent =  "380 Cal per Sandwich";
middleTwo.appendChild(middleTwoNutrition);

const middleTwoButton = document.createElement('button');
middleTwoButton.textContent = "Order now";
middleTwo.appendChild(middleTwoButton);
//----- middle end -----

// Right ----------
const rightTwo = document.createElement('div');
rowTwo.appendChild(rightTwo);

const imgContainerRightTwo = document.createElement('div');
imgContainerRightTwo.className = "imgContainer";
rightTwo.appendChild(imgContainerRightTwo);

const rightTwoImg = document.createElement('img');
rightTwoImg.src = "https://www.cfacdn.com/img/order/menu/Online/Entrees/grilledClub_colbyJack_PDP.png";
imgContainerRightTwo.appendChild(rightTwoImg);

const rightTwoTitle = document.createElement('h1');
rightTwoTitle.textContent = "Chic-fil-A Grilled Chicken Club Sandwich";
rightTwo.appendChild(rightTwoTitle);

const rightTwoNutrition = document.createElement('p');
rightTwoNutrition.textContent =  "520 Cal per Sandwich";
rightTwo.appendChild(rightTwoNutrition);

const rightTwoButton = document.createElement('button');
rightTwoButton.textContent = "Order now";
rightTwo.appendChild(rightTwoButton);

//Small Screen Banner -------/
}