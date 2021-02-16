const list_1 = document.querySelector('#list_1');

const a = document.createElement('a')
a.href = 'index.html'
a.style.color = "red"
const li = document.createElement('li')
const texto = document.createTextNode("ClubHouse")
li.append(texto)
a.append(li)
list_1.append(a)

{/* <a href="casas.html"><li class="pin">Casas</li></a> */}
/* <a href="index.html"></a><li class="pin">Apartamentos</li></a>
<a href="fincas.html"></a><li class="pin">Fincas</li></a> */

// console.log(arr)
