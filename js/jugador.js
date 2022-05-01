
// let jugadoresDelEquipo = validarjugadoresDelEquipoStorage();

// function validarjugadoresDelEquipoStorage(){
//     if(localStorage.getItem("JugadoresDelEquipo") !== null){
//         const jugadoresDelEquipoStorage = JSON.parse(localStorage.getItem("JugadoresDelEquipo"));

//         return jugadoresDelEquipoStorage;
//     }else{
//         return [];
//     }
// }
const jugadoresDelEquipo = [];

// let st= localStorage.getItem('JAVIER');
// let stJson = JSON.parse(st);
// console.log(st);
// // st.username. ="si";
// console.log(stJson);
// console.log(stJson.username);
class Usuario {
  constructor(nombre, edad, dinero, arrayJugadores) {
    this.nombre = nombre;
    this.edad = edad;
    this.dinero = dinero;
    this.arrayJugadores = arrayJugadores;
  }
  puedeAgregar(Jugador) {
    return Jugador.precio <= this.dinero;
  }
}

const usuario1 = new Usuario("PEDRO", 39, 2500);
// CLASE JUGADOR
class Jugador {
  constructor(nombre, precio, posicion, imagen,descripcion,nombreCompleto,nacimiento,edad,nacionalidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.posicion = posicion;
    this.descripcion = descripcion;
    this.nombreCompleto = nombreCompleto;
    this.nacimiento=nacimiento;
    this.edad=edad;
    this.nacionalidad = nacionalidad;

    this.imagen = imagen;
  }
  agregarJgAlEquipo() {
    let boxJugador = document.getElementById(`${this.nombre}`);
    boxJugador.classList.add("boxAgregado");
  }
  sacarJgDelEquipo() {
    let boxJugador = document.getElementById(`${this.nombre}`);
    boxJugador.classList.remove("boxAgregado");
  }
}

// JUGADORES CREADOS
const jg1 = new Jugador("Buffon", 300, "arquero", "imgs/jugadores/buffon.jpg","Gianluigi Buffon es un futbolista italiano. Juega de guardameta y su equipo actual es el Parma Calcio de la Serie B de Italia.​ Es el jugador con más partidos disputados de la selección italiana, de la que fue su capitán.","Gianluigi Buffon","28/01/1978",43,"Italiano");
const jg2 = new Jugador(
  "Casillas",
  250,
  "arquero",
  "imgs/jugadores/casillas.jpg","Iker Casillas Fernández es un exfutbolista español que jugaba como portero. Fue internacional absoluto con España desde 2000 hasta 2016 y capitán desde 2006 hasta 2016.","Iker Casillas","20/05/1981",40,"Español"
);
const jg3 = new Jugador(
  "Martinez",
  270,
  "arquero",
  "imgs/jugadores/martinez.jpg","Damián Emiliano Martínez, conocido deportivamente como Dibu Martínez, es un futbolista argentino. Juega como arquero en Aston Villa de la Premier League, de Inglaterra, ​y en la Selección Argentina.​​","Emiliano Martinez","02/09/1992",29,"Argentino"
);
const jg4 = new Jugador("Gatti", 200, "arquero", "imgs/jugadores/gatti.jpg","Hugo Orlando Gatti es un exfutbolista argentino qué destacó en Boca y Gimnasia. Jugaba en la posición de guardameta y su primer equipo fue Atlanta. Su último club antes de retirarse fue Boca Juniors.","Hugo Orlando Gatti","19/08/1944",77,"Argentino");
const jg5 = new Jugador(
  "Abbondanzieri",
  250,
  "arquero",
  "imgs/jugadores/abbondanzieri.jpg","Roberto Carlos Abbondanzieri, mejor conocido por su apodo Pato, es un exfutbolista argentino que se desempeñaba en la posición de portero. Destacaba por sus grandes reflejos, presencia y por su habilidad para detener tiros desde el punto del penal.","Roberto Abbondanzieri","19/08,1972",49,"Argentino"
);
const jg6 = new Jugador("Romero", 100, "arquero", "imgs/jugadores/romero.jpg","Sergio Germán Romero ​ es un futbolista argentino formado y surgido de Racing. Se desempeña en la posición de arquero y actualmente juega en el Venezia F. C. de la Serie A de Italia. Fue internacional con la selección de Argentina, siendo el arquero con más presencias en la historia.","Sergio Romero","22/02/1987",35,"Argentino");
const jg7 = new Jugador(
  "Maldini",
  200,
  "defensor",
  "imgs/jugadores/maldini.jpg","Paolo Cesare Maldini es un exfutbolista italiano que jugaba de defensa, principalmente de lateral izquierdo.​","Paolo Maldini","26/06/1968",53,"Italiano"
);
const jg8 = new Jugador(
  "Sergio Ramos",
  290,
  "defensor",
  "imgs/jugadores/ramos.jpg","Elegido por la prestigiosa revista France Football en su Dream Team histórico como uno de los diez mejores centrales de la historia, se encuentra entre los diez defensores con más goles de la historia","Sergio Ramos García","30/03/1986",36,"Español"
);
const jg9 = new Jugador(
  "Otamendi",
  140,
  "defensor",
  "imgs/jugadores/otamendi.jpg","Nicolás Hernán Gonzalo Otamendi es un futbolista argentino que juega como defensor​ y su actual equipo es el S. L. Benfica de la Primeira Liga. Es internacional con la selección de fútbol de Argentina.","Nicolás Hernán Otamendi","12/02/1988",34,"Argentino"
);
const jg10 = new Jugador(
  "Zanetti",
  210,
  "defensor",
  "imgs/jugadores/zanetti.jpg","Javier Adelmar Zanetti es un exfutbolista argentino. Jugaba como defensa y desempeñó casi toda su carrera en el Inter de Milán de la Serie A de Italia, donde es considerado por muchos como el máximo ídolo de la historia del club.","Javier Adelmar Zanetti","10/08/1973",48,"Argentino");
