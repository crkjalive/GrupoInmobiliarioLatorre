import { data } from './data.js';

let search = document.getElementById('search');
const ids = document.getElementById('apartamentos');


const insertando = (arg) => {
    let contador = 0;

    for (let i = 0; i < data.length; i++) {

        if (data[i].clase == arg) {
            let elementoContenedor = document.createElement('div');
            let div0 = document.createElement('div');
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');
            let div4 = document.createElement('div');
            elementoContenedor.className = "contenedorSearch";
            elementoContenedor.textContent = 'Donde esta'
            div0.className = "parrafo0";
            div1.className = "parrafo1";
            div2.className = "parrafo2";
            div3.className = "parrafo3";
            div4.className = "parrafo4";

            div0.textContent = `# ${contador + 1}`;
            div1.textContent = `${data[i].clase}`;
            div2.textContent = `${data[i].descripcion}`;
            div3.textContent = `${data[i].item}`;
            div4.textContent = `${data[i].zona}`;
            search.appendChild(elementoContenedor);
            contador++;
            console.log(elementoContenedor);        }
    }
};
insertando(ids);