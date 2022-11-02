const getMovies = ({
  type,
  page,
  version,
}: {
  type: string;
  page: number;
  version: string;
}) => {
  return fetch(`http://localhost:3000/movies/${version}/${type}?page=${page}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getMovies;
