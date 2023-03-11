import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/RickAndMorty";

export const RickAndMortyQuery = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["rickAndMorty", "characters"],
    queryFn: getCharacters,
  });

  if (isLoading) return <p className="text-red-500">Loading...</p>;

  if (isError) return <p className="text-red-500">Error</p>;

  return <p className="text-green-500">{data.results[0].name}</p>;
};
