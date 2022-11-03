import { useEffect, useState } from "react";
import getAllGenres from "../services/getGenres";
import Genre from "../shared/interfaces/Genre";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getAllGenres().then((res) => {
      setLoading(false);
      setGenres(res);
    });
  }, []);

  return { genres, loading };
};

export default useGenres;
