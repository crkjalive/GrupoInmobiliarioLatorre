const items = [
  {
    image: "./venta/sindamanoy.jpg",
    title:
      "<strong>Venta: Casa campestre </strong> <br> Sector: Sindamanoy, Chia",
    description:
      "Conjunto cerrado, <br> Area: 300 mts de casa y 1450 mts de lote <br> 5 Alcobas - Sala - Cocina - Comedor - Baños",
    add: "4 parqueaderos",
    link:
      "https://www.facebook.com/photo?fbid=142130401248407&set=pcb.142130661248381",
    price: "<b>Precio</b> $1'500.000.000",
  },
  {
    image: "./venta/res1.jpg",
    title: "<strong>Venta Edificio</strong> <br> Sector del Restrepo, Bogotá",
    description: "Bodega de 3 pisos, <br> uso comercial, con local",
    add: "464 mts²",
    link:
      "https://www.facebook.com/photo?fbid=125006099627504&set=pcb.125006222960825",
    price: "<b>Negociables</b> $1'500.000.000",
  },
  {
    image: "./venta/casa1.jpg",
    title: "<strong>Venta Casa</strong> <br> Barrio: San Jorge ",
    description:
      "Casa 162mts² <br> <strong>Primer Piso:</strong> 3 alcobas Sala Comedor Cocina, Baño, Patio y Garaje",
    add:
      "<strong>Segundo piso:</strong> 4 habitaciones, sala comedor, cocina, baño y terraza cubierta.",
    link:
      "https://www.facebook.com/photo?fbid=124990429629071&set=pcb.124990152962432",
    price: "<b>Negociables</b> $420.000.000",
  },
  {
    image: "./venta/lote1.jpg",
    title: "<strong>Venta Lote</strong> <br> Sector de Suba, Bogotá",
    description:
      "Se vende lote en Suba <br> Area de 20.000 metros <br> Estrato 3 para hacer vivienda",
    add: "Venta Directa",
    link:
      "https://www.facebook.com/photo?fbid=124989882962459&set=pcb.124989949629119",
    price: "<b>Negociables</b> $9'500.000.000",
  },
  {
    image: "./venta/bodega1.jpg",
    title: "<strong>Venta Bodega</strong> <br> Sector de Alamos, Bogotá",
    description: "Bodega Aeropuerto Alamos <br> Area de Terreno 2.200 metros",
    add: "",
    link:
      "https://www.facebook.com/photo/?fbid=124979689630145&set=pcb.124979826296798",
    price: "<b>Negociables</b> $2'200.000.000",
  },
  {
    image: "./venta/bodegaFontibon.jpg",
    title: "<strong>Venta Bodega</strong> <br> Sector de Fontibon, Bogotá",
    description: "Fontibon Zona Industrial, mt² a 2 millones",
    add: "28.000 mts² de lote <br> 16.000 mts² de Construcción",
    link:
      "https://www.facebook.com/photo?fbid=124994629628651&set=pcb.124996576295123",
    price: "<b>Negociables</b> $28.000.000.000",
  },
  {
    image: "./venta/parqueadero1.jpg",
    title:
      "<strong>Venta Parqueadero</strong> <br> Sector del Restrepo, Bogotá",
    description: "8 mts de frente por 28 mts de fondo <br> ",
    add: "Parqueadero rentable 224 mts²",
    link:
      "https://www.facebook.com/photo?fbid=125010012960446&set=a.124979822963465",
    price: "<b>Negociables</b> $1'000.000.000",
  },
  {
    image: "./venta/spa1.jpg",
    title: "<strong>Venta Spa</strong> <br> Sector del Castilla, Bogotá",
    description: "3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
    add: "parqueadero cubierto",
    link:
      "https://www.facebook.com/photo?fbid=125011449626969&set=pcb.125011846293596",
    price: "<b>Precio</b> pendiente",
  },
];

// casa campestre
// sector sindamanoy
// conjunto cerrado de casas verona
// area de 300 mts de la casa
// lote de 1450

// 5 alcobas 4 parqueaderos baños sala cocina

// 3 aptos

// finca en puerto lopez 4600 hectareas
// con 300 cabezas de ganado sebu
// 5' por hectarea '
// + 700 hectareas sin titular sin escrituras

// finca en ocaña norte de santander
// 55 hectareas
// documentos al dia
// 150.000.000

let dataBase = items;

let section = document.getElementById("section_articulos");

const indexardo = () => {
  class Batman {
    constructor(title, image, description, add, link, price) {
      this.title = `${title}`;
      this.image = `${image}`;
      this.description = `${description}`;
      this.add = `${add}`;
      this.link = `${link}`;
      this.price = `${price}`;
    }
  }

  let counter = 0;

  const send = () => {
    if (counter < dataBase.length) {
      // console.log(counter, dataBase.length)
      const robin = new Batman(
        `${dataBase[counter].title}`,
        `${dataBase[counter].image}`,
        `${dataBase[counter].description}`,
        `${dataBase[counter].add}`,
        `${dataBase[counter].link}`,
        `${dataBase[counter].price}`
      );

      section.innerHTML += `
			<article class="article_container">
				<div class="article_image">
					<a href= "${robin.image}" target="_blank">
						<img class="article_img" src="${robin.image}" alt="${robin.title}">
					</a>
				</div>
				<div class="items">
					<h3 class="item_title">${robin.title}</h3>
					<p class="item_description">${robin.description}</p>
					<p class="item_add">${robin.add}</p>
					<a href="${robin.link}" class="item_link icon-facebook" target="_blank"> Más fotos</a>
					<div class="dibujo"></div>
					<div class="dibujo2"></div>
					</div>
					</article>
					`;
      counter++;
      send();
    }
  };
  send();
};
indexardo();

// <p class="item_price">${robin.price}</p>
