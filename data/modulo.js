import { data } from "./data.js";
const whatsapp = "https://api.whatsapp.com/send?phone=573192205259/"

let contador = 0;

const data_table = document.querySelector('#data_table');

const titles_table = () => {
    const titles_arr = ['No.','item','matricula','zona','clase','link','descripcion','ciudad'];
    const titles_container = document.getElementById('titles_container');
    let a = document.createElement('div');
    a.className = 'div_title';
    let b = document.createElement('div');
    b.className = 'div_title';
    let c = document.createElement('div');
    c.className = 'div_title';
    let d = document.createElement('div');
    d.className = 'div_title';
    let e = document.createElement('div');
    e.className = 'div_title';
    let f = document.createElement('div');
    f.className = 'div_title';
    let g = document.createElement('div');
    g.className = 'div_title';
    let h = document.createElement('div');
    h.className = 'div_title';
    a.textContent = titles_arr[0];
    b.textContent = titles_arr[1];
    c.textContent = titles_arr[2];
    d.textContent = titles_arr[3];
    e.textContent = titles_arr[4];
    f.textContent = titles_arr[5];
    g.textContent = titles_arr[6];
    h.textContent = titles_arr[7];

    titles_container.append(a,b,c,d,e,f,g,h);
}

titles_table();

const data_x = () => {
    for (let i = 0; i < data.length; i++) {
        if (contador <= data.length) {
            
            const container_data = document.createElement('div');
            let item0 = document.createElement('div');
            let item1 = document.createElement('div');
            let item2 = document.createElement('div');
            let item3 = document.createElement('div');
            let item4 = document.createElement('div');
            let item5 = document.createElement('div');
            let item6 = document.createElement('div');
            let item7 = document.createElement('a');
            item0.className = 'div_title';
            item1.className = 'div_title';
            item2.className = 'div_title';
            item3.className = 'div_title';
            item4.className = 'div_title';
            item5.className = 'div_title';
            item6.className = 'div_title';
            item7.style.padding = ".5em"
            item7.style.fontSize = "1.5em"
            if (data[i].link == "") {
                item7.textContent = " "
                item7.className = 'item7 icon-whatsapp div_title';
                item7.href = whatsapp
                item7.target = "_blank"
            } else {
                item7.href = `${data[i].link}`;
                item7.target = "_blank"
                item7.style.color = "#1A73E8"
                item7.style.fontSize = "1.5em"
                item7.textContent = ""
                item7.className = 'item7 icon-image div_title';
            }
            item0.textContent += `# ${i + 1} `;
            item1.textContent += `${data[i].item} `;
            item2.textContent += `${data[i].matricula} `;
            item3.textContent += `${data[i].zona} `;
            item4.textContent += `${data[i].clase} `;
            item5.textContent += `${data[i].descripcion} `;
            item6.textContent += `${data[i].ciudad} `;

            data_table.append(item0, item1, item2, item3, item4, item7, item5, item6);

        }
    }
}
data_x();



