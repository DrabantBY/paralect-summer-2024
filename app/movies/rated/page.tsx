import type { Metadata } from "next";
import dynamic from "next/dynamic";
import EmptyData from "@/app/ui/empty/empty-data";
import EmptyState from "@/app/ui/empty/empty-state";

export const metadata: Metadata = {
  title: "page | rated movies",
  description: "",
};

const RatedList = dynamic(() => import("@/app/ui/rated-list"), { ssr: false });

export default async function RatedPage() {
  return (
    <RatedList>
      <EmptyState />
      <EmptyData />
    </RatedList>
  );
}
