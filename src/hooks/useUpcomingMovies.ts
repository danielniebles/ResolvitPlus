import { useEffect, useState } from "react";
import getImages from "../services/getImages";
import getUpcoming from "../services/getUpcoming";

const useUpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [modifiedMovies, setModifiedMovies] = useState([]);

  // TODO: Add type for this response
  useEffect(() => {
    getUpcoming().then((res) => setUpcomingMovies(res as any));
  }, []);

  useEffect(() => {
    const sortedMovies = upcomingMovies.slice(0,5).sort(
      (a, b) => b.vote_average - a.vote_average
    );
    console.log(sortedMovies)
    setModifiedMovies(sortedMovies);
  }, [upcomingMovies]);

  return { upcomingMovies: modifiedMovies };
};

export default useUpcomingMovies;
