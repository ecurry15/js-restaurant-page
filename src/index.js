const content = document.getElementById('content');
//Top Nav ----
const topNav = document.createElement('div');
topNav.className = "topNav";
content.appendChild(topNav);

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
const stories = document.createElement('li');
stories.textContent = "Stories";
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
orderFood.textContent = "Order Food";
topNav.appendChild(orderFood);
//Search --
const searchIcon = document.createElement('i');
searchIcon.className = 'fa-solid fa-magnifying-glass';
topNav.appendChild(searchIcon);
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
join.textContent = "Join Chick-Fil-A One"
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
