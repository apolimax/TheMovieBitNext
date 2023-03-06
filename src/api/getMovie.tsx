import api from "./api";

export default async function getMovie(movieId: string) {
  const { data } = await api.get(
    `/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&append_to_response=credits,recommendations,release_dates,videos`
  );

  return data;
}