const jg11 = new Jugador(
  "Roberto Carlos",
  300,
  "defensor",
  "imgs/jugadores/robertocarlos.jpg","Roberto Carlos da Silva es un exfutbolista y exentrenador hispano-brasileño considerado como uno de los mejores laterales de la historia.​ Destacaba por su gran técnica, velocidad y potencia, así como por sus lanzamientos de tiro libre.","Roberto Carlos da Silva", "10/04/1973",49,"Brasilero"
);
const jg12 = new Jugador(
  "Cannavaro",
  330,
  "defensor",
  "imgs/jugadores/cannavaro.jpg","Fabio Cannavaro es un exfutbolista y actual entrenador italiano, que jugaba de defensa central.","Fabio Cannavaro","13/09/1973",48,"Italiano"
);
const jg13 = new Jugador(
  "Riquelme",
  310,
  "mediocampista",
  "imgs/jugadores/riquelme.jpg","Juan Román Riquelme es un exfutbolista y actual vicepresidente y director deportivo argentino, cargo que desempeña actualmente en Boca Juniors.​Como jugador, se desempeñaba en la posición de mediocampista ofensivo, en el rol de enganche, donde se destacó como uno de los mejores jugadores de su generación.​​​​","Juan Román Riquelme","24/06/1978",43,"Argentino"
);
const jg14 = new Jugador(
  "Iniesta",
  250,
  "mediocampista",
  "imgs/jugadores/iniesta.jpg","Andrés Iniesta Luján, más conocido simplemente como Iniesta, es un futbolista español que juega como centrocampista en el Vissel Kobe de la J1 League de Japón.​Ha desarrollado la mayor parte de su carrera en el F. C. Barcelona y en la selección española, equipos de los que fue capitán.","Andrés Iniesta", "11/05/1984",37,"Español"
);
const jg15 = new Jugador(
  "Maradona",
  Infinity,
  "mediocampista",
  "imgs/jugadores/maradona.jpg","El mejor de la historia","Diego Armando Maradona","30/10/1960","Eterno","ARGENTINO"
);
const jg16 = new Jugador(
  "Zidane",
  300,
  "mediocampista",
  "imgs/jugadores/zidane.jpg","Zinédine Yazid Zidane, también conocido como Zinzou, ​ es un exfutbolista y entrenador franco-argelino. Como entrenador, debutó al frente del Real Madrid el 4 de enero de 2016, ​ ostentando el cargo durante tres temporadas, ​ en las que se proclamó consecutivamente tricampeón de Europa.","Zinédine Yazid Zidane","23/06/1972",49,"Francés"
);
const jg17 = new Jugador(
  "Enzo Perez",
  150,
  "mediocampista",
  "imgs/jugadores/perez.jpg","Enzo Nicolás Pérez es un futbolista argentino. Juega de volante y su equipo actual es River Plate de la Primera División de Argentina.","Enzo Nicolás Pérez","22/02/1986",36,"Argentino"
);
const jg18 = new Jugador(
  "Gago",
  190,
  "mediocampista",
  "imgs/jugadores/gago.jpg","Fernando Rubén Gago ​​es un exfutbolista y actual entrenador argentino que jugaba de volante central. Debutó profesionalmente el 4 de diciembre de 2004, en el Club Atlético Boca Juniors.​ Actualmente es el director técnico de Racing Club.","Fernadno Gago","10/04/1986",36,"Argentino"
);
const jg19 = new Jugador(
  "Batistuta",
  240,
  "delantero",
  "imgs/jugadores/batistuta.jpg","Gabriel Omar Batistuta es un exfutbolista argentino. Jugaba en la posición de delantero. Es conocido por su carrera en Europa y la selección de fútbol de Argentina, con una letalidad de cara al gol fantástica, ejecutaba disparos que llegaban a alcanzar hasta los 106 Km/h","Gabriel Omar Batistuta","01/02/1969",53,"Argentino"
);
const jg20 = new Jugador(
  "C.Ronaldo",
  290,
  "delantero",
  "imgs/jugadores/ronaldo.jpg","Cristiano Ronaldo o CR7, es un futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico.","Cristiano Ronaldo dos Santos Aveiro","05/02/1985",37,"Portugues"
);
const jg21 = new Jugador(
  "Ronaldo",
  310,
  "delantero",
  "imgs/jugadores/ronaldoN.jpg","Ronaldo Luís Nazário de Lima, ​ conocido deportivamente como Ronaldo, ​ es un exfutbolista brasileño y jugador histórico del fútbol europeo, a cuyos clubes debe sus mayores éxitos y reconocimientos. Es propietario del Real Valladolid Club de Fútbol español y del Cruzeiro Esporte Clube brasileño.​​","Ronaldo Luís Nazário de Lima","22/09/1976",45,"Brasilero"
);
const jg22 = new Jugador("Messi", 850, "delantero", "imgs/jugadores/messi.jpg","El mejor jugador de fútbol de la historia.","Lionel Andrés Messi Cuccittini","24/06/1987",34,"ARGENTINO!!!!");
const jg23 = new Jugador(
  "Palermo",
  220,
  "delantero",
  "imgs/jugadores/palermo.jpg","Como jugador, se desempeñaba en la posición de delantero centro, donde llegó a destacarse como uno de los mejores y más icónicos de la historia de Boca Juniors y del fútbol argentino.","Martin Palermo","7/11/1973",48,"Argentino"
);
const jg24 = new Jugador(
  "Francescoli",
  200,
  "delantero",
  "imgs/jugadores/francescoli.jpg","Enzo Francescoli Uriarte es un exfutbolista uruguayo. Es conocido por el apodo de príncipe, por su estilo clásico y elegante","Enzo Francescoli Uriarte","12/11/1961",60,"Uruguayo"
);

