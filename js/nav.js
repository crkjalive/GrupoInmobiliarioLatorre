const data_menu1 = ["apartamentos",'casas','bodegas'];
const data_menu2 = ['garajes', 'depositos', 'locales'];
const data_redes = ['whatsapp','facebook','instagram'];

let ul_container1 = document.getElementById('ul_container1');
let ul_container2 = document.getElementById('ul_container2');

const numero = "3192205259";

const menu_create = (contenedor,array) => {
    let data_item;
    for (let i = 0; i < array.length; i++){
        let a = document.createElement('a');
        a.className = 'a_li';
        a.href = `${array[i].toLowerCase()}.html`;
        let li = document.createElement('li');
        li.className = 'li_item';
        data_item = array[i];
        li.appendChild(document.createTextNode(data_item));
        contenedor.appendChild(a).appendChild(li);
    }
}
menu_create(ul_container1,data_menu1);
menu_create(ul_container2,data_menu2);

const logo_create = () => {
    let a = document.createElement('a');
    a.className = 'a_img';
    a.href = `index.html`;
    let img = document.createElement('img');
    img.className = 'logo';
    img.src = './img/gil.png';
    img.alt = 'Grupo Inmobiliario Latorre';
    document.getElementById('logo_container').appendChild(a).appendChild(img)
}
logo_create();

const sociales_create = () => {
    const redes_sociales = document.getElementById('redes_sociales');
    const a = document.createElement('a');
    const b = document.createElement('a');
    const c = document.createElement('a');
    a.target = '_blank';
    b.target = '_blank';
    c.target = '_blank';
    let whatsapp = a;
    let facebook = b;
    let instagram = c;
    whatsapp.className = " link_icon icon-whatsapp"
    facebook.className = " link_icon icon-facebook"
    instagram.className = " link_icon icon-instagram"
    whatsapp.href = `https://api.whatsapp.com/send?phone=57${numero}/`;
    facebook.href = `https://wwwgoogle.com/`;
    instagram.href = `https://youtube.com/`;
    redes_sociales.append(whatsapp, facebook, instagram);
}
sociales_create();

const footer_create = () => {
    const footer_container = document.getElementById('footer_container');
    const gil = document.createElement('div');
    gil.className = 'gil';
    gil.textContent = 'Grupo Inmobiliario Latorre © Todos los derechos reservados 2020 ';
    footer_container.append(gil);
}
footer_create();
