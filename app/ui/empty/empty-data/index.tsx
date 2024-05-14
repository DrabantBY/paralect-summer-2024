import Empty from "..";
import emptyDataImage from "@/public/empty-data.png";

const EmptyData = () => {
  return (
    <Empty
      src={emptyDataImage}
      message="We don't have such movies, look for another one"
      width={310}
    />
  );
};

export default EmptyData;
