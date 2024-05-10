import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const useFieldSubmit = (name: string) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const submit = (value: string | number | null) => {
    if (value === '' || value === null) {
      return;
    }
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, `${value}`);
    const route = `/movies?${newSearchParams.toString()}`;

    replace(route);
  };

  return submit;
};

export default useFieldSubmit;
