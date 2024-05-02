import { Title, Center, rem } from '@mantine/core';
import Empty from '@/app/ui/empty';
import emptyStateImage from '@/public/empty-state.png';

export default async function RatedPage() {
  return (
    <Empty
      src={emptyStateImage}
      label="Find movies"
      message="You haven't rated any films yet"
    />
    // <Center mt={rem(40)}>
    //   <Title fz="xl">Rated movies</Title>
    // </Center>
  );
}
