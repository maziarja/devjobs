import { Skeleton } from "@/components/ui/skeleton";
import Header from "../share/Header";

export default function JobPageSkeleton() {
  return (
    <div className="space-y-6">
      <Header>
        <div className="mx-auto mt-6.25 w-full max-w-182.5 md:mt-0">
          <div className="bg-card relative rounded-md px-8 pb-8 md:flex md:items-center md:gap-10 md:px-0 md:pb-0">
            <Skeleton className="bg-card h-35 w-full" />
          </div>
        </div>
      </Header>
    </div>
  );
}
