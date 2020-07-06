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


const Jim ={name:'Jim Halpert', Job_title:'Sales'};
const Pam ={name:'Pam Beasly', Job_title:'Receptionist'};
const Michael ={name:'Michael Scott', Job_title:'Regional Manager'};
const Angela ={name:'Angela', Job_title:'Accountant'};
const Dwight ={name:'Dwight K Schrute', Job_title:'Assistant to the Regional Manager'};

const Scranton = {{name:'Jim Halpert', Job_title:'Sales'}, {name:'Pam Beasly', Job_title:'Receptionist'}, {name:'Michael Scott', Job_title:'Regional Manager'}, {name:'Angela', Job_title:'Accountant'}, {name:'Dwight K Schrute', Job_title:'Assistant to the Regional Manager'}};

console.log(Scranton);
