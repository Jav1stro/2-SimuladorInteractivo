// const jugadoresDelEquipo = validarjugadoresDelEquipoStorage();

// function validarjugadoresDelEquipoStorage(){
//     if(localStorage.getItem("JugadoresDelEquipo") !== null){
//         const jugadoresDelEquipoStorage = JSON.parse(localStorage.getItem("JugadoresDelEquipo"));
        
//         return jugadoresDelEquipoStorage;
//     }else{
//         return [];
//     }
// }
const jugadoresDelEquipo=[];
// CLASE JUGADOR
class Jugador{

    constructor(nombre, precio,posicion,imagen){
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.posicion = posicion;
        
        this.imagen = imagen;
    }
    agregarJgAlEquipo(){
        let boxJugador = document.getElementById(`${this.nombre}`);
        boxJugador.classList.add("boxAgregado");
    }
    sacarJgDelEquipo(){
        let boxJugador = document.getElementById(`${this.nombre}`);
        boxJugador.classList.remove("boxAgregado");
    }
}
//JUGADORES CREADOS
const jg1= new Jugador('Buffon',300,'arquero','imgs/jugadores/buffon.jpg');
const jg2= new Jugador('Casillas',250,'arquero','imgs/jugadores/casillas.jpg');
const jg3= new Jugador('Martinez',270,'arquero','imgs/jugadores/martinez.jpg');
const jg4= new Jugador('Gatti',200,'arquero','imgs/jugadores/gatti.jpg');
const jg5= new Jugador('Abbondanzieri',250,'arquero','imgs/jugadores/abbondanzieri.jpg');
const jg6= new Jugador('Romero',100,'arquero','imgs/jugadores/romero.jpg');
const jg7= new Jugador('Maldini',200,'defensor','imgs/jugadores/maldini.jpg');
const jg8= new Jugador('Sergio Ramos',290,'defensor','imgs/jugadores/ramos.jpg');
const jg9= new Jugador('Otamendi',140,'defensor','imgs/jugadores/otamendi.jpg');
const jg10= new Jugador('Zanetti',210,'defensor','imgs/jugadores/zanetti.jpg');
const jg11= new Jugador('Roberto Carlos',300,'defensor','imgs/jugadores/robertocarlos.jpg');
const jg12= new Jugador('Cannavaro',330,'defensor','imgs/jugadores/cannavaro.jpg');
const jg13= new Jugador('Riquelme',310,'mediocampista','imgs/jugadores/riquelme.jpg');
const jg14= new Jugador('Iniesta',250,'mediocampista','imgs/jugadores/iniesta.jpg');
const jg15= new Jugador('Maradona',Infinity,'mediocampista','imgs/jugadores/maradona.jpg');
const jg16= new Jugador('Zidane',300,'mediocampista','imgs/jugadores/zidane.jpg');
const jg17= new Jugador('Enzo Perez',150,'mediocampista','imgs/jugadores/perez.jpg');
const jg18= new Jugador('Gago',190,'mediocampista','imgs/jugadores/gago.jpg');
const jg19= new Jugador('Batistuta',240,'delantero','imgs/jugadores/batistuta.jpg');
const jg20= new Jugador('C.Ronaldo',290,'delantero','imgs/jugadores/ronaldo.jpg');
const jg21= new Jugador('Ronaldo',310,'delantero','imgs/jugadores/ronaldoN.jpg');
const jg22= new Jugador('Messi',550,'delantero','imgs/jugadores/messi.jpg');
const jg23= new Jugador('Palermo',220,'delantero','imgs/jugadores/palermo.jpg');
const jg24= new Jugador('Francescoli',200,'delantero','imgs/jugadores/francescoli.jpg');

// ARRAYS DE JUGADORESTOTALES Y JUGADORESDELEQUIPO
const jugadores = [jg1,jg2,jg3,jg4,jg5,jg6,jg7,jg8,jg9,jg10,jg11,jg12,jg13,jg14,jg15,jg16,jg17,jg18,jg19,jg20,jg21,jg22,jg23,jg24];
// const jugadoresDelEquipo = [];
const arqueros = jugadores.filter((jg)=> jg.posicion === "arquero");
const defensores = jugadores.filter((jg)=> jg.posicion === "defensor");
const mediocampistas = jugadores.filter((jg)=> jg.posicion === "mediocampista");
const delanteros = jugadores.filter((jg)=> jg.posicion === "delantero");


// acá va el código del Usuario
class Usuario{

    constructor(nombre,edad,dinero,arrayJugadores){
    this.nombre = nombre;
    this.edad = edad;
    this.dinero = dinero;
    this.arrayJugadores = arrayJugadores;
    }
    puedeAgregar(Jugador){
        return Jugador.precio<= this.dinero
    } 
}



