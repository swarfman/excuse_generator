const pronoun=["The", "A"];
const subject=["mailman", "teacher","programmer","Mona Lisa","painter","bully","president"];
const action=["kicked","cursed","ate","beat","took"];
const noun=["my homework","my money","my wand","my pen"];
const place=["in the street","outside of school","in the city so nice they named it twice","in Miami"];

const pronounString= pronoun[Math.floor(Math.random()*pronoun.length)];
const subjectString= subject[Math.floor(Math.random()*subject.length)];
const actionString= action[Math.floor(Math.random()*action.length)];
const nounString= noun[Math.floor(Math.random()*noun.length)];
const placeString= place[Math.floor(Math.random()*place.length)];


var excuse = pronounString + " " + subjectString + " " + actionString + " " + nounString + " " + placeString + ".";

document.querySelector("#excuses").innerHTML=excuse;