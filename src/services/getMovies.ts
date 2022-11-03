const getMovies = ({
  type,
  page,
  version,
}: {
  type: string;
  page: number;
  version: string;
}) => {
  return fetch(`${import.meta.env.VITE_MOVIES_API}/movies/${version}/${type}?page=${page}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getMovies;
