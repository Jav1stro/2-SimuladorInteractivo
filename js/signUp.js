// signUp function


function signUp(e){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let nombreEquipo = document.getElementById('teamname').value;
    let dinero = document.getElementById('dinero').value;
    let pass = document.getElementById('password').value.toLowerCase();;

    let user = {
        username : username,
        nombreEquipo : nombreEquipo,
        dinero : dinero,
        password : pass,
        elegido :false,
    }

    let json = JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log("user added");
}

// login function
let nombreDelUsuario = "";

function login(e){
event.preventDefault();
console.log("AAA")
const username = document.getElementById("username").value;
const pass = document.getElementById("password").value.toLowerCase();;
let result = document.getElementById("result");



let user = localStorage.getItem(username);
let data = JSON.parse(user);

if(user == null){
    result.innerHTML = "Username incorrecto";
} else if(username == data.username && pass == data.password){
    result.innerHTML = "logged";
    user.elegido = true;
    localSorage.setItem(username, user);
    nombreDelUsuario = username;
    setTimeout(() => {
        window.location.href="inicio.html";
      }, 1000);
}else{
    result.innerHTML = "no";
}

}

// // export const nameVariable = nombreDelUsuario;
function nombre(){
    return nombreDelUsuario;
}
// module.exports = nombreDelUsuario;