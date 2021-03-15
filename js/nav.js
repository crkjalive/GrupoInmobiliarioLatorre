const data_menu1 = ["apartamentos", 'casas', 'bodegas'];
const data_menu2 = ['garajes', 'depositos', 'locales', 'oficinas'];
const data_redes = ['whatsapp', 'facebook', 'instagram', 'Google'];

let ul_container1 = document.getElementById('ul_container1');
let ul_container2 = document.getElementById('ul_container2');

const numero = "3192205259";


const menu_create = (contenedor, array) => {
    let data_item;
    for (let i = 0; i < array.length; i++) {
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
menu_create(ul_container1, data_menu1);
menu_create(ul_container2, data_menu2);


const logo_create = () => {
    let a = document.createElement('a');
    a.className = 'a_img';
    a.href = `index.html`;
    let img = document.createElement('img');
    img.className = 'logo';
    img.src = './img/gil.jpg';
    img.alt = 'Grupo Inmobiliario Latorre';
    document.getElementById('logo_container').appendChild(a).appendChild(img)
}
logo_create();


const sociales_create = () => {
    const redes_sociales = document.getElementById('redes_sociales');

    const whatsapp = document.createElement('a');
    whatsapp.className = " link_icon icon-whatsapp";
    whatsapp.target = '_blank';
    whatsapp.href = `https://api.whatsapp.com/send?phone=57${numero}/`;

    const facebook = document.createElement('a');
    facebook.className = " link_icon icon-facebook";
    facebook.target = '_blank';
    facebook.href = `https://www.facebook.com/grupoinmobiliario.latorre.7/`;

    const googleMaps = document.createElement('a');
    googleMaps.className = " link_icon"
    googleMaps.innerHTML = "<img class='maps' src='./img/GoogleMaps.svg'/> "
    googleMaps.target = '_blank';
    googleMaps.href = `https://www.google.com/maps/`;
    googleMaps.alt = `google.com maps`;

    redes_sociales
        .append(
            googleMaps,
            whatsapp,
            facebook,
        );
}
sociales_create();


const footer_create = () => {
    const footer_container = document.getElementById('footer_container');

    const gil = document.createElement('div');
    gil.className = 'gil';
    gil.textContent = 'Grupo Inmobiliario Latorre'.toUpperCase();
    gil.style.fontSize = "1.2em"
    gil.style.color = "#272822"
    
    const gil2 = document.createElement('div');
    gil2.className = 'gil2';
    gil2.style.fontSize = ".9em"
    gil2.textContent = '© Todos los derechos reservados 2020 ';
    
    const gil3 = document.createElement('div');
    gil3.className = 'gil3';
    gil3.style.color = "#272822"
    gil3.innerHTML = "<p><span class='icon-bubbles'> grupoinmobiliariolatorre@gmail.com <span class='icon-whatsapp '> 3192205259 <span><span class='icon-whatsapp'> 3192205260</span></p>";

    footer_container.append(
        gil,
        gil3,
        gil2,
    );
}
footer_create();