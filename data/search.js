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
                }

                let item_dataItem = document.createElement('div');
                item_dataItem.className = 'item_dataItem';
                item_dataItem.textContent += `ID: ${data[i].item}`

                let item_dataMatricula = document.createElement('div');
                item_dataMatricula.className = "item_dataMatricula";
                item_dataMatricula.textContent += `Matricula: ${data[i].matricula.toLowerCase()}`

                let item_dataZona = document.createElement('div');
                item_dataZona.className = "item_dataZona";
                item_dataZona.textContent += `${data[i].zona.toLowerCase()}`
                if (item_dataZona.textContent == 'sur') {
                    item_dataZona.style.backgroundColor = "rgba(26, 115, 236,.9)";
                    item_dataZona.style.width = "15%";
                    item_dataZona.style.textAlign = "center";
                    item_dataZona.style.padding = ".5em";
                    item_dataZona.style.color = "white";
                    item_dataZona.style.borderRadius = "4px";
                } else if (item_dataZona.textContent == 'norte') {
                    item_dataZona.style.backgroundColor = "rgba(234, 67, 53, .9)";
                    item_dataZona.style.width = "15%";
                    item_dataZona.style.borderRadius = "4px";
                    item_dataZona.style.padding = ".5em";
                    item_dataZona.style.textAlign = "center";
                    item_dataZona.style.color = "white";
                } else if (item_dataZona.textContent == 'central') {
                    item_dataZona.style.backgroundColor = "rgba(166, 226, 46, .9)";
                    item_dataZona.style.width = "15%";
                    item_dataZona.style.borderRadius = "4px";
                    item_dataZona.style.padding = ".5em";
                    item_dataZona.style.textAlign = "center";
                    item_dataZona.style.color = "black";
                }

                let item_dataClase = document.createElement('div');
                item_dataClase.className = "item_dataClase";
                item_dataClase.style.borderBottom = "1px solid #f0f0f0";
                item_dataClase.style.marginBottom = "5px";
                item_dataClase.textContent += `${data[i].clase.toLowerCase()}`

                let item_dataDesc = document.createElement('div');
                item_dataDesc.className = "item_dataDesc";
                item_dataDesc.textContent += `Dirección: ${data[i].descripcion.toLowerCase()}`

                let item_dataCity = document.createElement('div');
                item_dataCity.className = "item_dataCity";
                item_dataCity.textContent += `${data[i].ciudad.toLowerCase()}`
                item_dataCity.style.textTransform = "capitalize";

                total.className="search_total";
                total.textContent = `Post-It: `

                search.appendChild(item_item)
                .append(
                    item_dataLink,
                    item_dataClase,
                    item_dataDesc,
                    item_dataCity,
                    item_dataItem,
                    item_conteo,
                    item_dataZona,
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