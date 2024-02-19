import React, { useContext } from "react";
import { AddGameRequest, GameRespnseType, GamesRespnseType } from "../../../api/Games/games.types";
import { FormDataType } from "../../../components/GameForm/GameForm";


interface GameContextType {
  games: GameRespnseType[];
  addNewGame: (form: AddGameRequest) => void;
  updateGame: (id: string, form: FormDataType) => void;
  deleteGame: (id: string) => void;
  selectedGame?: GameRespnseType;
  selectGame: (id: string) => void;
  toggleFeatured: (id: string) => void;
}

const values: GameContextType = {
  games: [],
  addNewGame: () => {},
  updateGame: () => {},
  selectedGame: undefined,
  selectGame: (id: string) => {},
  deleteGame: (id: string) => {},
  toggleFeatured: (id: string) => {},
};

export const GamesContext = React.createContext<GameContextType>(values);

export const useGamesContext = () => useContext(GamesContext);
