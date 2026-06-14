const mensajes = [

"Sincronización iniciada...",

"Las horas ya no coinciden.",

"BERA detectó una anomalía.",

"¿Escuchaste algo detrás de la puerta?",

"No abras la puerta roja.",

"Realidad #417 perdida.",

"Acceso no autorizado.",

"El empleado sigue desaparecido.",

"¿Qué hora es realmente?"
];

const horas = [

"03:11",
"17:42",
"23:43",
"99:99",
"ERROR",
"00:00",
"08:41",
"06:66"
];

setInterval(()=>{

document.getElementById("mensaje")
.textContent =
mensajes[
Math.floor(Math.random()*mensajes.length)
];

},4000);

setInterval(()=>{

clock1.textContent =
horas[Math.floor(Math.random()*horas.length)];

clock2.textContent =
horas[Math.floor(Math.random()*horas.length)];

clock3.textContent =
horas[Math.floor(Math.random()*horas.length)];

},1000);

setInterval(()=>{

realidades.textContent =
Math.floor(Math.random()*900)+100;

anomalias.textContent =
Math.floor(Math.random()*100);

},3000);

setInterval(()=>{

logo.classList.toggle("corrupt");

setTimeout(()=>{

logo.classList.toggle("corrupt");

},150);

},5000);


const doors = document.querySelectorAll(".door-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

doors.forEach(door => observer.observe(door));


const portal = document.querySelector(".portal");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  portal.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

// soporte mobile (dedo)
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];

  const x = (touch.clientX / window.innerWidth - 0.5) * 20;
  const y = (touch.clientY / window.innerHeight - 0.5) * 20;

  portal.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});