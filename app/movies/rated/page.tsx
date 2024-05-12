import EmptyData from "@/app/ui/empty-data";
import EmptyState from "@/app/ui/empty-state";
import RatedList from "@/app/ui/rated-list";

export default async function RatedPage() {
  return (
    <RatedList>
      <EmptyState />
      <EmptyData />
    </RatedList>
  );
}
