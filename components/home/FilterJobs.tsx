"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import IconLocation from "../ui/icon/icon-location";
import IconSearch from "../ui/icon/icon-search";
import MobileFilterDialog from "./MobileFilterDialog";
import { useRouter, useSearchParams } from "next/navigation";

function FilterJobs() {
  const searchParams = useSearchParams();
  const fullTime = searchParams.get("full-time");
  const [checked, setChecked] = useState(fullTime === "true");
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const title = searchParams.get("title");
  const location = searchParams.get("location");

  useEffect(() => {
    setChecked(fullTime === "true");
  }, [fullTime]);

  function handleFilterJobs(formData: FormData) {
    const submitType = formData.get("submitType");
    const title = formData.get("title");

    if (title) {
      params.set("title", title.toString());
    } else {
      params.delete("title");
    }

    if (checked) {
      params.set("full-time", checked?.toString());
    } else {
      params.delete("full-time");
    }

    if (submitType === "mobile") {
      const location = formData.get("location-mobile");
      if (location) {
        params.set("location", location.toString());
      } else {
        params.delete("location");
      }
    }

    if (submitType === "desktop") {
      const location = formData.get("location");
      if (location) {
        params.set("location", location.toString());
      } else {
        params.delete("location");
      }
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <form
      id="filter-jobs-form"
      action={handleFilterJobs}
      className="bg-card border-border mx-auto w-full max-w-277.5 rounded-md has-[input:focus]:border-b-2"
    >
      <div className="flex items-center justify-between p-4 md:grid md:h-20 md:grid-cols-3 md:py-0 lg:grid-cols-[1.5fr_1fr_auto]">
        <div className="md:mr-6 md:flex md:h-full md:items-center md:gap-4 md:border-r-2">
          <div className="hidden md:block">
            <IconSearch />
          </div>
          <input
            name="title"
            type="text"
            id="title"
            defaultValue={title || ""}
            placeholder="Filter by title..."
            className="text-preset-4 text-foreground h-8 caret-indigo-500 outline-none"
          />
        </div>

        <div className="mr-6 hidden h-full items-center gap-4 border-r-2 md:flex">
          <div>
            <IconLocation />
          </div>
          <input
            type="text"
            name="location"
            id="location"
            defaultValue={location || ""}
            placeholder="Filter by location..."
            className="text-preset-4 text-foreground hidden h-8 caret-indigo-500 outline-none md:block"
          />
        </div>

        <div className="flex items-center gap-6">
          <MobileFilterDialog checked={checked} setChecked={setChecked} />
          <div className="hidden items-center gap-4 md:flex">
            <Checkbox
              checked={checked}
              onCheckedChange={() => setChecked((c) => !c)}
              id="full-time"
              name="full-time"
            />
            <label
              htmlFor="full-time"
              className="text-preset-4-bold text-foreground"
            >
              Full Time <span className="hidden lg:inline-block">Only</span>
            </label>
          </div>

          <button
            type="submit"
            name="submitType"
            value={"desktop"}
            className="bg-primary ml-auto flex size-12 cursor-pointer items-center justify-center rounded-md hover:bg-indigo-300 md:size-auto md:px-3.5 md:py-3 lg:px-8"
          >
            <div className="md:hidden">
              <IconSearch className="fill-neutral-0" />
            </div>
            <span className="text-preset-4-bold text-neutral-0 hidden md:inline-block">
              Search
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default FilterJobs;
