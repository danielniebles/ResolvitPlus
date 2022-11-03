import { Backdrop } from "./Backdrop";
import Genre from "./Genre";

export interface RawMovie {
  genres: Genre[];
  vote_average: number;
  original_title: string;
  poster_path: string;
  backdrops?: { width: number; file_path: string }[];
  overview?: string;
  id: number;
  images: { backdrops: Backdrop[] }
  release_date?: string;
  revenue?: number;
  tagline?: string;
  runtime?: string;
}