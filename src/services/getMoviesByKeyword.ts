const getMoviesByKeyword = ({ page, keyword }: { page: number; keyword: string }) => {
  return fetch(`http://localhost:3000/movies?search=${keyword}&page=${page}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getMoviesByKeyword;
