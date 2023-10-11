function normalizeJapanese(text) {
  // カタカナをひらがなに変換する
  var hiraganaText = text.replace(/[\u30a1-\u30f6]/g, function(match) {
      var chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
  });

  // 全角英数字を半角に変換する
  var normalizedText = hiraganaText.replace(/[０-９Ａ-Ｚａ-ｚ]/g, function(match) {
      var chr = match.charCodeAt(0) - 0xfee0;
      return String.fromCharCode(chr);
  });

  return normalizedText;
}

function searchMovies() {
  var searchTerm = normalizeJapanese(document.getElementById("search-input").value);
  var movies = document.querySelectorAll(".movie");

  movies.forEach(function (movie) {
      var title = normalizeJapanese(movie.querySelector("h2").textContent);

      if (title.includes(searchTerm)) {
          movie.style.display = "block"; // 検索語が含まれる映画を表示
      } else {
          movie.style.display = "none"; // 検索語が含まれない映画を非表示
      }
  });
}


