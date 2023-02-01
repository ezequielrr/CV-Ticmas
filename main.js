let nombreVisitante = prompt("Hola!! \n \n Me diría su nombre? \n ");

nombreVisitante = nombreVisitante.toUpperCase();

alert(`Bienvenido ${nombreVisitante} a mi CV online 👍🏻`);

let saludoFinal = document.createElement("p");
saludoFinal.className = "final";
saludoFinal.innerText = `Muchísimas gracias ${nombreVisitante} por visitar esta página!!`;
document.body.appendChild(saludoFinal);