// ARRAYS DE JUGADORESTOTALES Y JUGADORESDELEQUIPO
const jugadores = [jg1,jg2,jg3,jg4,jg5,jg6,jg7,jg8,jg9,jg10,jg11,jg12,jg13,jg14,jg15,jg16,jg17,jg18,jg19,jg20,jg21,jg22,jg23,jg24];

console.log(jugadoresDelEquipo.includes(jugadores[2]));


//                    ERROR FETCH

// Cuando cargo los jugadores con el archivo data.json, no sé como convertirlos en la clase Jugador
// let jugadores = [];
//     fetch("/data.json")
//     .then((response)=>response.json())
//     .then((data)=> jugadores = data.jugadores);

//     jugadores.forEach(jugador =>{
//     let jugador1 = new Jugador(jugador.nombre,jugador.precio,jugador.posicion,jugador.imagen);
//     })


const arqueros = jugadores.filter((jg) => jg.posicion === "arquero");
const defensores = jugadores.filter((jg) => jg.posicion === "defensor");
const mediocampistas = jugadores.filter(
  (jg) => jg.posicion === "mediocampista"
);
const delanteros = jugadores.filter((jg) => jg.posicion === "delantero");



function mostrarDetallesUsuarioAlPrincipio(usuario) {
  const nombreEquipo = document.getElementById("nombreUsuario").value;
  let nombre = document.getElementById("nombre");
  nombre.innerHTML = nombreEquipo;

  let dineroUsuario = document.getElementById("dineroUsuario");
  dineroUsuario.innerHTML =
    `<i class="fa fa-money fa-1x" style="color:green"></i>` + usuario.dinero;
}

