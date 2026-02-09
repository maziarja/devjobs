"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  message?: string;
  actionText?: string;
};

const EmptyState: React.FC<Props> = ({
  message = "No jobs found.",
  actionText = "Reset Filters",
}) => {
  const router = useRouter();

  return (
    <div className="bg-card mx-6 flex flex-col items-center justify-center gap-6 rounded-lg p-12 text-center md:mx-10 lg:mx-8">
      <div className="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
        <span className="text-muted-foreground text-4xl">😔</span>
      </div>
      <p className="text-preset-3 text-foreground">{message}</p>
      <Button size={"xl"} onClick={() => router.push("/")}>
        <span className="text-preset-4-bold">{actionText}</span>
      </Button>
    </div>
  );
};

export default EmptyState;
