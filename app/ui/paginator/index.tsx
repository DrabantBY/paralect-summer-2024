"use client";

import { memo } from "react";
import { Pagination } from "@mantine/core";
import usePaginator from "@/app/lib/hooks/use-paginator";

const styles = {
  control: { fontSize: "var(--mantine-font-size-sm)" },
};

type PaginatorPropsType = {
  total: number;
};

const Paginator = memo((props: PaginatorPropsType) => {
  const pagination = usePaginator();

  return (
    <Pagination
      {...props}
      {...pagination}
      gap="md"
      size="md"
      radius="sm"
      color="purple.5"
      styles={styles}
    />
  );
});

export default Paginator;
