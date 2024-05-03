const fetchMovieItem = async (id: number) => {
  const response = await fetch(
    `${
      process.env.baseUrl
    }/movie/${id}?api_key=${'key here'}&language=en-US&append_to_response=videos`
  );
  const data = await response.json();
  return data;
};
export default fetchMovieItem;
