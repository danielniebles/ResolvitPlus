const getAllGenres = () => {
  return fetch(`http://localhost:3000/genres`)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getAllGenres;