const usuario1 = new Usuario('PEDRO',39,1500);

function mostrarDetallesUsuarioAlPrincipio(usuario){
    const nombreEquipo = document.getElementById('nombreUsuario').value;
    let nombre =document.getElementById('nombre');
    nombre.innerHTML= nombreEquipo;

    let dineroUsuario = document.getElementById('dineroUsuario');
    dineroUsuario.innerHTML = `<i class="fa fa-money fa-1x" style="color:green"></i>` +usuario.dinero;
}

mostrarDetallesUsuarioAlPrincipio(usuario1);

function mostrarCardsEnHTML(id,cards){
    const a =document.getElementById(id);
    a.innerHTML = cards;
}

// ESCRIBIR EN EL HTML LAS CARDS DE LOS JUGADORES
function generarCardsDeJugadores(array,mostrarCardsEnHTML){
    let cardsGeneradas= '';
    
    array.forEach(jg =>{
        
        cardsGeneradas += 
        
        `<div class="boxes" id="${jg.nombre}">

        <div class="box-content">
        <div class ="card-header-${jg.posicion}">
        ${jg.nombre} 
        </div>
        <div class="card-posicion">${jg.posicion.toUpperCase()}</div>
        <div class="card-precio">$${jg.precio} </div>
        
        
        <img src="${jg.imagen}" class ="imgs" alt="">
        <button class="btn btn-info"onclick="generarDetallesDeJugador('${jg.nombre}')"></button>
        
        <button onclick="agregarAlEquipo('${jg.nombre}')" class="btn btn-default btn-info""><i class="fas fa-plus"></i> </button>
        <button onclick="sacarDelEquipo('${jg.nombre}')"class="btn btn-default btn-danger"><i class="fas fa-trash"></i> </button>
        </div>
        </div>
        </div>`;
});

    mostrarCardsEnHTML("jugadores",cardsGeneradas);
}
function mostrarCardsEnHTML2(id,cards){
    const a =document.getElementById(id);
    a.innerHTML = cards;
}
function generarDetallesDeJugador(nombre,mostrarCardsEnHTML){
    let cardsGeneradas= '';
    
    const jugador = jugadores.find((jg)=> jg.nombre == nombre);

        
        cardsGeneradas += 
        
        `<div class="detalle-jugador" id="${jugador.nombre}">

        <div class="detalle-content">
        <div class ="card-header-${jugador.posicion}">
        ${jugador.nombre} 
        </div>
        <div class="card-posicion">${jugador.posicion.toUpperCase()}</div>
        <div class="card-precio">$${jugador.precio} </div>
        
        
        <img src="${jugador.imagen}" class ="imgs" alt="">
        
        <button onclick="agregarAlEquipo('${jugador.nombre}')" class="btn btn-default btn-info""><i class="fas fa-plus"></i> </button>
        <button onclick="sacarDelEquipo('${jugador.nombre}')"class="btn btn-default btn-danger"><i class="fas fa-trash"></i> </button>
        </div>
        </div>
        </div>`;


        mostrarCardsEnHTML2("aa",cardsGeneradas);
}


// 
generarCardsDeJugadores(jugadores,mostrarCardsEnHTML);

// porNOMBRE
function buscarJugador() {
    console.log("Hola!")
    const nombreJugadorBuscado = document.getElementById("texto-buscado").value.toUpperCase().trim();

    const jugadorEncontradoPorNombre = jugadores.filter((jugador) => {
        return jugador.nombre.toUpperCase().match(nombreJugadorBuscado);
    });
        generarCardsDeJugadores(jugadorEncontradoPorNombre,mostrarCardsEnHTML);
    
    if(nombreJugadorBuscado ==null){
        generarCardsDeJugadores(jugadores,mostrarCardsEnHTML);
    }
}




