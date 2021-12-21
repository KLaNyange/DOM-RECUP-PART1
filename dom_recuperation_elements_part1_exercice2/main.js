//?Exercice 1
let myBody = document.getElementsByTagName("body")[0]
let myBody = document.body
console.log(myBody);

//?Exercice 2
let first = myBody.firstElementChild
console.log(first);

//?Exercice 3
let last = myBody.lastElementChild
console.log(last)

//?Exercice 4
let firstDiv = document.getElementsByTagName("div")[0]
let exo4 = firstDiv.children
console.log(firstDiv);
console.log(exo4);

//?Exercice 5
let li = document.getElementsByTagName("li")[0]
let nextLi = li.nextElementSibling
console.log(li);
console.log(nextLi);

//?Exercice 6
let firstLi = nextLi.previousElementSibling
console.log(firstLi);
