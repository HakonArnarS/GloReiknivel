var addBtn = document.getElementById("addBtn"); 
var addBtn2 = document.getElementById("addBtn2");
var ctaBtn = document.getElementById("cta"); 
var ctaBtn2 = document.getElementById("cta2");


addBtn.onclick = function toggleAdd() {
    var addIcon = document.getElementById("addIcon");
    if (addIcon.style.transform === "") {
        addIcon.style.transform = "rotate(225deg)";
        addIcon.style.transition = "transform 0.3s ease";
    } 
    else {
        addIcon.style.transform = "";
    }
}

ctaBtn.onclick = function addtToCart() {
    var cartIcon = document.getElementById("itemsInCart");
    if (cartIcon.classList !== "none") {
        cartIcon.classList.add("moveAnimation");
        cartIcon.style.transition = "opacity 0.5s ease, transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.15)";
    } 
    else {
        cartIcon.classList.add = "moveAnimation";
    }
}

ctaBtn2.onclick = function addtToCart() {
    var cartIcon2 = document.getElementById("itemsInCart2");
    if (cartIcon2.classList !== "none") {
        cartIcon2.classList.add("moveAnimation");
        cartIcon2.style.transition = "opacity 0.5s ease, transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.15)";
    } 
    else {
        cartIcon2.classList.add = "moveAnimation";
    }
}







