const open = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");


open.addEventListener("click", () =>{ // to show mobile menu
    nav.classList.toggle("show");
    open.classList.toggle("show");  
    container.classList.toggle("show"); 
     
})

//bookmark 
const button = document.getElementById("bookmark-btn");
const bookmark = document.getElementById("bookmark");
var isClicked = false;  
button.addEventListener("click", () =>{
    if(isClicked == true){
        button.src = "images/icon-bookmark.svg";
        isClicked = false;
        bookmark.innerHTML = "Bookmark";
        bookmark.style.color = "hsl(0, 0%, 48%)";        
    }
    else{
        button.src = "images/icon-bookmark-active.svg";
        isClicked = true;
        bookmark.innerHTML = "Bookmarked";
        bookmark.style.color = "hsl(176, 72%, 28%)";
    }
})
//open modal menu
function openMode(){
    modalMenu.style.display = "flex";
}

//close modal menu
const close = document.querySelector(".modal-close");
const modalMenu = document.querySelector(".modal-container");
close.addEventListener("click", () =>{
    modalMenu.style.display = "none";
})

//open pledge

var pledge = document.querySelectorAll(".reward-form");

pledge.forEach(function(pledge_item){
    pledge_item.addEventListener("click", function(){
        pledge.forEach(function(pledge_item){
            pledge_item.classList.remove("open");
        })
        pledge_item.classList.add("open");
    })
})

var message = document.querySelector(".success-container");
function displayMessage(){
    message.style.display = "flex";
}
function removeMessage(){    
    message.style.display = "none";
}




