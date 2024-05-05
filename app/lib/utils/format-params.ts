import type { MoviesPageSearchParamsType } from '@/app/types/page';

const formatParams = (searchParams: MoviesPageSearchParamsType): string => {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (!urlSearchParams.has('page')) {
    urlSearchParams.append('page', '1');
  }

  return urlSearchParams.toString();
};

export default formatParams;
