/* eslint-disable no-console */
'use strict';

const loaf = {flour: 300, water: 210, hydration: function(){
  return  this.water / this.flour * 100;
} };

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

const object = {foo:1, bar:2, fum:3, quux:4,spam:'spamspamspam'};

for ( const property in object) {
  console.log(`${property}:${object[property]}`);
}


const hobbitMeals = {meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};

console.log(hobbitMeals.meals[3]);
