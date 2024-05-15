import dynamic from "next/dynamic";
import EmptyData from "@/app/ui/empty/empty-data";
import EmptyState from "@/app/ui/empty/empty-state";

const RatedList = dynamic(() => import("@/app/ui/rated-list"), { ssr: false });

export default async function RatedPage() {
  return (
    <RatedList>
      <EmptyState />
      <EmptyData />
    </RatedList>
  );
}
