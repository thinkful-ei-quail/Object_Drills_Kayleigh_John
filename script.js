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


const Jim ={name:'Jim Halpert', Job_title:'Salesman', boss:'Michael'};
const Pam ={name:'Pam Beasly', Job_title:'Receptionist', boss:'Michael'};
const Michael ={name:'Michael Scott', Job_title:'Regional Manager'};
const Angela ={name:'Angela', Job_title:'Accountant', boss:'Michael'};
const Dwight ={name:'Dwight K Schrute', Job_title:'Assistant to the Regional Manager', boss:'Michael'};

const Scranton = [Jim, Pam, Michael, Angela, Dwight];

for ( const employee of Scranton) {if(employee.boss){
  console.log(`${employee.Job_title} ${employee.name} reports to ${employee.boss}.`);}
else{console.log(`${employee.Job_title} ${employee.name} doesn't report to anybody.`);}
}


const cipher ={a:2,b:3, c:4, d:5,};

function decoded(word){
  if (word[0]<'e'){
    return word[cipher[word[0]]-1];
  } else {
    return ' ';
  }
}

decoded('dycle');
