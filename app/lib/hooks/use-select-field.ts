import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useSelectField = (name: string) => {
  const [focused, setFocus] = useState<boolean>(false);

  const focus = useCallback(() => {
    setFocus(true);
  }, []);

  const blur = useCallback(() => {
    setFocus(false);
  }, []);

  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const submit = (value: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value) {
      newSearchParams.set(name, value);
      newSearchParams.set("page", "1");
    }

    if (!value && newSearchParams.has(name) && name !== "sort_by") {
      newSearchParams.delete(name);
    }

    if (!value && name === "sort_by") {
      newSearchParams.set(name, "popularity.desc");
      newSearchParams.set("page", "1");
    }

    const route = `/movies?${newSearchParams.toString()}`;

    replace(route, { scroll: false });
  };

  return { focused, focus, blur, submit };
};

export default useSelectField;
