const buildImageUrl = ({
  width,
  imgPath,
}: {
  width: number;
  imgPath: string;
}) => `https://image.tmdb.org/t/p/w${width}${imgPath}`;

export default buildImageUrl;
