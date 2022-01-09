// Menggunakan Fetch  
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

  const inputKeyword = document.querySelector('.input-keyword')
  
  fetch('http://www.omdbapi.com/?apikey=5f4dbc0b&s=' + inputKeyword.value)
  .then(response => response.json())
  .then(response => {
    const movies = response.Search;
    let cards = '';

    movies.forEach(m => cards += showCards(m))
    
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;

  });
});




function showCards(m){
  return `<div class="col-md-4 my-3">
          <div class="card">
            <img src="${m.Poster}" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title mb-4">${m.Title}</h5>
              <p class="card-subtitle mb-3 mt-2 text-muted">${m.Year}</p>
              <a href="#" style="text-decoration: none;">Type: ${m.Type}</a>
            </div>
          </div>
        </div>`
}