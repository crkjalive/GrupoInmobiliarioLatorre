const data_menu1 = ["apartamentos", 'casas', 'bodegas'];
const data_menu2 = ['garajes', 'depositos', 'locales', 'oficinas'];
const data_redes = ['whatsapp', 'facebook', 'instagram', 'Google'];

let ul_container1 = document.getElementById('ul_container1');
let ul_container2 = document.getElementById('ul_container2');

const numero1 = "3153125559";
const numero3 = "3192205259";
const numero2 = "3192205260";


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
    whatsapp.className = "";
    whatsapp.innerHTML = "<img class='whastapp' src='./img/Whatsapp1.svg '/> "
    whatsapp.target = '_blank';
    whatsapp.href = `https://api.whatsapp.com/send?phone=57${numero1}/`;

    const whatsapp2 = document.createElement('a');
    whatsapp2.className = "";
    whatsapp2.innerHTML = "<img class='whastapp' src='./img/Whatsapp2.svg '/> "
    whatsapp2.target = '_blank';
    whatsapp2.href = `https://api.whatsapp.com/send?phone=57${numero2}/`;

    const whatsapp3 = document.createElement('a');
    whatsapp3.className = "";
    whatsapp3.innerHTML = "<img class='whastapp' src='./img/Whatsapp3.svg '/> "
    whatsapp3.target = '_blank';
    whatsapp3.href = `https://api.whatsapp.com/send?phone=57${numero3}/`;

    const facebook = document.createElement('a');
    facebook.className = "";
    facebook.innerHTML = "<img class='facebook' src='./img/Facebook.svg'/> "
    facebook.target = '_blank';
    facebook.href = `https://www.facebook.com/grupoinmobiliario.latorre.7/`;

    const googleMaps = document.createElement('a');
    googleMaps.className = ""
    googleMaps.innerHTML = "<img class='maps' src='./img/GoogleMap.svg'/> "
    googleMaps.target = '_blank';
    googleMaps.href = `https://www.google.com/maps/`;

    redes_sociales
        .append(
            googleMaps,
            facebook,
            whatsapp,
            whatsapp2,
            whatsapp3,
        );
}
sociales_create();


const footer_create = () => {
    const footer_container = document.getElementById('footer_container');

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'Grupo Inmobiliario Latorre'.toUpperCase();
    
    const derechos = document.createElement('div');
    derechos.className = 'derechos';
    derechos.textContent = '© Todos los derechos reservados 2020 ';
    
    const correo = document.createElement('div');
    correo.className = 'correo';
    correo.innerHTML = "<p>grupoinmobiliariolatorre@gmail.com</p>";

    const contacto = document.createElement('div');
    contacto.className = 'contacto';
    contacto.innerHTML = "<p><span class='icon-whatsapp'> 3153125559 </span><span class='icon-whatsapp '> 3192205259 </span><span class='icon-whatsapp'> 3192205260 </span></p>";

    footer_container.append(
        title,
        contacto,
        correo,
        derechos,
    );
}
footer_create();