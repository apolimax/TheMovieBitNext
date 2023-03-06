import getMovie from "@/api/getMovie";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (movieId: string) => {
  return useQuery(["movie", movieId], () => getMovie(movieId));
};
