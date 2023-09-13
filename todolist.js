let cuerpo = document.querySelector("body")
let contenedorTareas = document.querySelector(".tareas")
console.log("Mira lo que hay", cuerpo);
let boton = document.querySelector("button.agregar")
let botonBorrar = document.querySelector("button.borrar")
let comenzarDesde = 3
let tareas = []
console.log("mira lo que hay", cuerpo)
botonBorrar.addEventListener("click", function (evento){
    evento.preventDefault()
    borrar("clave-bti")
    contenedorTareas.innerHTML = ""
    const duration = 2 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 60, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
})

cuerpo.addEventListener("click", function (evento) {
    console.log("Hiciste click en", evento);
    if (evento.target.tagName == "INPUT" &&
        evento.target.type == "checkbox") {
        console.log("el id del input es", evento.target.id);
        let id = evento.target.id
        document.querySelector("label[for=" + id + "]").remove()
        document.querySelector("." + id).remove()
        //evento.target.remove()
        guardarTodo()
        if (contenedorTareas.children.length == 0){
            const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
        
        }
    }
})
boton.addEventListener("click", function (evento) {
    let texto = document.querySelector("#texto")
    console.log("mira el texto que estaba en el input", texto.value);
    if (texto.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes colocar un texto!',

        })
        return
    }

    let contenedor = document.createElement("div")
    contenedor.className = `tarea${comenzarDesde}`
    let tarea = `<div class="Tarea${comenzarDesde}">
                    <input type="checkbox" id="tarea${comenzarDesde}">
                    <label for="tarea${comenzarDesde}">${texto.value}</label>
                </div>`

    contenedor.innerHTML = tarea
    tareas.push({
        "id": `tarea${comenzarDesde}`,
        "tarea": `${texto.value}`
    })
    comenzarDesde = comenzarDesde + 1
    contenedorTareas.appendChild(contenedor)
    guardar("clave-bti", JSON.stringify(tareas))
})
console.log(
    recuperar("clave-bti")
);
let tareasArealizar = recuperar("clave-bti");
console.log("tareas a analizar", tareasArealizar);
if (tareasArealizar != null) {
let tareasJson = JSON.parse(tareasArealizar)
console.log(tareasJson);
tareas = tareasJson
tareasJson.map(
    function (tarea) {
        let contenedor = document.createElement("div")
        contenedor.className = `${tarea.id}`
        let texto = `<input type="checkbox" id="${tarea.id}">
                  <label for="${tarea.id}">${tarea.tarea}</label>`
        contenedor.innerHTML = texto
        contenedorTareas.appendChild(contenedor)
        console.log("*",cuerpo);
    }
)}
for (const clave of cuerpo.children) {
    console.log(clave.children[1]?.textContent);
}
console.log("que tiene el contenedor tareas?", contenedorTareas.children);
function guardarTodo() {
    const nuevasTareas = []
    for (const clave of contenedorTareas.children) {
        console.log("clave", clave.className);
        console.log("texto", clave.children[1].textContent);
        nuevasTareas.push({
            "id": `${clave.className}`,
            "tarea": `${clave.children[1].textContent}`
        })
       
    }
    guardar("clave-bti", JSON.stringify(nuevasTareas))
}

