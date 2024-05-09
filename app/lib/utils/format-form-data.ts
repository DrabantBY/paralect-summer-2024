import type { MoviesPageSearchParamsType } from '@/app/types/page';

const formatFormData = (formData: FormData): string => {
  const formDataIterator = formData.entries();

  const searchParams: MoviesPageSearchParamsType = { page: '1' };

  for (const [key, value] of formDataIterator) {
    if (!key.startsWith('$ACTION_') && value && !(value instanceof File)) {
      searchParams[key as keyof MoviesPageSearchParamsType] = value;
    }
  }

  const urlSearchParams = new URLSearchParams(searchParams);

  return urlSearchParams.toString();
};

export default formatFormData;
