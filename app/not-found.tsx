import { Box } from '@mantine/core';
import Logo from './ui/logo';
import Empty from './ui/empty';
import notFoundImage from '@/public/empty-page.png';

const NotFound = () => {
  return (
    <>
      <Box p="xxl">
        <Logo />
      </Box>

      <Box className="center">
        <Empty
          src={notFoundImage}
          label="Go Home"
          message="We can’t find the page you are looking for"
          width={656}
        />
      </Box>
    </>
  );
};

export default NotFound;
