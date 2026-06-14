const reveals =
document.querySelectorAll(".reveal");

function revealCards(){

    reveals.forEach(card=>{

        const windowHeight =
        window.innerHeight;

        const top =
        card.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            card.classList.add("active");
        }
    });
}

window.addEventListener(
"scroll",
revealCards
);

window.addEventListener(
"load",
revealCards
);

/* Parallax suave */

window.addEventListener("scroll",()=>{

    const scroll =
    window.pageYOffset;

    document.body.style.backgroundPositionY =
    scroll * 0.15 + "px";

});


