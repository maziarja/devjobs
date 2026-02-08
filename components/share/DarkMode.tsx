"use client";
import { useEffect, useState } from "react";
import IconMoon from "../ui/icon/icon-moon";
import IconSun from "../ui/icon/icon-sun";
import { useTheme } from "next-themes";

function DarkMode() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  function handleDarkMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4">
      <IconSun />
      <div
        className={`bg-background relative flex h-6 w-12 items-center rounded-xl`}
      >
        <button
          onClick={handleDarkMode}
          className={`absolute ${theme === "dark" ? "translate-x-6" : "translate-x-0"} bg-primary mx-1.5 size-3.5 cursor-pointer rounded-full transition-all duration-200`}
        />
      </div>
      <IconMoon />
    </div>
  );
}

export default DarkMode;
