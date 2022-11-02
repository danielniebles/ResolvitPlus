const getBySearch = ({ page, keyword }: { page: number; keyword: string }) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&page=${page}&api_key=242a07149424a40e14eefd5203f6709e`
  )
    .then((res) => res.json())
    .then(({ results }) => results);
};

export default getBySearch;
