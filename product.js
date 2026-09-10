let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closenav = document.getElementById("closenav");

menuicon.addEventListener("click", ()=>sidenav.style.right = "0")
closenav.addEventListener("click", ()=>sidenav.style.right = "-50%")

// search
let productContainer = document.getElementById("product-container");
let search = document.getElementById("search");

search.addEventListener("keyup", function(event){
    let enteredValue = event.target.value.toUpperCase();
    let productlist = productContainer.children;

    for(let count = 0; count<productlist.length; count++){
        let productname = productlist[count].querySelector("h3").textContent.toUpperCase();
        if(productname.includes(enteredValue)){
            productlist[count].style.display ="block"
        } else{
            productlist[count].style.display = "none"
        }
    }
})