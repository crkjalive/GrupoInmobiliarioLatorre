const objects = [
    {
        image: "<img src='./img/imagenDemo.jpg'>",
        description: "Grupo Inmobiliario Latorre <br> Empresa conformada desde hace más de 15 años <br> Asesorando a nuestros clientes para que hagan <br> el mejor negocio de su vida ",
    },
    {
        image: "<img src='./img/h2.png'>",
        description: "Grupo Inmobiliario Latorre <br> Empresa conformada desde hace más de 16 años <br> Asesorando a nuestros clientes para que hagan <br> el mejor negocio de su vida ",
    },
    // {
    //     image: "<img src='./img/imagenDemo.jpg'>",
    //     description: "",
    // },
    // {
    //     image: "<img src='./img/imagenDemo.jpg'>",
    //     description: "",
    // },
];


const message = document.getElementById("section_dinamico");

class Batman {
    constructor(image, description) {
        this.image = `<div>${image}</div>`;
        this.description = `<h1>${description}</h1>`;
    }
}

let counter = 0;

function timex() {
    if (counter != 0) {
        setTimeout(() => {
            send();
        }, 2000)
    } else {
        setTimeout(() => {
            send();
        }, 0)
    }
}

function send() {
    if (counter < objects.length) {
        const robin = new Batman(`${objects[counter].image}`,
            `${objects[counter].description}`)

        message.innerHTML = `
        ${robin.image}
        ${robin.description}
		`;

        counter++
        timex();
        console.log(robin, counter)
    } else {
        counter = 0;
        // console.log(counter)
        timex();
    }
}
send();