const nav = document.querySelector("#main")
const topOfNav = nav.offsetTop;
function fixNav (e) {
    if (topOfNav <= window.scrollY){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add("fixed-nav")
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
    console.log(topOfNav , window.scrollY);
}
window.addEventListener("scroll", fixNav)