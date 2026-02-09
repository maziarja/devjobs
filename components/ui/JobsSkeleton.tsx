// components/home/JobsSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import Header from "../share/Header";
import FilterJobs from "../home/FilterJobs";

export default function JobsSkeleton() {
  return (
    <>
      <Header>
        <FilterJobs />
      </Header>
      <div className="mt-24.25 flex max-w-292 flex-col gap-10 pb-20 md:mt-27.5 md:gap-14 md:pb-16.25 lg:mx-auto">
        <div className="grid gap-12.25 px-6 md:grid-cols-2 md:gap-x-2.5 md:gap-y-16.25 md:px-7.25 lg:grid-cols-3 lg:gap-x-7.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="bg-card relative flex animate-pulse flex-col rounded-lg px-8 pb-5.25"
            >
              <div className="absolute -translate-y-1/2">
                <Skeleton className="h-12 w-12 rounded-2xl" />
              </div>

              <div className="mt-12.25 grid h-full gap-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-4 w-16 rounded" />
                    <Skeleton className="size-1 rounded-full" />
                    <Skeleton className="h-4 w-12 rounded" />
                  </div>
                  <Skeleton className="h-5 w-full rounded" />
                  <Skeleton className="h-4 w-3/4 rounded" />
                </div>
                <Skeleton className="mt-auto h-4 w-1/2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
