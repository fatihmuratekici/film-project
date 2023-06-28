const filmIsmi = document.querySelector("#title");
const filmYonetmen = document.querySelector("#director");
const filmResim = document.querySelector("#url");
const form = document.querySelector("#film-form");
const table = document.querySelector("#films");
const clearBtn = document.querySelector("#clear-films");


eventListeners();

function eventListeners() {

    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",addtoStorageAllFilm);
    table.addEventListener("click",deleteFilm);
    clearBtn.addEventListener("click",deleteAllFilms);
}

function deleteAllFilms(){

    if(confirm("Tüm filmler silinecektir.Onaylıyor Musunuz?"))
    {
        UI.allFilmDeleteUI();
        Storege.deleteAllFilmStorage();
    }


};

function deleteFilm(e){
  
    if(e.target.id == "delete-film")
    {  
        UI.deleteFilmToUI(e.target.parentElement.previousElementSibling.previousElementSibling);
        Storege.deleteFilmFromStorege(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }


};

function addtoStorageAllFilm(){
    UI.loadToAllFilm();
}

function addFilm(e) {

    const isim = filmIsmi.value;
    const yonetmen = filmYonetmen.value;
    const url = filmResim.value;
    if (isim === "" || yonetmen === "" || url === "") {
        //hata
        hata("danger","Bilgileri girdiniğinizden Emin Olun!!!");
    }
    else {
        //ekle
        const film = new Film(isim, yonetmen, url);
        UI.addFilmToUI(film);
        Storege.addToFilmStorege(film);
        clearInput();
        hata("success","Film Başarılı bir şekilde eklendi");
    }

    e.preventDefault();
}


function hata(type, message) {

    const cardbody = document.querySelectorAll(".card-body")[0];

    const newDiv = document.createElement("div");
    newDiv.className = `alert alert-${type}`;
    newDiv.textContent = message;

    cardbody.appendChild(newDiv);
    setTimeout(() => {
        newDiv.remove();
    }, 2000);
}

function clearInput(){
    filmIsmi.value = "";
    filmYonetmen.value = "";
    filmResim.value = "";
}