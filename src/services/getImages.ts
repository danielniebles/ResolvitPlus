const getImages = ({ movieId }: { movieId: number }) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=242a07149424a40e14eefd5203f6709e`
  )
    .then((res) => res.json())
    .then(({ backdrops }) => backdrops);
};

export default getImages;
