document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MENSAJES DEL SUPERMERCADO
    ========================== */

    const messages = [

        "Nueva remesa de Alegría disponible.",
        "La Nostalgia está en oferta.",
        "Reposición automática de Amor.",
        "Advertencia: exceso de Ira detectado.",
        "Miedo agotado temporalmente.",
        "Escaneando emociones del cliente...",
        "Promoción especial en recuerdos felices.",
        "Actualizando inventario emocional.",
        "Nivel de empatía óptimo.",
        "Sistema emocional funcionando correctamente."

    ];

    const notification = document.createElement("div");

    notification.classList.add("notification");

    document.body.appendChild(notification);

    function showMessage(){

        notification.textContent =
            messages[
                Math.floor(
                    Math.random() * messages.length
                )
            ];

        notification.classList.add("show");

        setTimeout(() => {

            notification.classList.remove("show");

        }, 4000);

    }

    setInterval(showMessage, 6000);

    /* ==========================
       FRASCOS PULSANTES
    ========================== */

    const jars =
        document.querySelectorAll(".jar");

    jars.forEach((jar) => {

        setInterval(() => {

            jar.animate([

                {
                    transform:"scale(1)"
                },

                {
                    transform:"scale(1.08)"
                },

                {
                    transform:"scale(1)"
                }

            ],{

                duration:2000

            });

        },Math.random()*3000+2000);

    });

    /* ==========================
       REACCION AL MOUSE
    ========================== */

    const emotions =
        document.querySelectorAll(".emotion");

    emotions.forEach((emotion)=>{

        emotion.addEventListener("mousemove",(e)=>{

            const rect =
                emotion.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            emotion.style.background =
            `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,.35),
            rgba(255,255,255,.08)
            )`;

        });

        emotion.addEventListener("mouseleave",()=>{

            emotion.style.background="";

        });

    });

    /* ==========================
       ENTRADA DE TARJETAS
    ========================== */

    const shelves =
        document.querySelectorAll(".shelf");

    const observer =
        new IntersectionObserver((entries)=>{

            entries.forEach((entry)=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform=
                    "translateY(0px)";

                }

            });

        },{

            threshold:.2

        });

    shelves.forEach((shelf)=>{

        shelf.style.opacity="0";

        shelf.style.transform=
        "translateY(120px)";

        shelf.style.transition=
        "1s ease";

        observer.observe(shelf);

    });

    /* ==========================
       PARTICULAS EMOCIONALES
    ========================== */

    const colors = [

        "#8b5cf6",
        "#ffd166",
        "#ff73b9",
        "#4ea3ff",
        "#ff4d4d"

    ];

    function createEmotionParticle(){

        const particle =
            document.createElement("div");

        particle.style.position="fixed";

        particle.style.width="6px";
        particle.style.height="6px";

        particle.style.borderRadius="50%";

        particle.style.background=
            colors[
                Math.floor(
                    Math.random()*colors.length
                )
            ];

        particle.style.left=
            Math.random()*window.innerWidth+"px";

        particle.style.top=
            window.innerHeight+"px";

        particle.style.pointerEvents="none";

        particle.style.zIndex="1";

        document.body.appendChild(particle);

        const drift =
            Math.random()*200-100;

        const duration =
            Math.random()*5000+5000;

        particle.animate([

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
                `translate(${drift}px,-${window.innerHeight+300}px)`,
                opacity:0
            }

        ],{

            duration:duration,
            easing:"linear"

        });

        setTimeout(()=>{

            particle.remove();

        },duration);

    }

    setInterval(
        createEmotionParticle,
        250
    );

    /* ==========================
       TITULO VIVO
    ========================== */

    const title =
        document.querySelector("h1");

    setInterval(()=>{

        title.animate([

            {
                letterSpacing:"5px"
            },

            {
                letterSpacing:"12px"
            },

            {
                letterSpacing:"5px"
            }

        ],{

            duration:2500

        });

    },2500);

});