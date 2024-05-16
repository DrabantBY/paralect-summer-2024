import { GenreDataType } from "@/app/types/data";

const formatGenreData = (
  genres: GenreDataType[]
): { value: string; label: string }[] => {
  return genres.map(({ id, name }) => ({ value: `${id}`, label: name }));
};

export default formatGenreData;
