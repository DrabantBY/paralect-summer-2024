'use client';

import { memo } from 'react';
import { Pagination } from '@mantine/core';
import usePaginator from '@/app/lib/hooks/use-paginator';

const Paginator = memo(({ total }: { total: number }) => {
  const { page, setPage, setPrevPage, setNextPage } = usePaginator();

  return (
    <Pagination
      value={page}
      onChange={setPage}
      onNextPage={setNextPage}
      onPreviousPage={setPrevPage}
      total={total}
      gap="md"
      size="md"
      radius="sm"
      color="purple.5"
      style={{
        fontSize: 'var(--mantine-font-size-sm)',
      }}
    />
  );
});

export default Paginator;
