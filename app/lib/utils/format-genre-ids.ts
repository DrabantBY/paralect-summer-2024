import type { GenreDataType } from '@/app/types/data';

const formatGenreIds = (ids: number[], genre: GenreDataType[]): string => {
  const names = ids.reduce((acc, id) => {
    const foundGenre = genre.find((genre) => genre.id === id);

    if (foundGenre) {
      acc.push(foundGenre.name);
    }

    return acc;
  }, [] as string[]);

  return names.join(', ');
};

export default formatGenreIds;
