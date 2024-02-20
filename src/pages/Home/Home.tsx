
import GamesList from "../../components/Games/GamesList";
import GameForm from "../../components/GameForm/GameForm";


import GamesContextProvider from "../../lib/context/GamesContext/GamesContextProvider";
import Banner from "../../components/Banner/Banner";
import TabButton from "../../components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../components/data";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";




export const Home = () => {


  return (
    <GamesContextProvider>
      <>
        {/* <Banner/> */}
        <div className="ui container mt-6 ">

          <Button>
        <Link to="/add-game">
          Add Game
          </Link>
          </Button>
        <GamesList />
       
        </div>

      </>
    </GamesContextProvider>
  );
};
