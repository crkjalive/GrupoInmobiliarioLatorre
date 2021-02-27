const items = [
	{	
		id:0,
		image:"./venta/casa1.jpg",
		title:"<strong>Venta Casa</strong> <br> Barrio: San Jorge 162mts²",
		description:"Casa de 6mts x 27mts <br> <strong>Primer Piso:</strong> 3 alcobas Sala Comedor Cocina, Baño, Patio y Garaje",
		add: "<strong>Segundo piso:</strong> 4 alcobas, sala comedor, cocina, baño y terraza cubierta.",
		price: "<b>Negociables</b> $ 420.000.000"
	},
	{	
		id:1,
		image: "./img/imagenDemo_2.jpg",
		title:"Apartamento Modelo",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "<b>Negociables</b> $ 80.000.000"
	},
	{	
		id:2,
		image: "./img/imagenDemo_2.jpg",
		title:"Apartamento Modelo",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "<b>Negociables</b> $ 80.000.000"
	},
	{	
		id:3,
		image: "./img/imagenDemo_2.jpg",
		title:"Apartamento Modelo",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "<b>Negociables</b> $ 80.000.000"
	},
	{	
		id:2,
		image: "./img/imagenDemo_2.jpg",
		title:"Apartamento Modelo",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "<b>Negociables</b> $ 80.000.000"
	},
	{	
		id:3,
		image: "./img/imagenDemo_2.jpg",
		title:"Apartamento Modelo",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "<b>Negociables</b> $ 80.000.000"
	},
];

let dataBase = items;

let section = document.getElementById("section_articulos")

class Batman {
	constructor(title, image, description,add,price) {
		this.title = `${title}`;
		this.image = `${image}`;
		this.description = `${description}`;
		this.add = `${add}`;
		this.price = `${price}`;
	}
}

let counter = 0;

const send = () => {
	if (counter < dataBase.length) {
		// console.log(counter, dataBase.length)
		const robin = new Batman(`${dataBase[counter].title}`,
			`${dataBase[counter].image}`,
			`${dataBase[counter].description}`,
			`${dataBase[counter].add}`,
			`${dataBase[counter].price}`,)

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
					<p class="item_price">${robin.price}</p>
					<div class="dibujo"></div>
					<div class="dibujo2"></div>
				</div>
			</article>
		`;
		counter++
		send();
		}
}
send();