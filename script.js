gsap.from('h1', 1.2, {opacity: 0, y: -80, delay: 0.3, ease: "back.out" });
gsap.from('p', 1.2, {opacity: 0, y: -80, delay: 0.6, ease: "back.out" });
gsap.from('button', 1.2, {opacity: 0, y: -80, delay: 0.9, ease: "power2.out" });

//const header2 = document.querySelector('.header2');
const menu = document.querySelector('i');

var flag = 0;

menu.addEventListener("click", myFunction);

function myFunction(){
    if(flag == 0)
    {
        document.getElementById("header2").style.display = "flex";
        flag = 1;
    }
    else
    {
        document.getElementById("header2").style.display = "none";
        flag = 0;
    }
}