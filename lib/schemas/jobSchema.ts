import z from "zod";

export const jobSchema = z.object({
  _id: z.string(),
  company: z.string(),
  logo: z.string(),
  logoBackground: z.string(),
  position: z.string(),
  postedAt: z.string(),
  contract: z.enum(["Full Time", "Part Time", "Freelance"]),
  location: z.string(),
  website: z.string(),
  apply: z.string(),
  description: z.string(),
  requirements: z.object({
    content: z.string(),
    items: z.array(z.string()),
  }),
  role: z.object({
    content: z.string(),
    items: z.array(z.string()),
  }),
});

export type JobsType = z.infer<typeof jobSchema>;

export const jobsSchema = z.array(jobSchema);

export const jobCardSchema = jobSchema.pick({
  _id: true,
  company: true,
  logo: true,
  postedAt: true,
  position: true,
  logoBackground: true,
  contract: true,
  location: true,
});

export type JobCardType = z.infer<typeof jobCardSchema>;
export const jobsCardSchema = z.array(jobCardSchema);
