import { useQuery } from "react-query";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

export const Jokes = async () => {
  try {
    const { data } = await axios.get(url, {
      headers: { Accept: "application/json" },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useJokes = () => useQuery("Jokes", Jokes);
