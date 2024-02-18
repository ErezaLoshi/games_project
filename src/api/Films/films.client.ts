import { apiRequest } from "../Api";
import { FilmsRespnseType } from "./films.types";

//funksionet me endpointa edhe metoda
export const allFilms = async () =>
  await apiRequest<{}, FilmsRespnseType>({
    url: "api/films",
  });

export const editFilm = async (id: string) =>
  await apiRequest<{}, FilmsRespnseType>({
    url: `api/films/${id}`,
    method: "PUT",
  });

export const deleteFilm = async (id: string) =>
  await apiRequest<{}, FilmsRespnseType>({
    url: `api/films/${id}`,
    method: "DELETE",
  });
