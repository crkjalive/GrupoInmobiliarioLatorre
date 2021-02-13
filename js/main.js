const items = [
	{	
		id:0,
		image: "./img/imagenDemo.jpg",
		title:"Apartamento Modelia",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "$ 80.000.000"
	},
	{	
		id:1,
		image: "./img/imagenDemo.jpg",
		title:"Apartamento Modelia",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "$ 80.000.000"
	},
	{	
		id:2,
		image: "./img/imagenDemo.jpg",
		title:"Apartamento Modelia",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "$ 80.000.000"
	},
	{	
		id:3,
		image: "./img/imagenDemo.jpg",
		title:"Apartamento Modelia",
		description:"3 alcoba 2 baños sala comedor cocina y cuarto de ropas",
		add: "parqueadero cubierto",
		price: "$ 80.000.000"
	},
];

let dataBase = items;

let section = document.getElementById("section_container")

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
			<article class="item_home">
				<div class="item_container">
					<a href= "${robin.image}" target="_blank">
						<img class="item_imagen" src="${robin.image}" alt="${robin.title}">
					</a>
				</div>
				<div class="item_text_content">
					<h2 class="item_title">${robin.title}</h2>
					<h3 class="item_description">${robin.description}</h3>
					<h3 class="item_add">${robin.add}</h3>
					<h3 class="item_price">${robin.price}</h3>
				</div>
			</article>
		`;
		counter++
		send();
		}
}
send();