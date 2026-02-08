import { JobCardType } from "@/lib/schemas/jobSchema";
import JobCard from "./JobCard";

type Props = {
  jobs: JobCardType[];
};

function JobsContainer({ jobs }: Props) {
  return (
    <div className="grid gap-12.25 px-6 md:grid-cols-2 md:gap-x-2.5 md:gap-y-16.25 md:px-7.25 lg:grid-cols-3 lg:gap-x-7.5">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default JobsContainer;
