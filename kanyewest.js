// Selecteurs
let citation = document.getElementById("citation")
let citationNew = document.getElementById("citationNew")

// Variables

// Evenements

window.addEventListener('load', () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        citation.innerText = data.quote
    })
})

citationNew.addEventListener('click', () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        citation.innerText = data.quote
    })
})
// Fonctions