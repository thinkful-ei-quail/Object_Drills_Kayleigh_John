/* eslint-disable no-console */
'use strict';

const loaf = {
  flour: 300, water: 210, hydration: function () {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

const object = { foo: 1, bar: 2, fum: 3, quux: 4, spam: 'spamspamspam' };

for (const property in object) {
  console.log(`${property}:${object[property]}`);
}


const hobbitMeals = { meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] };

console.log(hobbitMeals.meals[3]);


const Jim = { name: 'Jim Halpert', Job_title: 'Salesman', boss: 'Michael' };
const Pam = { name: 'Pam Beasly', Job_title: 'Receptionist', boss: 'Michael' };
const Michael = { name: 'Michael Scott', Job_title: 'Regional Manager' };
const Angela = { name: 'Angela', Job_title: 'Accountant', boss: 'Michael' };
const Dwight = { name: 'Dwight K Schrute', Job_title: 'Assistant to the Regional Manager', boss: 'Michael' };

const Scranton = [Jim, Pam, Michael, Angela, Dwight];

for (const employee of Scranton) {
  if (employee.boss) {
    console.log(`${employee.Job_title} ${employee.name} reports to ${employee.boss}.`);
  }
  else { console.log(`${employee.Job_title} ${employee.name} doesn't report to anybody.`); }
}


const cipher = { a: 2, b: 3, c: 4, d: 5, };

function decode(word) {
  if (word[0] < 'e') {
    return word[cipher[word[0]] - 1];
  } else {
    return ' ';
  }
}
decode('dycle');

function decodeWords(string) {

  string = string.toLowerCase();
  let arrOfStr = string.split(' ');
  console.log(arrOfStr);
  let solved = '';
  arrOfStr.forEach(element => solved += decode(element));
  console.log(solved);
}
decodeWords('Write all function called');


// const gandalf = {name:'Gandalf the White', nickname:'gandalf', race:'Wizard', origin:'Middle Earth', attack:10, defense:6};
//const bilbo = {name: 'Bilbo Baggins', nickname:'bilbo', race:'Wizard', origin:'The Shire', attack:2,  defense:1};
// const frodo = {name: 'Frodo Baggins', nickname:'frodo', race:'Hobbit', origin:'The Shire', attack:3, defense:2};
// const aragorn = {name: 'Aragorn son of Arathorn', nickname:'aragorn', race:'Man', origin:'Dunnedain', attack:6, defense:8};
// const legolas = {name: 'Legolas', nickname:'legolas', race:'Elf', origin:'Woodland Realm', attack:8, defense:5};//, describe(), evaluateFight(character)};

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {

  return {
    name, nickname, race, origin, attack, defense, describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${weapon}.`);
    }, evaluateFight: function (character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      console.log(`Your opponent takes ${x} and you receive ${y} damage`);
    }
  };
}





let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'the shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'the shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'man', 'Dunnedainn', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')];


characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 9, 'Hadhafang'));


let aragorn = characters.find(character => {
  if (character.nickname === 'aragorn')
    return true;
});

aragorn.describe();

let hobbitses = characters.filter(character => {
  if (character.race === 'Hobbit') return true;
});

//hobbitses.forEach(char=>console.log(char));

//characters.forEach(char => console.log(char))

console.log(JSON.stringify(hobbitses));


let stronk = characters.filter(char => {
  if (char.attack > 5) return true;
});



JSON.stringify(stronk);
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  //let answer='';
  if('id' in query&&'name' in query&&'squad' in query){console.log(arr.find(x=>x.id===query.id&&x.name===query.name&&x.squad===query.squad));}
  else if('id' in query&&'name' in query){console.log(arr.find(x=>Object.is(x.id,query.id)&&Object.is(x.name,query.name)));}
  else if('id' in query&&'squad' in query){console.log(arr.find(x=>(Object.is(x.id,query.id)&&Object.is(x.squad,query.squad))));}
  else if('name' in query&&'squad' in query){console.log(arr.find(x=>x.name===query.name&&x.squad===query.squad));}
  else if('id' in query){console.log(arr.find(x=>Object.is(x.id,query.id)));}
  else if('name' in query){console.log(arr.find(x=>Object.is(x.name,query.name)));}
  else if('squad' in query){console.log(arr.find(x=>Object.is(x.squad,query.squad)));}
  else (console.log('null'));

}





//findOne(HEROES, { id: 1 });

//findOne(HEROES, { id: 2 });

//findOne(HEROES, { id: 3 });

//findOne(HEROES, { id: 4 });


//findOne(HEROES, { id: 10 });


//findOne(HEROES, { id: 2, name: 'Aquaman' });


//findOne(HEROES, { id: 5, squad: 'Justice League' });


//findOne(HEROES, { squad: 'Justice League' });
