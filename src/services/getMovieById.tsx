const getMovieById = ({ id }: { id: string }) => {
  return fetch(`${import.meta.env.VITE_MOVIES_API}/movies/${id}`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getMovieById;
