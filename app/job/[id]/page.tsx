import { getJobById } from "@/app/_actions/getJobById";
import JobDetails from "@/components/details/JobDetails";
import JobFooter from "@/components/details/JobFooter";
import JobHeader from "@/components/details/JobHeader";
import Header from "@/components/share/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function Page({ params }: Props) {
  const { id } = await params;
  const job = await getJobById(id);

  return (
    <section className="space-y-6">
      <Header>
        <JobHeader job={job} />
      </Header>
      <div className="mx-auto mt-53.25 max-w-202.5 px-6 md:mt-33 md:px-10">
        <JobDetails job={job} />
      </div>
      <div className="bg-card mt-16">
        <JobFooter applyWebsite={job.apply} jobPosition={job.position} />
      </div>
    </section>
  );
}

export default Page;
