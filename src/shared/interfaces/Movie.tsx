import { Backdrop } from "./Backdrop";
import Genre from "./Genre";

export interface Movie {
  genres?: Genre[];
  rating?: number;
  title: string;
  posterPath?: string;
  backdrops?: Backdrop[];
  overview?: string;
  id?: number;
}