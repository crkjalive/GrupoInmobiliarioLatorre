import { data } from "./data.js";
const whatsapp = "https://api.whatsapp.com/send?phone=573192205259/"
let contador = 0;

    const data_table = document.querySelector('#data_table');
    data_table.className = 'data_table';

const data_x = () => {
    for (let i = 0; i < data.length; i++) {
        if (contador <= data.length) {
            let data_article = document.createElement('div');
            let item0 = document.createElement('div');
            let item1 = document.createElement('div');
            let item2 = document.createElement('div');
            let item3 = document.createElement('div');
            let item4 = document.createElement('div');
            let item5 = document.createElement('div');
            let item6 = document.createElement('div');
            let item7 = document.createElement('a');
            data_article.className = 'data_article';
            item0.className = 'item0';
            item1.className = 'item1';
            item2.className = 'item2';
            item3.className = 'item3';
            item4.className = 'item4';
            item5.className = 'item5';
            item6.className = 'item6';
            item7.style.padding = ".5em"
            item7.style.fontSize = "1.5em"
            if (data[i].link == "") {
                item7.textContent = " "
                item7.className = 'item7 icon-whatsapp';
                item7.href = whatsapp
                item7.target = "_blank"
            } else {
                item7.href = `${data[i].link}`;
                item7.target = "_blank"
                item7.style.color = "#1A73E8"
                item7.style.fontSize = "1.5em"
                item7.textContent = ""
                item7.className = 'item7 icon-image';
            }
            item0.textContent += `# ${i + 1} `;
            item1.textContent += `${data[i].item} `;
            item2.textContent += `${data[i].matricula} `;
            item3.textContent += `${data[i].zona} `;
            item4.textContent += `${data[i].clase} `;
            item5.textContent += `${data[i].descripcion} `;
            item6.textContent += `${data[i].ciudad} `;
            data_table.appendChild(data_article).append(item0, item1, item2, item3, item4, item7, item5, item6);

        }
    }
}
data_x();


const titles_table = () => {
    const titles_arr = ['item','matricula','zona','clase','descripcion','ciudad'];
    const titles_container = document.getElementById('titles_container');
    let titles_data = document.createElement('div');
    titles_data.className = 'titles_data';
    let a = document.createElement('div')
    let b = document.createElement('div')
    let c = document.createElement('div')
    let d = document.createElement('div')
    let e = document.createElement('div')
    let f = document.createElement('div')
    a.textContent = titles_arr[0];
    b.textContent = titles_arr[1];
    c.textContent = titles_arr[2];
    d.textContent = titles_arr[3];
    e.textContent = titles_arr[4];
    f.textContent = titles_arr[5];

    titles_container.appendChild(titles_data).append(a,b,c,d,e,f);
}

titles_table();

