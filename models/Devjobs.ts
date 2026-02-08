import mongoose, { Model, models, Schema } from "mongoose";

export type DevjobsType = {
  _id: Schema.Types.ObjectId;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: "Full Time" | "Part Time" | "Freelance";
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};

const devjobsSchema = new Schema<DevjobsType>(
  {
    company: { type: String, required: true },
    logo: { type: String, required: true },
    logoBackground: { type: String, required: true },
    position: { type: String, required: true },
    postedAt: { type: String, required: true },
    contract: {
      type: String,
      enum: ["Full Time", "Part Time", "Freelance"],
      required: true,
    },
    location: { type: String, required: true },
    website: { type: String, required: true },
    apply: { type: String, required: true },
    description: { type: String, required: true },
    requirements: {
      content: { type: String, required: true },
      items: { type: [String], required: true },
    },
    role: {
      content: { type: String, required: true },
      items: { type: [String], required: true },
    },
  },
  { timestamps: true },
);

export const Devjobs: Model<DevjobsType> =
  models.Devjobs || mongoose.model<DevjobsType>("Devjobs", devjobsSchema);
