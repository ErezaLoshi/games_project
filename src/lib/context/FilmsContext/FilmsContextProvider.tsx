import { useEffect, useState } from "react";
import { movies } from "../../../components/Films/data/movies";
import { FilmsContext } from "./FilmsContext";
import _orderBy from "lodash/orderBy"
import { FormDataType } from "../../../components/FilmForm/FilmForm";
import { randomId } from "../../helpers/randomId";
import { FilmInterface } from "../../../components/Films/FilmCard";
import { allFilms } from "../../../api/Films/films.client";

interface Props {
    children: React.ReactNode;
}

const sortFilms = (films: any) => _orderBy(films, ['featured', 'title'], ['desc', 'asc'])

const FilmsContextProvider = ({children}: Props) => {
    const [films, setFilms] = useState<any>([]);

    const [selectedFilm, setSelectedFilm] = useState<FilmInterface | undefined>();

    useEffect(() => {
      allFilms().then(response => {
        setFilms(response.data.films)
      });
    }, [])

    const selectFilm = (id: string) => {
        setSelectedFilm(films.find(film => film._id === id))
    }

    const addNewFilm = (form: FormDataType) => {
        setFilms(sortFilms([...films, {...form, _id: randomId(), im: 'https://placehold.co/600x400/EEE/31343C'}]))
    }

  const handleClick = (id: string) => {
    setFilms(sortFilms(films.map(film => film._id === id ? {...film, featured: !film.featured} : film)))
  }

  const updateFilm = (id: string, form: FormDataType) => {
    setFilms(sortFilms(films.map(film => film._id === id ? {...film, ...form} : film)))
    setSelectedFilm(undefined)
  }

  const deleteFilm = (id: string) => {
    setFilms(films.filter(film => film._id !== id))
  }

    return (
        <FilmsContext.Provider value={{
            films,
            addNewFilm,
            updateFilm,
            deleteFilm,
            selectedFilm,
            selectFilm,
            toggleFeatured: handleClick
        }}>
            {children}
        </FilmsContext.Provider>
    )
}

export default FilmsContextProvider;