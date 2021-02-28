// alert('fn')
import { data } from './data.js';

// let contador = 0;
const search = document.getElementById('search');
search.className = "search_table";

const id_page = document.getElementById('id_page_name');
id_page.className = 'id_page';

let id_page_text = id_page.textContent;
// console.log(id_page_text)

let conteo=0;
for (let i = 0; i < data.length; i++){

    if (data[i].clase == id_page_text){

        let item_item = document.createElement('div');
        item_item.className = 'item_item';
        
        let item_dataItem = document.createElement('div');
        item_dataItem.className = 'item_dataItem icon-image';
        item_dataItem.textContent += `${data[i].item}`

        let item_dataMatricula = document.createElement('div');
        item_dataMatricula.textContent += `${data[i].matricula.toLowerCase()}`

        let item_dataZona = document.createElement('div');
        item_dataZona.textContent += `${data[i].zona.toLowerCase()}`

        let item_dataClase = document.createElement('div');
        item_dataClase.textContent += `${data[i].clase.toLowerCase()}`

        let item_dataDesc = document.createElement('div');
        item_dataDesc.textContent += `${data[i].descripcion.toLowerCase()}`
        
        let item_dataCity = document.createElement('div');
        item_dataCity.textContent += `${data[i].ciudad.toLowerCase()}`

        search.appendChild(item_item).append(item_dataItem, item_dataMatricula, item_dataZona,item_dataClase, item_dataDesc, item_dataCity);

        // console.log(conteo+1, data[i].item, data[i].zona, data[i].clase, id_page.textContent);
        conteo++;
    }
}
