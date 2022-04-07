const generarCardsHTML=(array) =>{
    let acumulador = " ";

    array.forEach((elemento) =>{
        acumulador+= 
        `
        <div>${elemento.name}</div>
        <hr>`;
    })
    document.getElementById("contenido").innerHTML = acumulador;
};

let limit = 20;
const API_URL = "https://pokeapi.co/api/v2/";
const ENDPOINT_LISTADO_POKEMON = "pokemon";


const PARAM_LISTADO_POKEMON ="?offset=0&limit=20";

setTimeout(() =>{
    fetch(API_URL + ENDPOINT_LISTADO_POKEMON + PARAM_LISTADO_POKEMON)
    .then((response)=>response.json())
    .then((data)=> generarCardsHTML(data.results)); //response sería la parte del objeto donde está la info
},3000)

// EJEMPLO PARA ARRAY PROPIO
// setTimeout(() =>{
//     fetch("/data.json")
//     .then((response)=>response.json())
//     .then((data)=> generarCardsHTML(data)); //response sería la parte del objeto donde está la info
// },3000)


// Ejemplo para login
// otro endpoint
const ENDOPOINT_LOGIN_POKEMON =`login`;

const logearAlUsuario = ()=>{
    fetch(API_URL+ENDOPOINT_LOGIN_POKEMON,{
        method: "POST",
        body: JSON.stringify({
            email: 'asd@gmail.com',
            password : "1234",
        }),
        headers:{
            "Content-type": "application/json"
        },
    })
    .then((response)=> response.JSON())
    .then((data) => console.log(data))
}