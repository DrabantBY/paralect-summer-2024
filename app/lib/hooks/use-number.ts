import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useNumber = (name: string, defaultValue: string) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string | number>(defaultValue);

  const submit = (value: string | number) => {
    if (value === "") {
      return;
    }
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, `${value}`);
    const route = `/movies?${newSearchParams.toString()}`;
    setValue(value);
    replace(route);
  };

  return { value, submit };
};

export default useNumber;
