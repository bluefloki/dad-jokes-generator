import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-800 dark:text-white transition-all ease-in-out duration-300">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
