// Selectati fiecare element folosind metodele ajutatoare
// primul element - dupa id - getElementById ////RETURNEAZA UN ELEMENT (NUMELE ID)
// al doilea si al treilea - dupa clasa - getElementByClassName ///RET UN ARRAY
// elementele de tip section - dupa tag - getElementByTagName ////R: TOATE elementele care au tagul ala, div section
// ...etc
// La fiecare selectie vom schimba background color-ul - pentru fiecare metoda vom folosi o culoare diferita
 //query selector returneaza un Element; #numele ID//

 var element1 = document.getElementById("test");
 element1.style.backgroundColor = "yellow";
 
 var mustar = document.getElementsByClassName("im");
 mustar[0].style.backgroundColor = "red";
 mustar[1].style.backgroundColor = "pink";
 
 var element3 = document.getElementsByTagName("section");
 element3[0].style.backgroundColor = "grey";
 element3[1].style.backgroundColor = "grey";
 
 var element4 = document.querySelector("#test-query");
 element4.style.backgroundColor = "green";
 
 var element5 = document.querySelectorAll(".test-query-all");
 element5[0].style.backgroundColor = "pink";
 element5[1].style.backgroundColor = "pink";
 
///traversarea DOMULUI///

