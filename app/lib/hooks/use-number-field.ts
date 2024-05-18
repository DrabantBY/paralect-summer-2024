import { useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "@mantine/hooks";
import type { NumberInputHandlers } from "@mantine/core";

const useNumberField = (name: string) => {
  const searchParams = useSearchParams();

  const handlersRef = useRef<NumberInputHandlers>(null);

  const { replace } = useRouter();

  const increment = useCallback(() => {
    handlersRef.current?.increment();
  }, []);

  const decrement = useCallback(() => {
    handlersRef.current?.decrement();
  }, []);

  const handlers = { increment, decrement };

  const onChange = useDebouncedCallback((value: string | number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value) {
      newSearchParams.set(name, `${value}`);
      newSearchParams.set("page", "1");
    }

    if (!value) {
      newSearchParams.delete(name);
    }

    const route = `/movies?${newSearchParams.toString()}`;

    replace(route, { scroll: false });
  }, 200);

  return { handlers, handlersRef, onChange };
};

export default useNumberField;
