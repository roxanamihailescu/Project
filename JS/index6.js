// /*
// 1. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
// Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
// atunci cand user-ul apasa orice tasta.
// Hint: folositi addEventListener
// */
var param = document.querySelector("#par");

document.addEventListener("keydown", fn);

function fn(e) {
  param.style.color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
}
// /*
// 2. Avand formularul dat, adaugati un event listener pentru buton care apeleaza o functie postTheGossip cand este apasat
// In aceasta functie luati toate valorile fieldurilor si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"
// */
var ul = document.getElementById("ul");
ul.addEventListener("keyup", fn2);
function fn2(e) {
  var story = {
    name: "",
    adjective: "",
    "random-word": ""
  };
  story[e.target.id] = e.target.id;
  console.log(e.target.value, e.target.id);
  var aa = document.getElementById("story");
  aa.innerText = story;
}

var y = document.getElementById("balon");

console.log(y);
document.getElementById("exButton").addEventListener("click", fn3);
function fn3(e) {
  y.style.fontSize = "100px";
  y.style.transition = "all 1s ease-in";
}
// /* Extra 
// 3. Creati urmatoarele functii sqrNum, halfNum, percentNum si areaCircle
// pentru fiecare button aveeti de adaugat un event listner care atunci cand este clickuit sa gaseasca valoarea inputului si sa afiseze rezultatul solutiei
// Bonus: faceti sa functioneze si la key press pe langa click



//

const lista = document.querySelector("ul");
const storyElement = document.querySelector("#story");
var story = {
  name: "",
  adjective: "",
  "random-word": "",
  adverb: ""
};
lista.addEventListener("keyup", function(e) {
  console.log("am apasat tasta -> ", e.which);
  story[e.target.id] = e.target.value;

  storyElement.innerText = `${story.name} ${story.adjective} ${story.adverb} ${
    story["random-word"]
  }`;
});




/* 
Se da un balon. La apasarea tastei ⬆️ sa i se dubleze dimensiunea,
iar la apasarea tastei ⬇️ sa i se injumatateasca dimensiunea.

Creati un button 🔪 care sparge balonul 🗑.

Se accepta si valori de neam prost.
*/
let size = 12
const b = document.querySelector('#balloon')
b.style.fontSize = '${size}px

document.addEventListener('keydown', function(e) {
   console.log("avem pe eveniment", e)

}