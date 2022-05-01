
let jugadores = [];
    fetch("/data.json")
    .then((response)=>response.json())
    .then((data)=> jugadores = data.jugadores);

    setTimeout(()=>console.log(jugadores),100);





