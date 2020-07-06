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

function decode(word){
  if (word[0]<'e'){
    return word[cipher[word[0]]-1];
  } else {
    return ' ';
  }
}
decode('dycle');

function decodeWords(string){
  // let sentence= '';
  // if (string.length <= 4){
  //   for (let i=0; i<string.length;i++) {
  //    sentence += decode(string);
  //  }
  // } else {
  //  return 'Word is too short!';
  // }
  // console.log(sentence);
  string = string.toLowerCase();
  let arrOfStr = string.split(' ');
  console.log(arrOfStr);
  let solved = '';
  arrOfStr.forEach(element => solved += decode(element));
  console.log(solved);
}
decodeWords('Write all function called');

let gandalf = {name:'Gandalf the White', nickname:'gandalf', race:'Wizard', origin:'Middle Earth', attack:10, defense:6, describe(), evaluateFight(character)};
let bilbo = {name: 'Bilbo Baggins', nickname:'bilbo', race:'Wizard', origin:'The Shire', attack:2,  defense:1, describe(), evaluateFight(character)};
let frodo = {name: 'Frodo Baggins', nickname:'frodo', race:'Hobbit', origin:'The Shire', attack:3, defense:2, describe(), evaluateFight(character)};
let aragorn = {name: 'Aragorn son of Arathorn', nickname:'aragorn', race:'Man', origin:'Dunnedain', attack:6, defense:8, describe(), evaluateFight(character)};
let legolas = {name: 'Legolas', nickname:'legolas', race:'Elf', origin:'Woodland Realm', attack:8, defense:5, describe(), evaluateFight(character)};

function createCharacter(){

}