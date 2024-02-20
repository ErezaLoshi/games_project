import { useEffect, useState } from "react";
import { GamesContext } from "./GamesContext";
import _orderBy from "lodash/orderBy"
import { FormDataType } from "../../../components/GameForm/GameForm";
import { randomId } from "../../helpers/randomId";
import { GameInterface } from "../../../components/Games/GameCard";
import { allGames } from "../../../api/Games/games.client";
import { GameRespnseType } from "../../../api/Games/games.types";
import { useNavigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const sortGames = (games: any) => _orderBy(games, ['featured', 'title'], ['desc', 'asc'])

const GamesContextProvider = ({children}: Props) => {
    const [games, setGames] = useState<GameRespnseType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const navigate= useNavigate()

    const [selectedGame, setSelectedGame] = useState<GameRespnseType | undefined>();

    useEffect(() => {
      setLoading(true);
      allGames().then(response => {
        setGames(response.data.games)
      }).catch(err => {
        console.log(err)
        setError(err?.message ?? 'Something went wrong')
      }).finally(() => {
        setLoading(false)
      });
    }, [])

    const selectGame = (id: string) => {
        setSelectedGame(games.find(game => game._id === id))
    }

    const addNewGame = (form: FormDataType) => {
        setGames(sortGames([...games, {...form, _id: randomId(), im: 'https://placehold.co/600x400/EEE/31343C'}]))
    }

  const handleClick = (id: string) => {
    setGames(sortGames(games.map(game => game._id === id ? {...game, featured: !game.featured} : game)))
  }

  const updateGame = (id: string, form: FormDataType) => {
    setGames(sortGames(games.map(game => game._id === id ? {...game, ...form} : game)))
    // navigate('/')
  }

  const deleteGame = (id: string) => {
    setGames(games.filter(game => game._id !== id))
  }

    return (
        <GamesContext.Provider value={{
            games,
            addNewGame,
            updateGame,
            deleteGame,
            selectedGame,
            selectGame,
            toggleFeatured: handleClick
        }}>
          {error ? error : loading ? <div>loading ...</div> : children}
        </GamesContext.Provider>
    )
}

export default GamesContextProvider;