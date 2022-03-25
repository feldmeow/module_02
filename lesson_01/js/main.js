'use strict';

const ad = document.querySelector('.ads');
ad.remove();
const props = document.querySelectorAll('.props__list');
const propsItemsFive = document.querySelectorAll('.props__item_five');
const propsItemsThree = document.querySelectorAll('.props__item_three');
const propsItemsFour = document.querySelectorAll('.props__item_four');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
props[4].append(...propsItemsFive);
props[3].append(...propsItemsThree);
props[2].append(...propsItemsTwo);
propsItemsFour[2].after(propsItemsFour[5]);
items.prepend(item[1]);
item[2].after(item[0]);
item[4].before(item[0]);
console.log(item);
