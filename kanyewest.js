//Selecteur

let citation = document.getElementById("citation")
let citation_new = document.getElementById("citation_new")

//Variable
//Evenement
citation_new.addEventListener('click'), () => {
window.addEventListener('Load'), () => 
fetch("https://api.kanye.rest/")
.then(response => response.json())
.then(data => {
    console.log(data)
    citation.innerText = data.quote
})
}
//Fonction