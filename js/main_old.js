let alumnosTodos = [
    {
        "codigo": "001",
        "nombre": "Rodrigo",
        "nota": 19
    },
    {
        "codigo": "002",
        "nombre": "Miguel",
        "nota": 11
    },
    {
        "codigo": "003",
        "nombre": "Paul",
        "nota": 09
    },
    {
        "codigo": "004",
        "nombre": "Maria",
        "nota": 09
    },
    {
        "codigo": "005",
        "nombre": "Jose",
        "nota": 16
    },
    {
        "codigo": "006",
        "nombre": "Paula",
        "nota": 15
    },
    {
        "codigo": "007",
        "nombre": "Josephina",
        "nota": 06
    },
    {
        "codigo": "008",
        "nombre": "Mauricio",
        "nota": 18
    }, {
        "codigo": "009",
        "nombre": "Daniela",
        "nota": 07
    }, {
        "codigo": "010",
        "nombre": "Pepe",
        "nota": 05
    }
];
/* Funcion que construye la lista de alumnos a traves el Json   */ 
 function alumnosLista() {
    /* construccion usando literal templates introducidas en ES6 */
    document.getElementsByClassName("contenido")[0].innerHTML = ` 
            ${alumnosTodos.map(function (alumno) {  
            return `
                <div class="alumnos">
                <div class="marco">
                    <img src="img/login/login-01.jpg">
                </div>
                <div class="alumno-info">
                    <h3>${alumno.nombre} <span>${alumno.codigo}</span></h3> 
                    <h4>Nota: ${aprobado(alumno.nota)}</h4>
                </div>
                </div>
                `
        }
        ).join('')}
        `
}
/* funcion que determina el color de nota del alumno por si esta o no aprobado*/
function aprobado(nota) {
    if (parseInt(nota) > 10) { // las notas mayores a 10 estan aprobadas
        return `<span class="aprobado">${nota}</span>`  // se crea un span de clase aprobado con color de fuente verde 
    }
    else {
        return `<span class="desaprobado">${nota}</span>` // se crea un span de clase desaprobado con color de fuente rojo
    }
}

/* Funcion llamada a traves del boton "TODO* que muestra por pantalla cada alumno con sus repsectivas propiedades*/
function mostrarTodo() {
    alert(`${alumnosTodos.map(function (alumnoDatos) { //el objeto Json es recorrido por cada elemento con el metodo .map()
     
        return alumnoDatos.nombre + " " +
            alumnoDatos.codigo + " " +
            alumnoDatos.nota + "\n" + "\n";
    }
    ).join('')}`);// el metodo join en este caso elimina las comas que separan por defecto en un array
}

/* Funcion que muestra el promedio general */
function promedioAlumnos() {
    let suma=0; 
    let contador=0;   
    alumnosTodos.map(function (alumno) {
        suma += alumno.nota; // se suman todas las notas en la variable suma
        contador++;                      // se suman el numero de notas
    }
    );
    alert(`El promedio general es: ${suma/contador}`); // se calcula el promedio
}

/* Funcion que determina la nota mayor */
function notaMayor(){
    let notas = [];     // se declara un array vacio
    alumnosTodos.map(function (alumno){
        notas.push(alumno.nota); // cada objeto recorrido agrega su nota 
    })
    alert(`La mayor nota es: ${Math.max.apply(null, notas)}`) // nota mayor usando Math
}

/* Funcion que determina la nota menor */
function notaMenor() {
    let notas = [];     //se declara un arreglo vacio
    alumnosTodos.map(function (alumno) {
        notas.push(alumno.nota);  // cada objeto recorrido agrega su nota 
    })
    alert(`La menor nota es: ${Math.min.apply(null, notas)}`) // nota menor usando Math
}
