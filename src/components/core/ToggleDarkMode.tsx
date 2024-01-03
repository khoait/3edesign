import { clsx } from "clsx";
import { useEffect, useState } from "react";
import * as usehooks from "usehooks-ts";
import { Theme } from "./theme";

const iconTransformOrigin = { transformOrigin: "50% 100px" };
export default function ToggleDarkMode({
  moonIcon,
  sunIcon,
}: {
  moonIcon?: React.ReactNode;
  sunIcon?: React.ReactNode;
}) {
  const { isDarkMode, toggle } = usehooks.useDarkMode();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(Theme.DARK);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
    }
  }, [isDarkMode]);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }
  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700 motion-reduce:duration-[0s]";
  return (
    <button
      onClick={toggle}
      className="border-secondary inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition hover:border-brand focus:border-brand focus:outline-none">
      <div className="relative h-6 w-6">
        <span
          className={clsx(
            iconSpanClassName,
            isDarkMode ? "rotate-0" : "rotate-90",
          )}
          style={iconTransformOrigin}>
          {moonIcon ?? "🌙"}
        </span>
        <span
          className={clsx(
            iconSpanClassName,
            !isDarkMode ? "rotate-0" : "-rotate-90",
          )}
          style={iconTransformOrigin}>
          {sunIcon ?? "☀️"}
        </span>
      </div>
    </button>
  );
}
