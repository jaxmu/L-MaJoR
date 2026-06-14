document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       APARICIÓN DE PANELES
    ========================= */

    const panels =
    document.querySelectorAll(".terminal-panel");

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0px)";

            }

        });

    },{

        threshold:0.2

    });

    panels.forEach(panel=>{

        panel.style.opacity = "0";

        panel.style.transform =
        "translateY(100px)";

        panel.style.transition =
        "1s ease";

        observer.observe(panel);

    });

    /* =========================
       EFECTO TERMINAL
    ========================= */

    const titles =
    document.querySelectorAll(".panel-title");

    setInterval(()=>{

        titles.forEach(title=>{

            title.style.filter =
            "brightness(1.3)";

            setTimeout(()=>{

                title.style.filter =
                "brightness(1)";

            },300);

        });

    },5000);

    /* =========================
       EFECTO OBELISCO
    ========================= */

    const obelisk =
    document.querySelector(".obelisk");

    window.addEventListener("mousemove",(e)=>{

        const x =
        (e.clientX/window.innerWidth)-0.5;

        obelisk.style.transform =

        `rotateY(${x*20}deg)`;

    });

    /* =========================
       MENSAJES DEL SISTEMA
    ========================= */

    const messages = [

        "📡 Sistema conectado",
        "🌎 La mejor ciudad del mundo",
        "🚦 Tránsito monitoreado",
        "🏙️ Buenos Aires online",
        "🇦🇷 Región detectada",
        "💻 Centro operativo activo",
        "📍 Localización confirmada",
        "🔵 Escaneo completado"

    ];

    const status =
    document.querySelector(".system-status");

    let index = 0;

    setInterval(()=>{

        status.textContent =
        messages[index];

        index++;

        if(index >= messages.length){

            index = 0;

        }

    },3000);

    /* =========================
       EFECTO ESCRITURA
    ========================= */

const heading =
document.querySelector(".control-center h1");

heading.animate([

    {
        opacity:0,
        filter:"blur(20px)"
    },

    {
        opacity:1,
        filter:"blur(0px)"
    }

],{

    duration:1500

});
    /* =========================
       LUCES DE LA CIUDAD
    ========================= */

    function createLight(){

        const light =
        document.createElement("div");

        light.style.position = "fixed";

        light.style.width = "4px";

        light.style.height = "4px";

        light.style.borderRadius = "50%";

        light.style.background =
        Math.random() > 0.5
        ? "#7ec8ff"
        : "#ffffff";

        light.style.left =
        Math.random()*window.innerWidth + "px";

        light.style.top =
        window.innerHeight + "px";

        light.style.pointerEvents = "none";

        light.style.zIndex = "-1";

        document.body.appendChild(light);

        const duration =
        Math.random()*4000+4000;

        light.animate([

            {
                transform:
                "translateY(0px)",
                opacity:0
            },

            {
                opacity:1
            },

            {
                transform:
                `translateY(-${window.innerHeight+200}px)`,
                opacity:0
            }

        ],{

            duration:duration,
            easing:"linear"

        });

        setTimeout(()=>{

            light.remove();

        },duration);

    }

    setInterval(createLight,250);

});