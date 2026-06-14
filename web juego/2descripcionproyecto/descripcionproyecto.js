document.addEventListener("DOMContentLoaded", () => {


/* ==========================
   MENSAJES DE LAS JIRAFAS
========================== */

const messages = [

    "La jirafa número 3 sospecha de tu taza.",
    "Las flores votaron que te quedes.",
    "El reloj acaba de olvidar qué hora es.",
    "Una jirafa ganó una partida de ajedrez contra una nube.",
    "La porcelana está soñando contigo.",
    "El portal está de buen humor hoy.",
    "El azúcar quiere independizarse.",
    "Hay una tetera observándote.",
    "Las jirafas aprueban tu presencia.",
    "La gravedad es opcional en esta dimensión.",
    "El jardín cambió de lugar hace 4 minutos.",
    "Las rosas están contando secretos.",
    "Una mariposa acaba de cruzar tres universos.",
    "El té recuerda todo.",
    "La luna vino a tomar una taza."
];

const whisper =
    document.getElementById("giraffe-whisper");

function showGiraffeMessage(){

    if(!whisper) return;

    whisper.textContent =
        messages[Math.floor(Math.random()*messages.length)];

    whisper.classList.add("show");

    setTimeout(() => {

        whisper.classList.remove("show");

    },5000);

}

setInterval(showGiraffeMessage,8000);

setTimeout(showGiraffeMessage,2000);

/* ==========================
   PETALOS MAGICOS
========================== */

const petalContainer =
    document.getElementById("petal-container");

function createPetal(){

    if(!petalContainer) return;

    const petal =
        document.createElement("div");

    petal.style.position = "fixed";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.top = "-50px";

    petal.style.width =
        Math.random() * 12 + 10 + "px";

    petal.style.height =
        Math.random() * 18 + 15 + "px";

    petal.style.background =
        ["#e8a7b6","#dfb76c","#f5d6de","#ffd9b3"]
        [Math.floor(Math.random()*4)];

    petal.style.borderRadius =
        "50% 10% 50% 50%";

    petal.style.opacity =
        Math.random() * 0.5 + 0.3;

    petal.style.pointerEvents =
        "none";

    petal.style.zIndex = "1";

    petalContainer.appendChild(petal);

    const drift =
        (Math.random() * 300) - 150;

    const duration =
        Math.random() * 5000 + 7000;

    petal.animate([

        {
            transform:
            "translateY(0px) rotate(0deg)"
        },

        {
            transform:
            `translate(${drift}px,
            ${window.innerHeight + 150}px)
            rotate(${Math.random()*720}deg)`
        }

    ],{

        duration:duration,
        easing:"linear"

    });

    setTimeout(() => {

        petal.remove();

    },duration);

}

setInterval(createPetal,400);

/* ==========================
   CURSOR MAGICO
========================== */

document.addEventListener("mousemove", e => {

    const spark =
        document.createElement("div");

    spark.style.position = "fixed";

    spark.style.width = "10px";
    spark.style.height = "10px";

    spark.style.left =
        e.clientX + "px";

    spark.style.top =
        e.clientY + "px";

    spark.style.borderRadius =
        "50%";

    spark.style.background =
        "#dfb76c";

    spark.style.pointerEvents =
        "none";

    spark.style.zIndex =
        "9999";

    document.body.appendChild(spark);

    spark.animate([

        {
            opacity:1,
            transform:"scale(1)"
        },

        {
            opacity:0,
            transform:"scale(0)"
        }

    ],{

        duration:700

    });

    setTimeout(() => {

        spark.remove();

    },700);

});

/* ==========================
   TARJETAS FLOTANTES
========================== */

const cards =
    document.querySelectorAll(".tea-card");

cards.forEach((card,index)=>{

    card.animate([

        {
            transform:
            "translateY(0px)"
        },

        {
            transform:
            "translateY(-10px)"
        }

    ],{

        duration:
        3000 + (index * 400),

        iterations:Infinity,

        direction:"alternate",

        easing:"ease-in-out"

    });

});



/* ==========================
   PARALLAX SUAVE
========================== */

window.addEventListener("mousemove",(e)=>{

    const x =
    (e.clientX/window.innerWidth - 0.5);

    const y =
    (e.clientY/window.innerHeight - 0.5);

    if(portal){

        portal.style.transform =
        `scale(1.1)
         translate(${x*20}px,
         ${y*20}px)`;

    }

});

/* ==========================
   CAMBIO DE DIMENSION
========================== */

setInterval(()=>{

    document.body.animate([

        {
            filter:"hue-rotate(0deg)"
        },

        {
            filter:"hue-rotate(45deg)"
        },

        {
            filter:"hue-rotate(0deg)"
        }

    ],{

        duration:4000

    });

},20000);

/* ==========================
   DESTELLOS MAGICOS
========================== */

function createFlash(){

    const flash =
        document.createElement("div");

    flash.style.position = "fixed";

    flash.style.width = "6px";
    flash.style.height = "6px";

    flash.style.borderRadius =
        "50%";

    flash.style.background =
        "white";

    flash.style.left =
        Math.random()*window.innerWidth + "px";

    flash.style.top =
        Math.random()*window.innerHeight + "px";

    flash.style.pointerEvents =
        "none";

    flash.style.zIndex =
        "2";

    document.body.appendChild(flash);

    flash.animate([

        {
            opacity:0
        },

        {
            opacity:1
        },

        {
            opacity:0
        }

    ],{

        duration:1500

    });

    setTimeout(()=>{

        flash.remove();

    },1500);

}

setInterval(createFlash,300);


});
