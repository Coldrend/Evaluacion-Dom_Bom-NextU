let alumnosTodos =
    [
        {
            "nombre": "Rodrigo",
            "apellido": "Hernandez",
            "nota": 19
        },
        {
            "nombre": "Antonio",
            "apellido": "Garcia",
            "nota": 11
        },
        {
            "nombre": "Paul",
            "apellido": "Lopez",
            "nota": 09
        },
        {
            "nombre": "Maria",
            "apellido": "Sanchez",
            "nota": 09
        },
        {
            "nombre": "Jose",
            "apellido": "Moreno",
            "nota": 16
        },
        {
            "nombre": "Paula",
            "apellido": "Jimenez",
            "nota": 15
        },
        {
            "nombre": "Josephina",
            "apellido": "Navarro",
            "nota": 06
        },
        {
            "nombre": "Mauricio",
            "apellido": "Ruiz",
            "nota": 18
        }, 
        {
            "nombre": "Daniela",
            "apellido": "Romero",
            "nota": 07
        }, 
        {
            "nombre": "Pepe",
            "apellido": "Lozano",
            "nota": 14
        },
        {
            "nombre": "Alejandro",
            "apellido": "Serrano",
            "nota": 07
        },
        {
            "nombre": "Rafael",
            "apellido": "Muñoz",
            "nota": 15
        },
        {
            "nombre": "Rosario",
            "apellido": "Saez",
            "nota": 08
        }
    ];

/******* Event Listeners *******/

/* Cargar la pagina */

window.addEventListener("load", construirTabla);

/* Inputs (Campos del Registro) */

let inputs = document.getElementById("formulario").getElementsByTagName("input");

inputs[0].addEventListener("keyup",rangoNota);
inputs[1].addEventListener("keyup", function () {soloLetras(this)});
inputs[2].addEventListener("keyup", function () {soloLetras(this)});
 
/* Botones (Formulario Registro)*/

let botones = document.getElementById("botones").getElementsByTagName("button");

botones[0].addEventListener("click", registrarAlumno);
botones[1].addEventListener("click", promedioAlumnos);
botones[2].addEventListener("click", notaMayor);
botones[3].addEventListener("click", notaMenor);

/******* Funciones Principales *******/

/* Funcion encargada de generar la tabla y su contenido*/
function construirTabla() {
    document.getElementById("tabla-alumnos").innerHTML = `
                <thead>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Nota</th>
                </thead>
    ${alumnosTodos.map(function (alumno) {
            return `
             <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${aprobado(alumno.nota)} </span> </td>
            </tr>
             `;
        }).join('')}
    `;
}

/* Funcion que registra los datos del alumno y la añade en el Json*/
function registrarAlumno() {
    let datos = [];
    let campos = document.getElementsByTagName("input");
    try {
        for (i = 0; i < campos.length; i++) {
            if (campos[i].value != "") {
                datos[campos[i].name] = campos[i].value;
            }
            else {
                throw "Rellene todos los campos";
            }
        }
    }
    catch (exception) {
        alert(exception);
        return 0;
    }

    alumnosTodos.push({
        "nombre": datos.nombre,
        "apellido": datos.apellido,
        "nota": datos.nota
    });
    construirTabla();
    limpiarRegistro();
}

/* Funcion que calcula el promedio general de los alumnos*/
function promedioAlumnos() {
    let suma = 0;
    let contador = 0;
    alumnosTodos.map(function (alumno) {
        suma += parseInt(alumno.nota); // se suman todas las notas 
        contador++;                    // almacena el numero de alumnos
    }
    );
    console.log(suma);
    alert(`El promedio general es: ${suma / contador}`); // promedio calculado y mostrado por pantalla
}

/* Funcion que determina la nota mayor entre los alumnos*/
function notaMayor() {
    let notas = [];    
    alumnosTodos.map(function (alumno) {
        notas.push(alumno.nota); // cada alumno recorrido agrega su nota 
    })
    alert(`La mayor nota es: ${Math.max.apply(null, notas)}`);// nota mayor usando Math
}

/* Funcion que determina la nota menor entre los alumnos*/
function notaMenor() {
    let notas = [];     //se declara un arreglo vacio
    alumnosTodos.map(function (alumno) {
        notas.push(alumno.nota);  // cada alumno agrega su nota 
    })
    alert(`La menor nota es: ${Math.min.apply(null, notas)}`);// nota menor usando Math
}

/******* Funciones Complementarias *******/

/* Funcion que determina el color de la nota en la tabla por medio de la nota del alumno */
function aprobado(nota) {
    if (parseInt(nota) > 10) { 
        return `<span class="aprobado">${nota}</span>`;  // se crea un span con color de fuente verde 
    }
    else {
        return `<span class="desaprobado">${nota}</span>`; // se crea un span con color de fuente rojo
    }
}

/* Funcion encargada de restringir el contenido del campo a solo numeros entre 0 y 20 */
function rangoNota() {
    let nota = document.getElementsByTagName("input")[0];
    if (parseInt(nota.value) > 20) { nota.value = 20; }
    if (parseInt(nota.value) < 0 || isNaN(parseInt(nota.value))) { nota.value = 0; }
}

/* Funcion que limpia los campos del registro una vez se apreta el boton registrar*/

function limpiarRegistro() {
    document.getElementById("formulario").reset();//metodo reset limpia el formulario
}

/* Funcion que restringe el contenido del campo a solo letras, sin incluir caracters especiales o espacio*/
function soloLetras(input) {
    let expregular = /[^a-z]/gi; //expresion que admite solo caracteres de a hasta z sin importar que sean Mayusculas 
    input.value = input.value.replace(expregular, "");//el caracter esta forazado a cambiar si es numero,carcter especial o espacio a vacio

}