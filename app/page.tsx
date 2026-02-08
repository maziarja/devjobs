import JobsContainer from "@/components/home/JobsContainer";
import Header from "@/components/share/Header";
import { getJobs } from "./_actions/getJobs";
import { Button } from "@/components/ui/button";
import FilterJobs from "@/components/home/FilterJobs";

async function Page() {
  const jobs = await getJobs();

  return (
    <section>
      <Header>
        <FilterJobs />
      </Header>
      <div className="mt-24.25 flex max-w-292 flex-col gap-10 pb-20 md:mt-27.5 md:gap-14 md:pb-16.25 lg:mx-auto">
        <JobsContainer jobs={jobs} />
        <Button
          size={"xl"}
          className="mx-auto cursor-pointer hover:bg-indigo-300"
        >
          <span className="text-preset-4-bold">Load More</span>
        </Button>
      </div>
    </section>
  );
}

export default Page;
