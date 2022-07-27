import {initial} from './initial.js';
import {menuPage} from './menu.js';
import {storiesPage} from './stories.js';

initial();

 let logoImg = document.querySelector('.logoImg');
 logoImg.addEventListener('click', initial);

 let menuTab = document.getElementById('menu');
 menuTab.addEventListener('click', menuPage);

 let storiesTab = document.getElementById('stories');
 storiesTab.addEventListener('click', storiesPage);

 let dropDownTab = document.querySelector('.fa-bars');
 dropDownTab.addEventListener('click', menuPage);