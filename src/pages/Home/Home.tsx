
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
        <div className="flex gap-3 mt-9 ">

          <Button>
        <Link to="/add-game" className="text-white hover:text-white" >
          Add Game
          </Link>
          </Button>

          <Button onClick={logout} className="">
         Log Out
          </Button>
          </div>
        <GamesList />
       
        </div>

      </>
    </GamesContextProvider>
  );
};
