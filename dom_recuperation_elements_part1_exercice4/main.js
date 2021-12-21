//?Exercice1
let titre2 = document.getElementsByTagName("h1")[1].innerText
console.log(titre2);

//?Exercice2
let lastLi = document.getElementsByTagName("ul")[0].lastElementChild.innerText
console.log(lastLi);

//?Exercice3
let firstP = document.getElementsByTagName("p")[0].innerText
console.log(firstP.toUpperCase());

//?Exercice4
let ul = document.querySelectorAll("li")
console.log(ul);
ul.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

