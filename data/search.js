// alert('fn')

import { data } from './data.js';

window.load = () => {

    const busqueda = () => {

        const search = document.getElementById('search');
        search.className = "search_table";

        const id_page = document.querySelector('body');
        // id_page.className = 'id_page';

        let id_page_text = id_page.title;
        // console.log(id_page_text)

        let conteo = 0;

        const total = document.createElement('div');
        
        for (let i = 0; i < data.length; i++) {
            
            if (data[i].clase == id_page_text) {
                
                let item_item = document.createElement('div');
                item_item.className = 'item_item';

                let item_conteo = document.createElement('div');
                item_conteo.className = 'item_conteo';
                item_conteo.textContent += `Post-it: ${conteo + 1}`

                let item_dataLink = document.createElement('a');
                if (data[i].link) {
                    item_dataLink.className = 'item_dataLink icon-mobile';
                    item_dataLink.href += `${data[i].link}`;
                    item_dataLink.textContent += ` Google Maps`;
                    item_dataLink.target += '_blank';
                    item_dataLink.style.color = "#FD971F";
                }

                let item_dataItem = document.createElement('div');
                item_dataItem.className = 'item_dataItem';
                item_dataItem.textContent += `ID: ${data[i].item}`

                let item_dataMatricula = document.createElement('div');
                item_dataMatricula.className = "item_dataMatricula";
                item_dataMatricula.textContent += `Matricula: ${data[i].matricula.toLowerCase()}`

                let item_dataZona = document.createElement('div');
                item_dataZona.className = "item_dataZona";
                item_dataZona.textContent += `Zona: ${data[i].zona.toLowerCase()}`

                let item_dataClase = document.createElement('div');
                item_dataClase.className = "item_dataClase";
                item_dataClase.textContent += `Tipo: ${data[i].clase.toLowerCase()}`

                let item_dataDesc = document.createElement('div');
                item_dataDesc.className = "item_dataDesc";
                item_dataDesc.textContent += `Ubicación: ${data[i].descripcion.toLowerCase()}`

                let item_dataCity = document.createElement('div');
                item_dataCity.className = "item_dataCity";
                item_dataCity.textContent += `Ciudad: ${data[i].ciudad.toLowerCase()}`

                total.className="search_total";
                total.textContent = `Post-It: `

                search.appendChild(item_item)
                .append(
                    item_dataLink,
                    item_conteo,
                    item_dataItem,
                    item_dataZona,
                    item_dataClase,
                    item_dataDesc,
                    item_dataCity,
                    );
                search.appendChild(total);
                    
                // console.log(conteo+1, data[i].item, data[i].zona, data[i].clase, id_page.textContent);
                conteo++;
            }
        }
        total.textContent += conteo;
    }
    busqueda();
}
window.load();