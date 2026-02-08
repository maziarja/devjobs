"use server";

import connectDB from "@/lib/database";
import { jobsCardSchema } from "@/lib/schemas/jobSchema";
import { Devjobs } from "@/models/Devjobs";

export async function getJobs() {
  await connectDB();
  const jobs = await Devjobs.find()
    .lean()
    .select([
      "company",
      "postedAt",
      "contract",
      "position",
      "location",
      "logo",
      "logoBackground",
    ]);

  const plainJobs = jobs.map((data) => {
    return {
      ...data,
      _id: data._id.toString(),
    };
  });

  const validJobs = jobsCardSchema.safeParse(plainJobs);

  if (!validJobs.success) {
    console.error(validJobs.error);
    throw new Error(validJobs.error.issues[0].message);
  }

  return validJobs.data;
}
