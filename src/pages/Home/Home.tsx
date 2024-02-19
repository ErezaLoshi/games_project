
import GamesList from "../../components/Games/GamesList";
import GameForm from "../../components/GameForm/GameForm";

import { allGames} from "../../api/Games/games.client";
import GamesContextProvider from "../../lib/context/GamesContext/GamesContextProvider";
import Banner from "../../components/Banner/Banner";


export const Home = () => {

  return (
    <GamesContextProvider>
      <>
        <Banner/>
        <div className="ui container mt-6">
        <GameForm />
        <hr />
        <GamesList />

        </div>
      </>
    </GamesContextProvider>
  );
};
