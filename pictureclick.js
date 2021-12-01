let images = document.querySelectorAll("#left img") 
let main = document.querySelector("#main")
for (let i = 0; i<images.length; i++) {
images[i].addEventListener("click", function(event) {
main.src = event.target.src
})
}