import { JobsType } from "@/lib/schemas/jobSchema";

type Props = {
  job: JobsType;
};

function JobDetails({ job }: Props) {
  return (
    <div className="bg-card space-y-8 rounded-md px-6 py-10 md:space-y-10 md:p-11">
      <div className="flex flex-col gap-14 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 md:space-y-1.5">
          <div className="text-preset-4 text-card-foreground 1 flex items-center gap-3">
            <p>{job.postedAt}</p>
            <div className="bg-card-foreground size-1 rounded-full" />
            <p>{job.contract}</p>
          </div>
          <p className="text-preset-3 md:text-preset-1 text-foreground">
            {job.position}
          </p>
          <p className="text-preset-5 text-primary">{job.location}</p>
        </div>
        <a
          href={job.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/80 text-neutral-0 flex h-11 items-center justify-center rounded-md px-8"
        >
          <span className="text-preset-4-bold">Apply Now</span>
        </a>
      </div>
      <div className="space-y-14 md:space-y-11">
        <p className="text-preset-4 text-card-foreground">{job.description}</p>
        <div className="space-y-8 md:space-y-6">
          <div className="space-y-6">
            <p className="text-preset-3 text-foreground">Requirements</p>
            <p className="text-preset-4 text-card-foreground">
              {job.requirements.content}
            </p>
          </div>
          <ul className="text-preset-4 text-card-foreground flex flex-col gap-2">
            {job.requirements.items.map((item, i) => (
              <li key={i} className="flex gap-8">
                <span className="bg-primary mt-2.5 size-1 shrink-0 rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8 md:space-y-6">
          <div className="space-y-6">
            <p className="text-preset-3 text-foreground">What You Will Do</p>
            <p className="text-preset-4 text-card-foreground">
              {job.role.content}
            </p>
          </div>
          <ul className="text-preset-4 text-card-foreground flex flex-col gap-2">
            {job.role.items.map((item, i) => (
              <li key={i} className="flex gap-8">
                <span className="text-primary text-preset-4-bold mt-0.5">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
