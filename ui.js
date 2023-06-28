class UI {
    
    static addFilmToUI(newFilm){
        const filmListesi = document.querySelector("#films");
        filmListesi.innerHTML += `
        <tr>
              <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.name}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
         </tr>
        `;
    }

    static loadToAllFilm(){

        const filmler = Storege.getFilmStorage();
        const filmListesi = document.querySelector("#films");

        filmler.forEach(function(newFilm){
            filmListesi.innerHTML += `
            <tr>
                  <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                    <td>${newFilm.name}</td>
                    <td>${newFilm.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
             </tr>
            `;
        })
    }

    static deleteFilmToUI(filmName){
        filmName.parentElement.remove();
    }

    static allFilmDeleteUI(){
        const filmListesi = document.querySelector("#films");
        while(filmListesi.firstChild != null){
            filmListesi.firstChild.remove();
        }

    }


}