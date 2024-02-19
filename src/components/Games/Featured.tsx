import { useState } from "react";
import { useGamesContext } from "../../lib/context/GamesContext/GamesContext";

interface Props{
  featured: boolean;
  id: string;
}

const Featured = ({featured, id}: Props) => {
  const {toggleFeatured} = useGamesContext()
  return (
    <span onClick={() => {toggleFeatured(id)}} className="ui right corner label">
      <i className={`star icon ${featured ? 'yellow' : 'empty'}`} />
    </span>
  )
}

export default Featured