mostrarDetallesUsuarioAlPrincipio(usuario1);

function mostrarCardsEnHTML(id, cards) {
  const a = document.getElementById(id);
  a.innerHTML = cards;
}

// ESCRIBIR EN EL HTML LAS CARDS DE LOS JUGADORES
function generarCardsDeJugadores(array, mostrarCardsEnHTML) {
  let cardsGeneradas = "";

  array.forEach((jg) => {
    
    cardsGeneradas += `<div class="boxes" id="${jg.nombre}">

        <div class="box-content">
        <div class ="card-header-${jg.posicion}">
        ${jg.nombre} 
        </div>
        <div class="card-posicion">${jg.posicion.toUpperCase()}</div>
        <div class="card-precio">$${jg.precio} </div>
        
        
        <img src="${jg.imagen}" class ="imgs" alt="">
        <button class="btn btn-warning"onclick="generarDetallesDeJugador('${
          jg.nombre
        }')"><i class="fa-solid fa-circle-info"></i></button>
        
        <button onclick="agregarAlEquipo('${
          jg.nombre
        }')" class="btn btn-default btn-info""><i class="fas fa-plus"></i> </button>
        <button onclick="sacarDelEquipo('${
          jg.nombre
        }')"class="btn btn-default btn-danger"><i class="fas fa-trash"></i> </button>
        </div>
        </div>
        </div>`;
  })
  ;

  mostrarCardsEnHTML("jugadores", cardsGeneradas);
}
function mostrarCardsEnHTML2(id, cards) {
  const a = document.getElementById(id);
  a.innerHTML = cards;
}
function generarDetallesDeJugador(nombre) {
  let cardsGeneradas = "";

  const jugador = jugadores.find((jg) => jg.nombre == nombre);

  cardsGeneradas +=
    `
        <article class="detalles">
        <div class="btns-detalle">
        <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">

            <button class="active btn-warning" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
              role="tab" aria-controls="pills-home" aria-selected="true">
              Carrera
            </button>

          </li>
          <li class="nav-item" role="presentation">

            <button class="boton btn-warning" id="pills-experiencia-tab" data-bs-toggle="pill" data-bs-target="#pills-experiencia"
              type="button" role="tab" aria-controls="pills-experiencia" aria-selected="false">
              Descripcion
            </button>

          </li>
        </ul>
        </div>
        <br>


        <!-- CONTENIDO  -->
        <div class="tab-content" id="pills-tabContent">

          <!-- CONTENIDO HOME -->
          <div class="tab-pane fade show active detalle-jugador" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <h2 class="cont-titulo">  ${jugador.nombreCompleto} </h2>
            
              <div class="row">
              <div class="col-sm-6">
                <ul style="list-style-type:square; font-size:15px;">
                  <li><b>Fecha de nacimiento:  </b>${jugador.nacimiento}</li>
                  <li><b>Edad: </b> ${jugador.edad}</li>
                  <li><b>Nacionalidad:</b> ${jugador.nacionalidad}</li>
                  </ul>
                    
              </div>
              <div class="col-sm-6">
              <img src="${jugador.imagen}" class ="imgsDetalle" alt="" style=" margin:auto">
              </div>
            </div>
          </div>

          <!-- CONTENIDO EXPERIENCIA-->
          <div class="tab-pane fade detalle-jugador" id="pills-experiencia" role="tabpanel" aria-labelledby="pills-experiencia-tab">
          <h2 class="cont-titulo">  ${jugador.nombreCompleto} </h2>
          <div class="detalle-content"> ${jugador.descripcion} </div>
        </div>
        </div>
        </div>
    </article>
    `;

mostrarCardsEnHTML2("detalleJugador", cardsGeneradas);
}

