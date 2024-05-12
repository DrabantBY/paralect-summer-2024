import { Box } from "@mantine/core";
import Empty from "../empty";
import emptyStateImage from "@/public/empty-state.png";

const EmptyState = () => {
  return (
    <Box className="center">
      <Empty
        src={emptyStateImage}
        label="Find movies"
        message="You haven't rated any films yet"
        width={310}
      />
    </Box>
  );
};

export default EmptyState;
