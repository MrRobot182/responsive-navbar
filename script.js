var btn = document.querySelector("#icon");
var ul = document.getElementsByTagName("ul");
var anchor = document.querySelectorAll("nav>ul>li>a");

anchor.forEach(item => {
    item.addEventListener('click', event => {
        if(ul[0].classList == "show")
            ul[0].classList.toggle("show");        
    })
})


btn.addEventListener("click", () => {
    ul[0].classList.toggle("show");
});