//
generarCardsDeJugadores(jugadores, mostrarCardsEnHTML);

// porNOMBRE
function buscarJugador() {
  console.log("Hola!");
  const nombreJugadorBuscado = document
    .getElementById("texto-buscado")
    .value.toUpperCase()
    .trim();

  const jugadorEncontradoPorNombre = jugadores.filter((jugador) => {
    return jugador.nombre.toUpperCase().match(nombreJugadorBuscado);
  });
  generarCardsDeJugadores(jugadorEncontradoPorNombre, mostrarCardsEnHTML);

  if (nombreJugadorBuscado == null) {
    generarCardsDeJugadores(jugadores, mostrarCardsEnHTML);
  }
}

//Función para agregar Al equipo
function agregarAlEquipo(name) {
  if (jugadoresDelEquipo.some((jg) => jg.nombre == name)) {
    //si ya pertenece al equipo
    const jugador = jugadores.find((jg) => jg.nombre == name);
    jugador.agregarJgAlEquipo();

    // MUESTRA EL MODAL
    const modalContainer = document.getElementById("yaEstaEnElEquipo");
    const botonCerrar = document.getElementById("cerrarModal2");
    modalContainer.classList.add("show");
    botonCerrar.addEventListener("click", () => {
      modalContainer.classList.remove("show");
    });
  } else { //si no pertenece al equipo, LO AGREGA
    const jugador = jugadores.find((jg) => jg.nombre == name);

    if (usuario1.puedeAgregar(jugador)) {
      //si le alcanza el dinero

      jugadoresDelEquipo.push(jugador);

      jugador.agregarJgAlEquipo();
      // CSS
      usuario1.dinero -= jugador.precio;

      localStorage.setItem("JugadoresDelEquipo",JSON.stringify(jugadoresDelEquipo));


      
      // toastify
      Toastify({
        text: `Agregaste a ${jugador.nombre} al equipo.`,
        duration: 2000,
        gravity: "bottom",
        position: "left",
        style: {
          color: "black",
          background:
            "linear-gradient(to right, rgb(161, 255, 148),rgba(255, 238, 0, 0.733))",
        },
      }).showToast();
    }
    // No le alcanza el dinero
    else {
      const modalContainer = document.getElementById("noTeAlcanza");
      const botonCerrar = document.getElementById("cerrarModal1");

      modalContainer.classList.add("show");
      botonCerrar.addEventListener("click", () => {
        modalContainer.classList.remove("show");
      });
    }
  }
  actualizarHTML();
  
}
function sacarDelEquipo(name) {
  
  const jugador = jugadores.find((jg) => jg.nombre == name);
  console.log(jugador);
  
  if (jugadoresDelEquipo.includes(jugador)) {

    jugadoresDelEquipo.splice(jugadoresDelEquipo.indexOf(jugador), 1);
    console.log("aaa");
    usuario1.dinero += jugador.precio;

    // CSS
    jugador.sacarJgDelEquipo();

    Toastify({
      text: `Sacaste a ${jugador.nombre} al equipo.`,
      duration: 2000,
      gravity: "bottom",
      position: "left",
      style: {
        color: "black",
        background:
          "linear-gradient(to right, rgb(161, 255, 148),rgba(255, 238, 0, 0.733))",
      },
    }).showToast();
  }
  localStorage.setItem("JugadoresDelEquipo",JSON.stringify(jugadoresDelEquipo));
  actualizarHTML();
}
function mostrarJugadoresDelEquipo(id, array) {
  const jugadores = document.getElementById(id);

  let cardsGeneradas = "";

  array.forEach((jg) => {
    cardsGeneradas += `
    <p style="display: inline; color:black; margin:10px;">${jg.nombre} 
    </p> <i class="fa fa-caret-right" aria-hidden="true"></i>
    <img src="${jg.imagen}" width=20px height:20px>
    `;
  });

  jugadores.innerHTML = cardsGeneradas;
}
function actualizarHTML() {
  // ACTUALIZAR HTML
  //Escribir en el HTML datos del usuario1
  let dineroUsuario = document.getElementById("dineroUsuario");
  dineroUsuario.innerHTML =
    `<i class="fa fa-money fa-1x" style="color:green"></i> ` + usuario1.dinero;

  //Escribir en HTML cantidad de jugadores
  let divCantJugadores = document.getElementById("cantJugadores");
  divCantJugadores.innerHTML =
    "Cantidad de jugadores: " + jugadoresDelEquipo.length;

  //Escribir en HTML el precio del equipo
  let divPrecioCarrito = document.getElementById("precioCarrito");
  let precioTotalJugadores = 0;
  for (let i = 0; i < jugadoresDelEquipo.length; i++) {
    precioTotalJugadores += jugadoresDelEquipo[i].precio;
  }
  divPrecioCarrito.innerHTML =
    "Precio total del equipo: " + precioTotalJugadores;

  // Escribir en HTML jugadoresDelEquipo
  mostrarJugadoresDelEquipo("jugadoresEquipo", jugadoresDelEquipo);

  // Actualizar parte 3
  let defensoresT = [];
  let mediocampistasT = [];
  let delanterosT = [];
  let arquerosT = [];

  for (let i = 0; i < jugadoresDelEquipo.length; i++) {
    if (jugadoresDelEquipo[i].posicion == "defensor") {
      defensoresT.push(jugadoresDelEquipo[i]);
    } else if (jugadoresDelEquipo[i].posicion == "mediocampista") {
      mediocampistasT.push(jugadoresDelEquipo[i]);
    } else if (jugadoresDelEquipo[i].posicion == "delantero") {
      delanterosT.push(jugadoresDelEquipo[i]);
    } else if (jugadoresDelEquipo[i].posicion == "arquero") {
      arquerosT.push(jugadoresDelEquipo[i]);
    }
  }
  mostrarJugadoresDelEquipo("arqueros", arquerosT);
  mostrarJugadoresDelEquipo("defensores", defensoresT);
  mostrarJugadoresDelEquipo("mediocampistas", mediocampistasT);
  mostrarJugadoresDelEquipo("delanteros", delanterosT);
}

//Código para decir sólo un atributo de los objetos de un Arrays
function verNombresDeJugadoresDelEquipoEnConsola() {
  const nombresDeJugadoresDelEquipo = jugadoresDelEquipo.map((jg) => jg.nombre);
  setTimeout(() => {
    console.log("---Jugadores del equipo: ");
    console.log(nombresDeJugadoresDelEquipo);
  }, 3000);
}
