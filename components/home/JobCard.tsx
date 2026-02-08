import { JobCardType } from "@/lib/schemas/jobSchema";
import Link from "next/link";
import JobLogo from "../ui/JobLogo";

type Props = {
  job: JobCardType;
};

function JobCard({ job }: Props) {
  return (
    <Link
      href={`/job/${job._id}`}
      className="bg-card relative flex flex-col rounded-lg px-8 pb-5.25"
    >
      <div className="absolute -translate-y-1/2">
        <JobLogo
          logo={job.logo}
          logoBackground={job.logoBackground}
          company={job.company}
        />
      </div>

      <div className="mt-12.25 grid h-full gap-10">
        <div className="space-y-3">
          <div className="text-preset-4 text-card-foreground flex items-center gap-3">
            <p>{job.postedAt}</p>
            <div className="bg-card-foreground size-1 rounded-full" />
            <p>{job.contract}</p>
          </div>
          <p className="text-preset-3 text-foreground line-clamp-2">
            {job.position}
          </p>
          <p className="text-preset-4 text-card-foreground">{job.company}</p>
        </div>
        <p className="text-preset-5 text-primary mt-auto">{job.location}</p>
      </div>
    </Link>
  );
}

export default JobCard;
