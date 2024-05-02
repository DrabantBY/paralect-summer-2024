import { Box } from '@mantine/core';
import Logo from './ui/logo';
import Empty from './ui/empty';
import notFoundImage from '@/public/empty-page.png';

const NotFound = () => {
  return (
    <>
      <Box p="xl">
        <Logo />
      </Box>
      <Empty
        src={notFoundImage}
        label="Go Home"
        message="We can’t find the page you are looking for"
      />
    </>
  );
};

export default NotFound;
