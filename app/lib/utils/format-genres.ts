import type { GenreDataType } from '@/app/types/data';

const formatGenres = (ids: number[], genres: GenreDataType[]) => {
  const names = ids.reduce((acc, id) => {
    const foundGenre = genres.find((genre) => genre.id === id);

    if (foundGenre) {
      acc.push(foundGenre.name);
    }

    return acc;
  }, [] as string[]);

  return names.join(', ');
};

export default formatGenres;
