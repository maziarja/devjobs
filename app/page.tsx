import JobsContainer from "@/components/home/JobsContainer";
import Header from "@/components/share/Header";
import { getJobs } from "./_actions/getJobs";
import FilterJobs from "@/components/home/FilterJobs";
import EmptyState from "@/components/home/EmptyState";

type Props = {
  searchParams: Promise<{
    title: string | undefined;
    location: string | undefined;
    fullTime: boolean | undefined;
  }>;
};

async function Page({ searchParams }: Props) {
  const { title, location, fullTime } = await searchParams;

  const filter = {
    title,
    location,
    fullTime,
  };

  const { jobs, nextCursor } = await getJobs(filter);

  return (
    <section>
      <Header>
        <FilterJobs />
      </Header>
      <div className="mt-24.25 flex max-w-292 flex-col gap-10 pb-20 md:mt-27.5 md:gap-14 md:pb-16.25 lg:mx-auto">
        {jobs.length > 0 ? (
          <JobsContainer
            key={JSON.stringify(filter)}
            jobs={jobs}
            nextCursor={nextCursor}
            filter={filter}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}

export default Page;
