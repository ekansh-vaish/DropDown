let dropdown = document.querySelector(".dropdown");
let btn = dropdown.querySelector(".dropdown-button");
let items = dropdown.querySelectorAll(".dropdown-item");

btn.addEventListener("click",function () {
dropdown.classList.toggle("open");

items.forEach(function (item) {
item.addEventListener("click",function () {
items.forEach(function (i) {
i.classList.remove("selected");    
});

item.classList.add("selected");
btn.textContent = item.textContent ;
item.classList.remove("open");    
})   

document.addEventListener("click",function (event) {
if(!dropdown.contains(event.target))
    {
    dropdown.classList.remove("open");
    }    
})

})
});


