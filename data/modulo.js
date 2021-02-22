import { data } from "./data.js";
let contador = 0;
const contenedor = document.querySelector('#data');
contenedor.className = 'data-container';
for (let i = 0; i < data.length; i++){
    if (contador <= data.length){

        let items0 = document.createElement('spam');
        let items1 = document.createElement('spam');
        let items2 = document.createElement('spam');
        let items3 = document.createElement('spam');
        let items4 = document.createElement('spam');
        let items5 = document.createElement('spam');
        let items6 = document.createElement('spam');
        let cont = document.createElement('div');
        cont.className = 'cont';
        items0.className = 'items0';
        items1.className = 'items1';
        items2.className = 'items2';
        items3.className = 'items3';
        items4.className = 'items4';
        items5.className = 'items5';
        items6.className = 'items6';
        items0.textContent += `# ${i+1} `;
        items1.textContent += `${data[i].item} `;
        items2.textContent += `${data[i].matricula} `;
        items3.textContent += `${data[i].zona} `;
        items4.textContent += `${data[i].clase} `;
        items5.textContent += `${data[i].descripcion} `;
        items6.textContent += `${data[i].ciudad} `;
        
        contenedor.appendChild(cont).append(items0,items1,items2,items3,items4,items5,items6);

    }
}

