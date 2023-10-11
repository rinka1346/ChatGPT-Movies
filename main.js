function searchMovies() {
  var searchTerm = document.getElementById("search-input").value.toLowerCase();
  var movies = document.querySelectorAll(".movie");

  movies.forEach(function (movie) {
    var title = movie.querySelector("h2").textContent.toLowerCase();
    var parentMovieDiv = movie.parentElement;

    if (title.includes(searchTerm)) {
      parentMovieDiv.style.display = "block"; // 検索語が含まれる映画を表示
    } else {
      parentMovieDiv.style.display = "none"; // 検索語が含まれない映画を非表示
    }
  });
}
