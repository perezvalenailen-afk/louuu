/* =========================================
   ELEMENTOS
========================================= */

const carta = document.getElementById("carta");

const modal = document.getElementById("modal");

const cerrar = document.getElementById("cerrar");

const flores =
    document.querySelectorAll(".margarita");

const petalos =
    document.getElementById("petalos");


/* =========================================
   ABRIR CARTA
========================================= */

carta.addEventListener("click", () => {

    modal.classList.add("abierto");

    crearPetalos(12);

});


/* =========================================
   CERRAR CARTA
========================================= */

cerrar.addEventListener("click", () => {

    modal.classList.remove("abierto");

});


/* =========================================
   CERRAR TOCANDO AFUERA
========================================= */

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.classList.remove("abierto");

    }

});


/* =========================================
   ESC PARA CERRAR
========================================= */

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        modal.classList.remove("abierto");

    }

});


/* =========================================
   CREAR PÉTALOS
========================================= */

function crearPetalos(cantidad) {

    for (let i = 0; i < cantidad; i++) {

        const petalo =
            document.createElement("span");


        petalo.classList.add(
            "petalo-caido"
        );


        /* POSICIÓN */

        petalo.style.left =
            Math.random() * 90 + 5 + "%";

        petalo.style.top =
            Math.random() * 25 + 10 + "%";


        /* MOVIMIENTO */

        const movimiento =
            Math.random() * 120 - 60;

        petalo.style.setProperty(
            "--movimiento",
            movimiento + "px"
        );


        /* TAMAÑO */

        const tamaño =
            Math.random() * 8 + 9;

        petalo.style.width =
            tamaño + "px";

        petalo.style.height =
            tamaño * 1.6 + "px";


        /* DURACIÓN */

        const duracion =
            Math.random() * 1.5 + 2;

        petalo.style.animationDuration =
            duracion + "s";


        petalos.appendChild(petalo);


        /* BORRAR */

        petalo.addEventListener(
            "animationend",
            () => {

                petalo.remove();

            }
        );

    }

}


/* =========================================
   INTERACCIÓN DE LAS 7 FLORES
========================================= */

flores.forEach((flor) => {

    flor.addEventListener("click", () => {

        /* PÉTALOS */

        crearPetalos(6);


        /* ANIMACIÓN */

        flor.animate(
            [
                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.18) rotate(-5deg)"
                },

                {
                    transform:
                        "scale(1.08) rotate(5deg)"
                },

                {
                    transform:
                        "scale(1)"
                }
            ],
            {
                duration: 550,
                easing:
                    "ease-in-out"
            }
        );

    });

});


/* =========================================
   PEQUEÑA LLUVIA AUTOMÁTICA
========================================= */

setTimeout(() => {

    crearPetalos(5);

}, 1200);