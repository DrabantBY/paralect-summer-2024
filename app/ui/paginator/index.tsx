"use client";

import { memo } from "react";
import { Pagination } from "@mantine/core";
import usePaginator from "@/app/lib/hooks/use-paginator";

import classes from "./styles.module.css";

type PaginatorPropsType = {
  total: number;
};

const Paginator = memo((props: PaginatorPropsType) => {
  const pagination = usePaginator();

  return (
    <Pagination
      classNames={classes}
      {...props}
      {...pagination}
      gap="md"
      size="md"
      radius="sm"
      color="purple.5"
      boundaries={0}
      siblings={1}
    />
  );
});

export default Paginator;
