import Navbar from "../components/Navbar";
import { useJokes, Jokes } from "../hooks/useJokes";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function home() {
  const { data } = useJokes();
  data && console.log(data);

  return (
    <div className="grid place-items-center h-screen px-8 md:px-36 mx-auto pt-4 md:pt-0 md:pb-10">
      <Navbar />
      <div className="text-3xl">
        {data ? <div>{data.joke}</div> : <div>THis works</div>}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("Jokes", Jokes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
