import { JobsType } from "@/lib/schemas/jobSchema";
import JobLogo from "../ui/JobLogo";
import Image from "next/image";

type Props = {
  job: JobsType;
};

function JobHeader({ job }: Props) {
  return (
    <div className="mx-auto mt-6.25 w-full max-w-182.5 md:mt-0">
      <div className="bg-card relative rounded-md px-8 pb-8 md:flex md:items-center md:gap-10 md:px-0 md:pb-0">
        <div className="absolute right-1/2 translate-x-1/2 -translate-y-1/2 md:hidden">
          <JobLogo
            logo={job.logo}
            logoBackground={job.logoBackground}
            company={job.company}
          />
        </div>

        <div
          style={{ backgroundColor: job.logoBackground }}
          className="hidden size-35 items-center justify-center rounded-bl-md p-8 md:flex"
        >
          <Image
            src={job.logo}
            alt={`${job.company} logo`}
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 pt-12.25 text-center md:flex-1 md:flex-row md:justify-between md:space-y-0 md:pt-0 md:pr-9.25">
          <div className="space-y-2">
            <p className="text-preset-3 text-foreground md:text-preset-2">
              {job.company}
            </p>
            <p className="text-preset-4 text-card-foreground">
              {job.website.split("//")[1]}
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={job.website}
            className="bg-primary/10 hover:bg-primary/20 text-primary text-preset-4-bold inline-flex h-12 cursor-pointer items-center justify-center rounded-md px-5"
          >
            Company Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobHeader;
