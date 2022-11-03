const getByParams = ({
  queryString,
  page,
}: {
  queryString?: string;
  page: number;
}) => {
  return fetch(`${import.meta.env.VITE_MOVIES_API}/movies/advanced/${queryString}&page=${page}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getByParams;
