import EmptyState from "@/app/ui/empty-state";
import RatedList from "@/app/ui/rated-list";

export default async function RatedPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <RatedList page={searchParams?.page ?? "1"}>
      <EmptyState />
    </RatedList>
  );
}
