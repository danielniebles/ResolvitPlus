const getByParams = ({
  queryString,
  page,
}: {
  queryString?: string;
  page: number;
}) => {
  return fetch(`http://localhost:3000/movies/advanced/${queryString}&page=${page}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getByParams;
