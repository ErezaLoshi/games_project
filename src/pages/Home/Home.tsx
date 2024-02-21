
import GamesList from "../../components/Games/GamesList";
import GamesContextProvider from "../../lib/context/GamesContext/GamesContextProvider";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

export const Home = () => {

  const {logout}= useAuthContext()

  return (
    <GamesContextProvider>
      <>
        <Banner/>
        <div className="ui container ">

          <Button>
        <Link to="/add-game">
          Add Game
          </Link>
          </Button>

          <Button onClick={logout}>
         Log Out
          </Button>
        <GamesList />
       
        </div>

      </>
    </GamesContextProvider>
  );
};
