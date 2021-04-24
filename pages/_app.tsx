import "tailwindcss/tailwind.css";
import { useRef } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

function MyApp({ Component, pageProps }) {
  const queryClientRef: any = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <div className="dark:bg-gray-800 dark:text-white transition-all ease-in-out duration-300">
            <Component {...pageProps} />
          </div>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
