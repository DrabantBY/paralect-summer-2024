import { Loader } from '@mantine/core';

const Loading = () => {
  return (
    <Loader
      className="center"
      size="xl"
      pos="absolute"
      top="50%"
      left="50%"
      color="purple.4"
    />
  );
};

export default Loading;
