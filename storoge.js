class Storege {

    static addToFilmStorege(newFilm){
        const filmler =  this.getFilmStorage();
        filmler.push(newFilm);

        localStorage.setItem("filmler",JSON.stringify(filmler));

    }

    static getFilmStorage(){

        let filmler;

        if(localStorage.getItem("filmler") === null)
        {
            filmler = [];
        }
        else{
            filmler = JSON.parse(localStorage.getItem("filmler"));
        }
        return filmler;

    }

    static deleteFilmFromStorege(filmName){

        const filmler = this.getFilmStorage();
        filmler.forEach(function(item,index){
            if(item.name === filmName){
                filmler.splice(index,1)
            }
        });
   
        localStorage.setItem("filmler",JSON.stringify(filmler));

    }

    static deleteAllFilmStorage(){
        localStorage.removeItem("filmler");;
    }




}