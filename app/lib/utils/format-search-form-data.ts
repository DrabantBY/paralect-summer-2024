import type { RatedPageSearchParamsType } from "@/app/types/page";

const formatSearchFormData = (search: string): string => {
  const params: RatedPageSearchParamsType = search
    ? { page: "1", search }
    : { page: "1" };

  const searchParams = new URLSearchParams(params);

  const url = `/movies/rated?${searchParams.toString()}`;

  return url;
};

export default formatSearchFormData;
