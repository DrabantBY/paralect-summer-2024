import { useRouter, useSearchParams, usePathname } from "next/navigation";

const usePaginator = () => {
  const { replace } = useRouter();

  const searchParams = useSearchParams();

  const pathName = usePathname();

  const page = Number(searchParams.get("page") ?? "1");

  const urlSearchParams = new URLSearchParams(searchParams);

  const setPage = (value: number) => {
    urlSearchParams.set("page", `${value}`);

    const url = `${pathName}?${urlSearchParams.toString()}`;

    replace(url);
  };

  const setNextPage = () => {
    setPage(page + 1);
  };

  const setPrevPage = () => {
    setPage(page - 1);
  };

  return {
    value: page,
    onChange: setPage,
    onNextPage: setNextPage,
    onPreviousPage: setPrevPage,
  };
};

export default usePaginator;
