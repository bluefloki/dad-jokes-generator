import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { FiGithub, FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  // State
  const [isMounted, setIsMounted] = useState<boolean>();
  const { theme, setTheme } = useTheme();

  // Refs
  const themeButtonRef = useRef(null);

  // Mounted
  useEffect(() => {
    setIsMounted(() => true);
  }, []);

  // Functions
  const switchTheme = () =>
    isMounted && setTheme(theme === "light" ? "dark" : "light");

  // HTML
  return (
    <div className="absolute top-0 right-0 left-0">
      <nav className="flex flex-row md:items-center md:justify-between px-8 py-4 md:px-36 mx-auto md:py-6">
        <div>Logo</div>
        <a className="text-2xl" href="https://github.com" target="_blank">
          <FiGithub
            className="transition-all ease-in-out duration-300
            hover:text-purple-500 dark:hover:text-purple-400
          "
          />
        </a>
        <button
          ref={themeButtonRef}
          onClick={() => {
            if (themeButtonRef !== null && themeButtonRef !== undefined)
              themeButtonRef.current.blur();
            switchTheme();
          }}
          className="text-2xl"
        >
          {theme === "light" ? (
            <FiMoon
              className="transition-all ease-in-out duration-300
            hover:text-purple-500 dark:hover:text-purple-400
          "
            />
          ) : (
            <FiSun
              className="transition-all ease-in-out duration-300
            hover:text-purple-500 dark:hover:text-purple-400
          "
            />
          )}
        </button>
      </nav>
    </div>
  );
}
