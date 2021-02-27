import { data } from './data.js';

let contador = 0;
const search = document.getElementById('search');
const combo = document.getElementById('combo');

let itemSearch;

function miFuncion () {
    itemSearch = combo.value;
    if (itemSearch == "Casa") {
        const pin1 = "Casa";
        insertando(pin1)
    }
    else if (itemSearch == "Bodega") {
        const pin2 = "Bodega";
        insertando(pin2)
    }
    else if (itemSearch == "Garaje") {
        const pin3 = "Garaje";
        insertando(pin3)
    }
};

function insertando (arg) {
    for (let i = 0; i < data.length; i++) {
        if (contador <= data.length) {
            if (data[i].clase == itemSearch) {
                let elementoContenedor = document.createElement('div');
                let elementoP0 = document.createElement('div');
                let elementoP1 = document.createElement('div');
                let elementoP2 = document.createElement('div');
                let elementoP3 = document.createElement('div');
                let elementoP4 = document.createElement('div');
                elementoContenedor.className = "contenedorSearch";
                elementoP0.className = "parrafo0";
                elementoP1.className = "parrafo1";
                elementoP2.className = "parrafo2";
                elementoP3.className = "parrafo3";
                elementoP4.className = "parrafo4";

                elementoP0.textContent += `# ${contador + 1}`;
                elementoP1.textContent += `${data[i].clase}`;
                elementoP2.textContent += `${data[i].descripcion}`;
                elementoP3.textContent += `${data[i].item}`;
                elementoP4.textContent += `${data[i].zona}`;
                search.append(elementoP0, elementoP3, elementoP4, elementoP2, elementoP1);
                console.log(data[i].clase, data[i].descripcion);
                contador++
            }
        }
    }
};
