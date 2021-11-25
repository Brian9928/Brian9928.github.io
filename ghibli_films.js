//Selecteur
let h1 = document.querySelector("#titre_film")
//Variable
//Fonction

//Evenement

window.addEventListener('load', function() {
fetch("https://ghibliapi.herokuapp.com/Films")
.then(response => response.json())
.then(films => {
    for (let film of films) {
        document.body.innerHTML += `<p> "${film.title} est un film de ${film.release_date}</p>`
    }
})
})
fetch("https://ghibliapi.herokuapp.com/Films")
.then(response => response.json())
.then(people => {
    for (let person of people) {
        console.log(person.gender)
        let sex
        if (person.gender) {
            
        }
        document.body.innerHTML += `<p> "${film.title} est un film de ${film.release_date}</p>`