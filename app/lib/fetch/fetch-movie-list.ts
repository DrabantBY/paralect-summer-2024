const fetchMovieList = async () => {
  const response = await fetch(
    `${process.env.baseUrl}/discover/movie?api_key=${'key here'}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export default fetchMovieList;

// language = язык фильма (используй “en-US”)
// with_genres = поле id из каталога жанров
// primary_release_year = год релиза
// vote_average.lte и vote_average.gte = рейтинг фильма
// sort_by = значение выбранной сортировки
// page = номер запрашиваемой страницы
