

let duckInput = document.getElementById('duckInput');
let buttonRef = document.getElementById('generateButton');
let duckImg = document.getElementById('duckImg');
let duckTitle = document.getElementById('duckTitle');

function ducks(events){
    events.preventDefault();

    fetch("https://random-d.uk/api")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson.message);
    })


}


buttonRef.addEventListener("click", ducks);