//Función para agregar Al equipo
function agregarAlEquipo(name){
    if(jugadoresDelEquipo.some((jg)=> jg.nombre == name)){//si ya pertenece al equipo
        const jugador = jugadores.find((jg)=> jg.nombre == name);
        jugador.agregarJgAlEquipo();

    // MUESTRA EL MODAL
        const modalContainer = document.getElementById("yaEstaEnElEquipo");
        const botonCerrar = document.getElementById("cerrarModal2");
        modalContainer.classList.add("show");
        botonCerrar.addEventListener("click",()=>{
            modalContainer.classList.remove("show");   
        })
        
    }
    else{ //si no pertenece al equipo, LO AGREGA

    const jugador = jugadores.find((jg)=> jg.nombre == name);
        
        if(usuario1.puedeAgregar(jugador)){
        //si le alcanza el dinero

        jugadoresDelEquipo.push(jugador);

            jugador.agregarJgAlEquipo();
        // CSS 
        usuario1.dinero -= jugador.precio;

        localStorage.setItem("JugadoresDelEquipo", JSON.stringify(jugadoresDelEquipo));

        

        actualizarHTML();
        Toastify({
            text: `Agregaste a ${jugador.nombre} al equipo.`,
            duration: 2000,
            gravity: 'bottom',
            position: 'left',
            style: {
                color:'black',
                background: 'linear-gradient(to right, rgb(161, 255, 148),rgba(255, 238, 0, 0.733))'
    
        }}).showToast();
    }
    // No le alcanza el dinero
    else{
        const modalContainer = document.getElementById("noTeAlcanza");
        const botonCerrar = document.getElementById("cerrarModal1");

        modalContainer.classList.add("show");
        botonCerrar.addEventListener("click",()=>{
            modalContainer.classList.remove("show");   
        })
        
    }
}
}
function sacarDelEquipo(name){
    const jugador = jugadores.find((jg)=> jg.nombre == name);
    if(jugadoresDelEquipo.includes(jugador)){
        jugadoresDelEquipo.splice(jugadoresDelEquipo.indexOf(jugador),1);
        usuario1.dinero += jugador.precio;

        // CSS
        jugador.sacarJgDelEquipo();
        
        Toastify({
            text: `Sacaste a ${jugador.nombre} al equipo.`,
            duration: 2000,
            gravity: 'bottom',
            position: 'left',
            style: {
                color:'black',
                background: 'linear-gradient(to right, rgb(161, 255, 148),rgba(255, 238, 0, 0.733))'
    
        }}).showToast();

    }
     // Editar al LOCALSTORAGE, esto es lo que da error cuando las primeras lineas de código no están conectadas
    localStorage.setItem("JugadoresDelEquipo", JSON.stringify(jugadoresDelEquipo));
    actualizarHTML();
}
function mostrarJugadoresDelEquipo(id,array){
    const jugadores =document.getElementById(id);

let cardsGeneradas= "";

    array.forEach(jg =>{
    cardsGeneradas += 
    `
    <p style="display: inline; color:black; margin:10px;">${jg.nombre} 
    </p> <i class="fa fa-caret-right" aria-hidden="true"></i>
    <img src="${jg.imagen}" width=20px height:20px>
    `
    });
    
    jugadores.innerHTML = cardsGeneradas;
}
function actualizarHTML(){
// ACTUALIZAR HTML

    //Escribir en el HTML datos del usuario1
    let dineroUsuario = document.getElementById("dineroUsuario");
    dineroUsuario.innerHTML = `<i class="fa fa-money fa-1x" style="color:green"></i> ` +usuario1.dinero;

    //Escribir en HTML cantidad de jugadores
        let divCantJugadores =  document.getElementById("cantJugadores");
        divCantJugadores.innerHTML = "Cantidad de jugadores: "+jugadoresDelEquipo.length;

     //Escribir en HTML el precio del equipo
        let divPrecioCarrito = document.getElementById("precioCarrito");
        let precioTotalJugadores = 0;
        for(let i=0; i<jugadoresDelEquipo.length; i++){
        precioTotalJugadores+=jugadoresDelEquipo[i].precio;
        }
    divPrecioCarrito.innerHTML = "Precio total del equipo: "+precioTotalJugadores;

        // Escribir en HTML jugadoresDelEquipo
        mostrarJugadoresDelEquipo("jugadoresEquipo",jugadoresDelEquipo);

        // Actualizar parte 3
        let defensoresT = [];
        let mediocampistasT=[];
        let delanterosT = [];
        let arquerosT = [];


        for( let i=0; i<jugadoresDelEquipo.length; i++){

            if(jugadoresDelEquipo[i].posicion == "defensor"){
                defensoresT.push(jugadoresDelEquipo[i]);
            }else if(jugadoresDelEquipo[i].posicion == "mediocampista"){
                mediocampistasT.push(jugadoresDelEquipo[i]);
            }else if(jugadoresDelEquipo[i].posicion == "delantero"){
                delanterosT.push(jugadoresDelEquipo[i]);
            }else if(jugadoresDelEquipo[i].posicion == "arquero"){
                arquerosT.push(jugadoresDelEquipo[i]);
            }
        }
        mostrarJugadoresDelEquipo("arqueros",arquerosT);
        mostrarJugadoresDelEquipo("defensores",defensoresT);
        mostrarJugadoresDelEquipo("mediocampistas",mediocampistasT);
        mostrarJugadoresDelEquipo("delanteros",delanterosT);
    
}

//Código para decir sólo un atributo de los objetos de un Arrays
function verNombresDeJugadoresDelEquipoEnConsola(){
    const nombresDeJugadoresDelEquipo = jugadoresDelEquipo.map((jg)=>jg.nombre);
    console.log("---Jugadores del equipo: ");
    console.log(nombresDeJugadoresDelEquipo);
}