import './style.css';
import titleIcon from './icons/refresh.png';
import addIcon from './icons/add.png';
import ToDo from './modules/manage.js';
import check from './modules/check.js';

const doInput = document.getElementById('do-input');
const titleSpan = document.getElementById('title-icon');
const addSpan = document.getElementById('add-icon');
const date = document.querySelector('.date');
const icon1 = new Image();
date.innerHTML = new Date().toLocaleDateString('en-GB');
icon1.src = titleIcon;
icon1.classList.add('reset');
const icon2 = new Image();
icon2.src = addIcon;
titleSpan.appendChild(icon1);
addSpan.appendChild(icon2);
doInput.focus();

ToDo.add();
ToDo.show();
ToDo.remove();
ToDo.edit();
ToDo.clear();
check();
ToDo.reset();
