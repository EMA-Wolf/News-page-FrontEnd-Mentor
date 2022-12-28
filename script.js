"strict mode"
let sideBar = document.getElementById("sidebar")

let menuBar = document.getElementById("menubar").addEventListener("click", function(){
sideBar.classList.remove("hidden")
})

let closeMenuBar = document.getElementById('close').addEventListener("click", function(){
    sideBar.classList.add("hidden")
})




