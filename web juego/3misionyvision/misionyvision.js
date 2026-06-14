document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       OJO QUE SIGUE EL MOUSE
    ========================== */

    const pupil = document.querySelector(".pupil");
    const eye = document.querySelector(".eye");

    document.addEventListener("mousemove", (e) => {

        if (!eye || !pupil) return;

        const rect = eye.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(
            e.clientY - centerY,
            e.clientX - centerX
        );

        const distance = 25;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupil.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    /* ==========================
       APARICION AL HACER SCROLL
    ========================== */

    const chapters =
        document.querySelectorAll(".chapter");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";

                }

            });

        }, {
            threshold: 0.2
        });

    chapters.forEach(chapter => {

        chapter.style.opacity = "0";

        chapter.style.transform =
            "translateY(100px)";

        chapter.style.transition =
            "1s ease";

        observer.observe(chapter);

    });

    /* ==========================
       FLORES OCULTAS
    ========================== */

    function createHiddenFlower() {

        const flower =
            document.createElement("div");

        flower.style.position = "fixed";

        flower.style.width = "90px";
        flower.style.height = "90px";

        flower.style.borderRadius = "50%";

        flower.style.background =
            "rgba(255,184,217,.08)";

        flower.style.left =
            Math.random() * window.innerWidth + "px";

        flower.style.top =
            Math.random() * window.innerHeight + "px";

        flower.style.pointerEvents = "none";

        flower.style.zIndex = "-1";

        flower.style.transition =
            ".5s";

        const eye =
            document.createElement("div");

        eye.style.position = "absolute";

        eye.style.width = "30px";
        eye.style.height = "30px";

        eye.style.background = "white";

        eye.style.borderRadius = "50%";

        eye.style.left = "50%";
        eye.style.top = "50%";

        eye.style.transform =
            "translate(-50%,-50%)";

        const pupil =
            document.createElement("div");

        pupil.style.width = "12px";
        pupil.style.height = "12px";

        pupil.style.background = "black";

        pupil.style.borderRadius = "50%";

        pupil.style.position = "absolute";

        pupil.style.left = "50%";
        pupil.style.top = "50%";

        pupil.style.transform =
            "translate(-50%,-50%)";

        eye.appendChild(pupil);
        flower.appendChild(eye);

        document.body.appendChild(flower);

        setInterval(() => {

            flower.animate([
                { opacity: .15 },
                { opacity: .5 },
                { opacity: .15 }
            ], {
                duration: 2000
            });

        }, Math.random() * 7000 + 3000);

    }

    for (let i = 0; i < 12; i++) {

        createHiddenFlower();

    }

    /* ==========================
       DESTELLOS MAGICOS
    ========================== */

    function createSparkle() {

        const sparkle =
            document.createElement("div");

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * window.innerWidth + "px";

        sparkle.style.top =
            Math.random() * window.innerHeight + "px";

        sparkle.style.width = "4px";
        sparkle.style.height = "4px";

        sparkle.style.borderRadius = "50%";

        sparkle.style.background = "white";

        sparkle.style.pointerEvents = "none";

        sparkle.style.zIndex = "10";

        document.body.appendChild(sparkle);

        sparkle.animate([

            {
                opacity: 0,
                transform: "scale(0)"
            },

            {
                opacity: 1,
                transform: "scale(2)"
            },

            {
                opacity: 0,
                transform: "scale(0)"
            }

        ], {

            duration: 2000

        });

        setTimeout(() => {

            sparkle.remove();

        }, 2000);

    }

    setInterval(createSparkle, 300);

    /* ==========================
       RESPIRACION DEL TITULO
    ========================== */

    const title =
        document.querySelector(".hero h1");

    setInterval(() => {

        title.animate([

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(1.03)"
            },

            {
                transform: "scale(1)"
            }

        ], {

            duration: 3000

        });

    }, 3000);

});