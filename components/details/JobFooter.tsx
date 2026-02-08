function JobFooter({
  applyWebsite,
  jobPosition,
}: {
  applyWebsite: string;
  jobPosition: string;
}) {
  return (
    <div className="mx-auto max-w-202.5 rounded-t-md px-6 py-6.5 md:flex md:items-center md:justify-between md:px-10 lg:py-5">
      <div className="hidden space-y-1.5 md:block">
        <p className="text-preset-3 text-foreground">{jobPosition}</p>
        <p className="text-preset-4 text-card-foreground">So Digital Inc.</p>
      </div>
      <a
        href={applyWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-primary/80 text-neutral-0 flex h-11 items-center justify-center rounded-md px-8"
      >
        <span className="text-preset-4-bold">Apply Now</span>
      </a>
    </div>
  );
}

export default JobFooter;
