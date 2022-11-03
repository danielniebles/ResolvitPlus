const getAllGenres = () => {
  return fetch(`${import.meta.env.VITE_MOVIES_API}/genres`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getAllGenres;
