const fetchGenres = async () => {
  const response = await fetch(
    `${process.env.baseUrl}/genre/movie/list?api_key=${'key here'}&language=en`
  );
  const data = await response.json();
  return data;
};

export default fetchGenres;
// {
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },

//     ]
//   }
