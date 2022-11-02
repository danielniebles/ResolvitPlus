const getByParams = ({
  queryString,
  page,
}: {
  queryString?: string;
  page: number;
}) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie${queryString}&page=${page}&api_key=242a07149424a40e14eefd5203f6709e`
  )
    .then((res) => res.json())
    .then(({ results }) => results);
};

export default getByParams;