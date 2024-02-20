import { useState } from "react";
import { useGamesContext } from "../../lib/context/GamesContext/GamesContext";
import { editGame } from "../../api/Games/games.client";

interface Props{
  featured: boolean;
  id: string;
}

const Featured = ({featured, id}: Props) => {
  const {games,toggleFeatured} = useGamesContext()

const handleFeatured=()=>{
  const gameData= games.find(game => game._id === id)

  if(!gameData){
    throw Error('No game found')
  }

  editGame(
    id,
    {
      ...gameData,
      featured: !featured
    }
  ).then(()=>{
    toggleFeatured(id)
  }).catch(error=>
    console.log({error})
    )

}

  return (
    <span onClick={handleFeatured} className="ui right corner label">
      <i className={`star icon ${featured ? 'yellow' : 'empty'}`} />
    </span>
  )
}

export default Featured