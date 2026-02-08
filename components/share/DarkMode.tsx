"use client";
import { useState } from "react";
import IconMoon from "../ui/icon/icon-moon";
import IconSun from "../ui/icon/icon-sun";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <IconSun />
      <div
        className={`bg-background relative flex h-6 w-12 items-center rounded-xl`}
      >
        <button
          onClick={() => setDarkMode((dark) => !dark)}
          className={`absolute ${darkMode ? "left-5.5" : "left-0"} bg-primary mx-1.5 size-3.5 cursor-pointer rounded-full transition-all duration-200`}
        />
      </div>
      <IconMoon />
    </div>
  );
}

export default DarkMode;
