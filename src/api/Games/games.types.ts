//typescript types:
export interface GameRespnseType {
  _id: string;
  title: string;
  description: string;
  price: number;
  img?: string;
  developer: string;
  featured: boolean;
  date:string
  genre1:string
  genre2:string
  genre3:string
  genre4:string
}

export interface GamesRespnseType {
  games: GameRespnseType[];
}

export interface AddGameRequest {
  title: string;
  description: string;
  price: number;
  developer: string;
  img: string;
  featured: boolean;
  date:string
  genre1:string
  genre2:string
  genre3:string
  genre4:string
}
