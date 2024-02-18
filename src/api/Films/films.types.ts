//typescript types:
export interface FilmRespnseType {
  _id: string;
  title: string;
  description: string;
  price: number;
  director: string;
  duration: number;
}

export interface FilmsRespnseType {
  films: FilmRespnseType[];
}
