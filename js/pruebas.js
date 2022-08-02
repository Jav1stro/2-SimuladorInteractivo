const DURACION = 2000;

$("#1").append(`<div style="background:#FCF3CF; padding:10px">
                    <img id="logoBanner" src="../palermo.jpeg" width="150" height="150"  style="float: left">
                    <p id="textBanner">APRENDE</p>
                  </div>`);
$("#logoBanner")
  .fadeOut(DURACION, () => {
    $("#textBanner").html("PROGRAMACIÓN");
  })
  .fadeIn(DURACION, () => {
    $("#textBanner").html("CON JAVASCRIPT");
  })
  .animate({ opacity: 0.75, margin: "+=50" }, DURACION, () => {
    $("#textBanner").html("EN CODERHOUSE");
  });

//DOS

$("#2")
  .append(`<div style="display:flex; flex-direction:column; background:#ABEBC6; padding:10px">
                    
                    <input id="entradaUI" type="text" style="margin-top:20px;">
                    <h3 id="salidaUI" style="max-width:100px; text-align:center"></h3>
                  </div>`);

$("#entradaUI").keyup(function (e) {
  $("#salidaUI").hide().html(e.target.value.toUpperCase()).slideDown(900);
});

//TRES
$("#3")
  .append(`<div style="display:flex; flex-direction:column; justify-content:space-around; height:400px; background:#EC7063">
                    <img id="logoGUI" src="../palermo.jpeg" width="150" height="150"  style="margin:10px">
                    <button id='btnSi' style="margin:10px">SI</button>
                    <button id='btnNo' style="margin:10px">NO</button>
                    <p id="salidaGUI" style="text-align:center"></>
                  </div>`);
$("#btnSi").click(function (e) {
  $("#btnNo").prop("disabled", true);
  $("#btnSi").prop("disabled", true);
  $("#btnSi").css("background-color", "green");
  $("#salidaGUI")
    .html("ACEPTADO")
    .fadeIn(500)
    .delay(1000)
    .animate({ opacity: 0.3 }, () => {
      $("#btnNo").prop("disabled", false);
      $("#btnSi").prop("disabled", false);
      $("#btnSi").css("background-color", "white");
    });
});
$("#btnNo").click(function (e) {
  $("#btnNo").css("background-color", "green");
  $("#btnNo").prop("disabled", true);
  $("#btnSi").prop("disabled", true);
  $("#salidaGUI")
    .html("RECHAZADO")
    .fadeIn(500)
    .delay(1000)
    .animate({ opacity: 0.3 }, () => {
      $("#btnNo").prop("disabled", false);
      $("#btnNo").css("background-color", "white");
      $("#btnSi").prop("disabled", false);
    });
});

//CUATRO
$("#4").append(
  `<div style="display:flex; flex-direction:column; justify-content:space-around; background:#85C1E9; padding:10px"><h1 id='reloj'></h1><button id='btnStop'>DETENER</button>
</div>`
);
let detener = false;
let inicio = 0;
function cronometro(selector) {
  $(selector)
    .delay(900)

    .html(inicio)
    .fadeIn(500, () => {
      if (!detener) {
        inicio++;
        cronometro("#reloj");
      }
    });
}
$("#btnStop").click(function (e) {
  detener = !detener;
  if (detener) {
    $("#btnStop").html("CONTINUAR");
  } else {
    cronometro("#reloj");
    $("#btnStop").html("DETENER");
  }
});
cronometro("#reloj");



//CINCO
function callbackGetPublicaciones(respuesta,estado){
    //NOS PREGUNTAMOS SI EL ESTADO RESPONDIDO POR EL SERVIDOR ES SUCCESS.
    if(estado === "success"){
        //SI ES SUCCESS ENTONCES EN LA RESPUESTA TENEMOS EL JSON DE PUBLICACION.
        for (const publicacion of respuesta) {
            //AGREGAMOS UNA ESTRUCTURA HTML POR PUBLICACION EN LA RESPUESTA.
            $("#domGenerado").append(`<div>
                                        <h2>${publicacion.title}</h2>
                                        <p>${publicacion.body}</p>
                                     </div></hr>`);
        }
    }
}
//ESTA URL ES PARA OBTENER TODAS LAS PUBLICACIONES
const URLGETPUBLICACIONES = "https://jsonplaceholder.typicode.com/posts";
//AGREGAMOS CONTENEDOR A GENERAR EL CONTENIDO
$('#5').append("<div id='domGenerado'></div>");
//LLAMADA ASINCRONA GET CON EL METODO .get DE JQUERY
$.get(URLGETPUBLICACIONES,callbackGetPublicaciones);