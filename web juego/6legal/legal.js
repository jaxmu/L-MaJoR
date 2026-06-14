document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       APARICIÓN DEL DOCUMENTO
    ========================== */

    const documentPaper =
    document.querySelector(".burned-document");

    documentPaper.style.opacity = "0";
    documentPaper.style.transform =
    "translateY(80px) scale(.95)";

    setTimeout(() => {

        documentPaper.style.transition =
        "1.8s ease";

        documentPaper.style.opacity = "1";

        documentPaper.style.transform =
        "translateY(0) scale(1)";

    }, 300);

    /* ==========================
       TEMBLOR DEL PLANETA
    ========================== */

    function worldShake(){

        const intensity =
        Math.random() * 3 + 1;

        document.body.animate([

            {
                transform:
                `translate(${intensity}px, 0px)`
            },

            {
                transform:
                `translate(-${intensity}px, 0px)`
            },

            {
                transform:
                `translate(0px, 0px)`
            }

        ], {

            duration: 350

        });

    }

    setInterval(() => {

        if(Math.random() > 0.75){

            worldShake();

        }

    }, 7000);

    /* ==========================
       CENIZAS REALES
    ========================== */

    function createAsh(){

        const ash =
        document.createElement("div");

        ash.style.position = "fixed";

        ash.style.width =
        Math.random() * 5 + 2 + "px";

        ash.style.height =
        ash.style.width;

        ash.style.background =
        "rgba(255,255,255,.35)";

        ash.style.borderRadius =
        "50%";

        ash.style.left =
        Math.random() *
        window.innerWidth + "px";

        ash.style.top = "-20px";

        ash.style.pointerEvents =
        "none";

        ash.style.zIndex = "999";

        document.body.appendChild(ash);

        const drift =
        Math.random() * 120 - 60;

        const duration =
        Math.random() * 6000 + 5000;

        ash.animate([

            {
                transform:
                "translate(0px,0px)",
                opacity:0
            },

            {
                opacity:.7
            },

            {
                transform:
                `translate(${drift}px,
                ${window.innerHeight + 100}px)`,

                opacity:0
            }

        ], {

            duration:duration,
            easing:"linear"

        });

        setTimeout(() => {

            ash.remove();

        }, duration);

    }

    setInterval(createAsh, 250);

    /* ==========================
       TITULO MALDITO
    ========================== */

    const title =
    document.querySelector("h1");

    setInterval(() => {

        title.style.textShadow =

        `
        0 0 20px rgba(181,138,60,.6),
        0 0 35px rgba(109,0,0,.4)
        `;

        setTimeout(() => {

            title.style.textShadow =

            `
            0 0 10px rgba(181,138,60,.3)
            `;

        }, 400);

    }, 5000);

    /* ==========================
       GOTAS DE SANGRE
    ========================== */

    function bloodDrop(){

        const blood =
        document.createElement("div");

        blood.style.position =
        "absolute";

        blood.style.width = "6px";

        blood.style.height = "6px";

        blood.style.background =
        "#6d0000";

        blood.style.borderRadius =
        "50%";

        blood.style.left =
        Math.random() * 90 + "%";

        blood.style.top = "0px";

        blood.style.opacity = ".6";

        blood.style.pointerEvents =
        "none";

        documentPaper.appendChild(blood);

        blood.animate([

            {
                transform:
                "translateY(0px)"
            },

            {
                transform:
                `translateY(${Math.random()*300+100}px)`
            }

        ],{

            duration:6000,
            easing:"linear"

        });

        setTimeout(() => {

            blood.remove();

        },6000);

    }

    setInterval(() => {

        if(Math.random() > 0.7){

            bloodDrop();

        }

    },4000);

    /* ==========================
       EFECTO LUZ DEL HOTEL
    ========================== */

    const seal =
    document.querySelector(".hotel-seal");

    setInterval(() => {

        seal.animate([

            {
                opacity:1
            },

            {
                opacity:.2
            },

            {
                opacity:1
            }

        ],{

            duration:300

        });

    },8000);

});


