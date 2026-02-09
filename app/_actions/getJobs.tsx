"use server";

import { LIMIT } from "@/lib/const";
import connectDB from "@/lib/database";
import { jobsCardSchema } from "@/lib/schemas/jobSchema";
import { Devjobs } from "@/models/Devjobs";
import { Types } from "mongoose";

type Filter = {
  title?: string;
  location?: string;
  fullTime?: boolean;
};

export async function getJobs(filter: Filter, cursor?: string) {
  const queryFilter = {
    ...(filter.title && {
      $or: [
        { company: { $regex: filter.title, $options: "i" } },
        { position: { $regex: filter.title, $options: "i" } },
      ],
    }),

    ...(filter.location && {
      location: { $regex: filter.location, $options: "i" },
    }),

    ...(filter.fullTime && {
      contract: filter.fullTime && "Full Time",
    }),

    ...(cursor && { _id: { $lt: new Types.ObjectId(cursor) } }),
  };

  await connectDB();
  const jobs = await Devjobs.find(queryFilter)
    .select([
      "company",
      "postedAt",
      "contract",
      "position",
      "location",
      "logo",
      "logoBackground",
    ])
    .sort({ _id: -1 })
    .limit(LIMIT + 1)
    .lean();

  const hasMore = jobs.length > LIMIT;
  if (hasMore) jobs.pop();

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

  return {
    jobs: validJobs.data,
    nextCursor: hasMore
      ? validJobs.data[validJobs.data.length - 1]._id.toString()
      : null,
  };
}
