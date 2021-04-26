'use strict'
import { Alumno, sumar, PI, nombre } from './functions.js'
import Ciclista from './Ciclista.js'

let CICLISTAS = []
var modalCiclista

/*
let ciclista = new CiclistaCarlos();
ciclista.nombre = "Juan Carlos"
ciclista.registrarTiempo("carrera2", 80)
console.log("La suma es ", sumar(2, 5))
console.log(ciclista.correr())

console.log(PI * 2)
    
console.log(nombre) */

function llenarArregloCiclistas() {
    /*let juan = new Ciclista()
    juan.nombre = "Juan Perez"
    registrarTiempos(juan)

    let pedro = new Ciclista()
    pedro.nombre = "Pedro del Río"
    registrarTiempos(pedro)

    let camila = new Ciclista()
    camila.nombre = "Camila Cardenas"
    registrarTiempos(camila)

    CICLISTAS.push(pedro, juan)
    CICLISTAS.unshift(camila)*/
    if (localStorage.getItem('ciclistas'))
        CICLISTAS = JSON.parse(localStorage.getItem('ciclistas')).map(c =>
            Object.setPrototypeOf(c, Ciclista.prototype)
        )
}

function registrarTiempos(c) {
    for (let i = 1; i <= 5; i++) {
        c.registrarTiempo('carrera' + i, Math.floor(Math.random() * 100))
    }
}

function pintarTablaCorredores(arregloCiclitas) {
    document.querySelector('#tbl-ciclistas tbody').innerHTML = ''
    arregloCiclitas.forEach((ciclista, i) => {
        document.querySelector('#tbl-ciclistas tbody').innerHTML += `<tr>
                                                                          <td>${i +
            1}</td>
                                                                          <td>${ciclista.nombre
            }</td>
                                                                          <td>${ciclista
                .registroTiempos
                .carrera1
            }</td>
                                                                          <td>${ciclista
                .registroTiempos
                .carrera2
            }</td>
                                                                          <td>${ciclista
                .registroTiempos
                .carrera3
            }</td>
                                                                          <td>${ciclista
                .registroTiempos
                .carrera4
            }</td>
                                                                          <td>${ciclista
                .registroTiempos
                .carrera5
            }</td>
      <td><a href class = "btn btn-link">Acciones</a></td>
                                                                      </tr>`
    })
}

window.addEventListener('load', e => {
    llenarArregloCiclistas()
    pintarTablaCorredores(CICLISTAS)
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    modalCiclista = new bootstrap.Modal(
        document.getElementById('modalAdicionarCiclista'),
        {
            keyboard: false
        }
    )
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            'submit',
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            },
            false
        )
    })
})

document.querySelector('#frm-ciclista').addEventListener('submit', e => {
    if (document.querySelector('#frm-ciclista').checkValidity()) {
        let corredor = new Ciclista()
        corredor.nombre = document.querySelector('#nombre_ciclista').value
        corredor.registroTiempos['carrera1'] = document.querySelector(
            '#carrera_1_corredor'
        ).value
        corredor.registroTiempos['carrera2'] = document.querySelector(
            '#carrera_2_corredor'
        ).value
        corredor.registroTiempos['carrera3'] = document.querySelector(
            '#carrera_3_corredor'
        ).value
        corredor.registroTiempos['carrera4'] = document.querySelector(
            '#carrera_4_corredor'
        ).value
        corredor.registroTiempos['carrera5'] = document.querySelector(
            '#carrera_5_corredor'
        ).value

        CICLISTAS.push(corredor)

        pintarTablaCorredores(CICLISTAS)

        modalCiclista.toggle()
        localStorage.setItem('ciclistas', JSON.stringify(CICLISTAS))
    } else {
        console.log("¡Error!")
    }

    e.preventDefault()
})

document.querySelector('#frm-adicionar-ciclista').addEventListener('submit', e => {
    e.preventDefault()
})

document.querySelector("#txt-buscar-ciclistas").addEventListener('keyup', e => {
    let parametrobuscqueda = document.querySelector("#txt-buscar-ciclistas").value

    let arregloBusqueda = CICLISTAS.filter(ciclista => {
        return ciclista.nombre.toLocaleLowerCase().indexOf(parametrobuscqueda.toLocaleLowerCase()) != -1
    })

    pintarTablaCorredores(arregloBusqueda)
})

/*var y ;
llenarArregloCiclistas()
console.log(x)

function llenarArregloCiclistas(){
    console.log("Llenando arreglo!!!!!")
}

const x = 4 */
