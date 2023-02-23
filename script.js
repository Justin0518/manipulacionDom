const h1= document.querySelector("h1");
/*const p= document.querySelector("p");
const parrafito= document.querySelector(".parrafito");
const pid= document.getElementById("pid");*/
const input1= document.querySelector("#calculo1");
const input2= document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular")
const result = document.querySelector("#result")
const form = document.querySelector("#form")


form.addEventListener("click", formOnClick)

function formOnClick(event){
    event.preventDefault() //cancela el evento del submit(que es recarga rla pagina)
    const suma= Number(input1.value) + Number(input2.value)
    result.innerText="Resultado: "+ suma
    
}





/*console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerText = "Justin lo mejor <br> papasito" //insertar codigo html
h1.innerHTML = "Justin lo mejor <br> papasito" //insertar texto
//console.log(h1.setAttribute("class","rojo")) //asignar atributo

h1.classList.add("Rojo") //agregar atributo de clase
h1.classList.remove("verde") //quitar atributo de clase
h1.classList.toggle("verde") // poner y quitar atributos
h1.classList.contains("verde") //nos devuelve true o false si está la clase o no


input.value ="456"//cambiar el valor

const img=document.createElement("img") //para crear

img.setAttribute("src","https://cdnb.20m.es/sites/76/2019/10/De-d%C3%B3nde-surge-decir-que-algo-f%C3%A1cil-de-conseguir-est%C3%A1-%E2%80%98a-huevo%E2%80%99.jpg")

pid.innerHTML=""
pid.append(img) //insertando una imagen dentro de un contenedor que ya existia*/

