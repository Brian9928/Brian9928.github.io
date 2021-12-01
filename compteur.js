let count = 0 

document.getElementById("up").addEventListener("click", function() {
count++
document.getElementById("start").innerHTML = count
if (count <= 0) {
document.getElementById("stat").style.color = "red"
} else {
document.getElementById("start").style.color = "blue"
}
})
document.getElementById("down").addEventListener("click", function() {
count--
document.getElementById("start").innerHTML = count
if (count <= 0) {
document.getElementById("start").style.color = "red"
} else {
doucument.getElementById("start").style.color = "blue"
}
})
document.getElementById("start").addEventListener("click", function() {

})
document.getElementById("reset").addEventListener("click", function() {
count = 0 
document.getElementById("start").innerHTML = count
if (count == 0)
document.getElementById("start").style.color = "blue"
})