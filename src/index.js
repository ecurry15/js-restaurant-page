import {initial} from './initial';
import {menu} from './menu';
import {stories} from './stories';

console.log('works');
initial();

const tabSwitch = (function() {
 let logoImg = document.querySelector('.logoImg');
 logoImg.addEventListener('click', initial);

 let menuTab = document.getElementById('menu');
 menuTab.addEventListener('click', menu);

 let storiesTab = document.getElementById('stories');
 storiesTab.addEventListener('click', stories);
})();