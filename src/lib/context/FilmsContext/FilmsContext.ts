import React, { useContext } from "react";
import { FormDataType } from "../../../components/FilmForm/FilmForm";
import { FilmInterface } from "../../../components/Films/FilmCard";

interface FilmContextType {
  films: FilmInterface[];
  addNewFilm: (form: FormDataType) => void;
  updateFilm: (id: string, form: FormDataType) => void;
  deleteFilm: (id: string) => void;
  selectedFilm?: FilmInterface;
  selectFilm: (id: string) => void;
  toggleFeatured: (id: string) => void;
}

const values = {
  films: [],
  addNewFilm: (form: FormDataType) => {},
  updateFilm: () => {},
  selectedFilm: undefined,
  selectFilm: (id: string) => {},
  deleteFilm: (id: string) => {},
  toggleFeatured: (id: string) => {},
};

export const FilmsContext = React.createContext<FilmContextType>(values);

export const useFilmsContext = () => useContext(FilmsContext);
