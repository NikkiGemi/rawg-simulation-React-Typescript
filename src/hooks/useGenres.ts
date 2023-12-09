import genres from "../data/genres";

export interface Genre {
  id: number;
  name: String;
  image_background: string;
}

const useGenres = () => ({
  data: genres,
  error: null,
  loading: false,
});

export default useGenres;
