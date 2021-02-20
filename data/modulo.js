import { data } from "./data.js";
let contador = 0;
const contenedor = document.querySelector('#data');
for (let i = 0; i < data.length; i++){
    if (contador <= data.length){

        let items1 = document.createElement('spam');
        let items2 = document.createElement('spam');
        let items3 = document.createElement('spam');
        let items4 = document.createElement('spam');
        let items5 = document.createElement('spam');
        items1.textContent += `item ${data[i].item} `;
        items2.textContent += `description ${data[i].matricula} `;
        items3.textContent += `zona ${data[i].zona} `;
        items4.textContent += `descripcion ${data[i].descripcion} `;
        items5.textContent += `Ciudad ${data[i].ciudad} `;
        
        contenedor.append(items1,items2,items3,items4,items5);

    }
}

