const fetchMovieDetails = async (id: number) => {
  const response = await fetch(
    `${process.env.baseUrl}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  );

  const data = await response.json();

  return data;
};

export default fetchMovieDetails;
