
import GamesList from "../../components/Games/GamesList";
import GameForm from "../../components/GameForm/GameForm";

import { allGames} from "../../api/Games/games.client";
import GamesContextProvider from "../../lib/context/GamesContext/GamesContextProvider";


export const Home = () => {

  return (
    <GamesContextProvider>
      <div className="ui container mt-6">
        <GameForm />
        <hr />
        <GamesList />
      </div>
    </GamesContextProvider>
  );
};
