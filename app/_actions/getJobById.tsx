"use server";

import connectDB from "@/lib/database";
import { jobSchema } from "@/lib/schemas/jobSchema";
import { Devjobs } from "@/models/Devjobs";

export async function getJobById(id: string) {
  await connectDB();

  const job = await Devjobs.findById(id).lean();

  const plainJob = {
    ...job,
    _id: job?._id.toString(),
  };
  const validJob = jobSchema.safeParse(plainJob);

  if (!validJob.success) {
    console.error(validJob.error);
    throw new Error(validJob.error.issues[0].message);
  }

  return validJob.data;
}
