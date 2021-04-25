'use strict'

import {sumar,PI,nombre} from './functions.js'
import Ciclista from './Ciclista.js'

const CICLISTAS=[]

/*
let ciclista = new CiclistaCarlos();
ciclista.nombre = "Juan Carlos"
ciclista.registrarTiempo("carrera2", 80)
console.log("La suma es ", sumar(2, 5))
console.log(ciclista.correr())

console.log(PI * 2)
    
console.log(nombre) */

function llenarArregloCiclistas(){
    let juan = new Ciclista()
    juan.nombre = "Juan Perez"
    registrarTiempos(juan)

    let pedro = new Ciclista()
    pedro.nombre="Pedro del Río"
    registrarTiempos(pedro)

    CICLISTAS.push(pedro)
    CICLISTAS.push(juan)
}

function registrarTiempos(c){
    for (let i=1; 1<=5; i++){
        c.registrarTiempos('carrera'+i, Math.floor(Math.random() * 100))
    }
}

window.addEventListener('load', e=> {
    llenarArregloCiclistas()
    console.log(CICLISTAS)
})