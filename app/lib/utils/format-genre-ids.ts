import type { GenreDataType } from "@/app/types/data";

const formatGenreIds = (genres: GenreDataType[], ids?: number[]): string => {
  let names: string[];

  if (ids) {
    names = ids.reduce((acc, id) => {
      const foundGenre = genres.find((genre) => genre.id === id);

      if (foundGenre) {
        acc.push(foundGenre.name);
      }

      return acc;
    }, [] as string[]);
  } else {
    names = genres.map(({ id, name }) => name);
  }

  return names.join(", ");
};

export default formatGenreIds;
