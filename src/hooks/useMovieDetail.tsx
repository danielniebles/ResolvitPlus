import { useEffect, useState } from "react";
import getAllGenres from "../services/getGenres";
import getMovieById from "../services/getMovieById";
import Genre from "../shared/interfaces/Genre";
import { RawMovie } from "../shared/interfaces/RawMovie";

const useMovieDetail = ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<RawMovie>({} as RawMovie);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieById({ id }).then((res) => {
      setLoading(false);
      setMovie(res);
    });
  }, []);

  return { movie, loading };
};

export default useMovieDetail;
