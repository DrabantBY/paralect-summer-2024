import fetchMovieDetails from '@/app/lib/fetch/fetch-movie-details';

export default async function MovieDetailsPage({ params }: { params: { id: number } }) {
  const data = await fetchMovieDetails(params.id);

  return null;
}
