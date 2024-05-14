import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useNumberField = (name: string) => {
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string | number>(
    searchParams.get(name) ?? ""
  );

  const { replace } = useRouter();

  const submit = (value: string | number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value) {
      newSearchParams.set(name, `${value}`);
      newSearchParams.set("page", "1");
    }

    if (value === "") {
      newSearchParams.delete(name);
    }

    const route = `/movies?${newSearchParams.toString()}`;

    setValue(value);

    replace(route);
  };

  return { value, submit };
};

export default useNumberField;
