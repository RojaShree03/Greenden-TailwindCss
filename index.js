
let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closenav = document.getElementById("closenav");

menuicon.addEventListener("click", ()=>sidenav.style.right = "0")
closenav.addEventListener("click", ()=>sidenav.style.right = "-50%")

