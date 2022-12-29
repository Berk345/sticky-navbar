const navbarEL = document.querySelector(".navbar")

const BottomcontainerEL = document.querySelector(".bottom-container")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > BottomcontainerEL.offsetTop - navbarEL.offsetHeight - 50){
        navbarEL.classList.add("active")
    }else{
        navbarEL.classList.remove("active")
    }
})