const getMoviesByKeyword = ({ page, keyword }: { page: number; keyword: string }) => {
  return fetch(`${import.meta.env.VITE_MOVIES_API}/movies?search=${keyword}&page=${page}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getMoviesByKeyword;
