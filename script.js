function search() {
    let ricerca = document.getElementById('searchField').value
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + ricerca)
    .then(response => {
        return response.json()
    })
    .then(result => {
        ricerca= document.getElementById('searchField').value= ""
        let album = document.getElementById('album')

        result.data.forEach(element => {
            document.getElementById('searchResults').classList = 'd-block, mt-5'
            album.innerHTML += "<div class= 'card col-sm-6 col-md-4 col-lg-3'><img src= " + element.album.cover_big + "><h5> " + element.artist.name + " </h5><h5> " + element.title + " </h5></div>"
        })  
    }) 
    album.innerHTML= ""
}