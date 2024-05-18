import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useSelectMulti = (name: string) => {
  const [focused, setFocus] = useState<boolean>(false);

  const focus = useCallback(() => {
    setFocus(true);
  }, []);

  const blur = useCallback(() => {
    setFocus(false);
  }, []);

  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const submit = (value: string[]) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value.length > 0) {
      newSearchParams.set(name, value.join());
      newSearchParams.set("page", "1");
    }

    if (value.length === 0 && newSearchParams.has(name)) {
      newSearchParams.delete(name);
    }

    const route = `/movies?${newSearchParams.toString()}`;

    replace(route, { scroll: false });
  };

  return { focused, focus, blur, submit };
};

export default useSelectMulti;
