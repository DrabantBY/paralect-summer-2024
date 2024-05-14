import type { MoviesPageSearchParamsType } from "@/app/types/page";

const checkIsDisabled = (searchParams: MoviesPageSearchParamsType) => {
  const newSearchParams = { ...searchParams };

  if ("page" in newSearchParams) {
    delete newSearchParams.page;
  }

  if (newSearchParams.sort_by === "popularity.desc") {
    delete newSearchParams.sort_by;
  }

  return Object.keys(newSearchParams).length === 0;
};

export default checkIsDisabled;
