import getImages from "./getImages";

const getUpcoming = async () => {
  let extended = [];
  const ids = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=242a07149424a40e14eefd5203f6709e"
  )
    .then((res) => res.json())
    .then(({ results }) => results);

  for (let i = 0; i < ids.length; i++) {
    const backdrops = await getImages({ movieId: ids[i].id });
    extended.push({ ...ids[i], backdrops });
  }

  return extended || []
};

export default getUpcoming;
