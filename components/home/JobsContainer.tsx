"use client";

import { JobCardType } from "@/lib/schemas/jobSchema";
import JobCard from "./JobCard";
import { useState } from "react";
import { Button } from "../ui/button";
import { getJobs } from "@/app/_actions/getJobs";

type Props = {
  jobs: JobCardType[];
  nextCursor: string | null;
  filter: {
    title?: string;
    location?: string;
    fullTime?: boolean;
  };
};

function JobsContainer({ jobs, nextCursor, filter }: Props) {
  const [jobsState, setJobsState] = useState(jobs);
  const [cursor, setCursor] = useState(nextCursor);
  const [loading, setLoading] = useState(false);

  async function handleLoadMore() {
    if (!cursor) return;

    setLoading(true);

    // Fetch next batch from server action
    const { jobs: newJobs, nextCursor: newCursor } = await getJobs(
      filter,
      cursor,
    );

    setJobsState((prev) => [...prev, ...newJobs]);
    setCursor(newCursor);
    setLoading(false);
  }

  return (
    <>
      <div className="grid gap-12.25 px-6 md:grid-cols-2 md:gap-x-2.5 md:gap-y-16.25 md:px-7.25 lg:grid-cols-3 lg:gap-x-7.5">
        {jobsState.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
      {cursor && (
        <Button
          onClick={handleLoadMore}
          size="xl"
          className="mx-auto cursor-pointer hover:bg-indigo-300"
          disabled={loading}
        >
          <span className="text-preset-4-bold">
            {loading ? "Loading..." : "Load More"}
          </span>
        </Button>
      )}
    </>
  );
}

export default JobsContainer;
