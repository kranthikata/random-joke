let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function makeRequest(){
    spinnerEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let config = {
        method:"GET"
    };
    
    fetch(url, config)
    .then(function(response){
        return response.json();
    })
    .then(function(joke){
        spinnerEl.classList.toggle("d-none");
        jokeTextEl.textContent = joke.value;
    });
}

jokeBtnEl.addEventListener('click',makeRequest);