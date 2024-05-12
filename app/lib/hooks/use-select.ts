import { useState, useCallback, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useSelect = (name: string) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [focused, setFocus] = useState<boolean>(false);

  const submit = (value: string | null) => {
    if (!value) {
      return;
    }
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, `${value}`);
    const route = `/movies?${newSearchParams.toString()}`;

    replace(route);
  };

  const focus = useCallback(() => {
    setFocus(true);
  }, []);

  const blur = useCallback(() => {
    setFocus(false);
  }, []);

  return { focused, focus, blur, submit };
};

export default useSelect;
