import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import IconFilter from "../ui/icon/icon-filter";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import IconLocation from "../ui/icon/icon-location";
import { useSearchParams } from "next/navigation";

type Props = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileFilterDialog({ checked, setChecked }: Props) {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="md:hidden">
          <IconFilter />
        </div>
      </DialogTrigger>
      <DialogContent showCloseButton={false} aria-describedby={undefined}>
        <VisuallyHidden>
          <DialogTitle>Filter</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 px-6">
            <div>
              <IconLocation />
            </div>
            <input
              form="filter-jobs-form"
              type="text"
              name="location-mobile"
              id="location-mobile"
              defaultValue={location || ""}
              placeholder="Filter by location..."
              className="text-preset-4 block text-slate-900 caret-indigo-500 outline-none"
            />
          </div>
          <div className="bg-card-foreground h-px w-full opacity-20" />
          <div className="flex items-center gap-4 px-6">
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
              Full Time Only
            </label>
          </div>
        </div>
        <DialogFooter className="px-6">
          <Button
            form="filter-jobs-form"
            type="submit"
            name="submitType"
            value={"mobile"}
            className="text-preset-4-bold! w-full"
          >
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MobileFilterDialog;
