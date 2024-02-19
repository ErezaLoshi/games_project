import { apiRequest } from "../Api";
import { AddGameRequest, GamesRespnseType } from "./games.types";

//funksionet me endpointa edhe metoda
export const allGames = async () =>
  await apiRequest<{}, GamesRespnseType>({
    url: "api/games",
  });

export const createGame = async (game: AddGameRequest) =>
  await apiRequest<{ game: AddGameRequest }, { game: AddGameRequest }>({
    url: "api/games",
    method: "POST",
    data: { game },
  });

export const editGame = async (id: string, game: AddGameRequest) =>
  await apiRequest<{ game: AddGameRequest }, { game: AddGameRequest }>({
    url: `api/games/${id}`,
    method: "PUT",
    data: { game },
  });

export const deleteGameApi = async (id: string) =>
  await apiRequest<{}, GamesRespnseType>({
    url: `api/games/${id}`,
    method: "DELETE",
  });
