//?Exercice 1
let firstChild = document.getElementsByTagName("div")[2].firstElementChild
console.log(firstChild);

//?Exercice 2
let lastChild = document.getElementsByTagName("div")[2].lastElementChild
console.log(lastChild);

//?Exercice 3
let i = lastChild.previousElementSibling.children[0]
console.log(i);

//?Exercice 4
let b = lastChild.children[0]
console.log(b);

//?Exercice 5
let parentI = i.parentElement
console.log(parentI);
//?Exercice 6
let parentB = b.parentElement
console.log(parentB);

//?Exercice 7
let nextElement = firstChild.nextElementSibling
console.log(nextElement);


