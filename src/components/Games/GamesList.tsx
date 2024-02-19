import { useGamesContext } from "../../lib/context/GamesContext/GamesContext"
import GameCard from "./GameCard"

const GamesList = () => {
  const {games: games} = useGamesContext()
  
  return (
    <div className="!mt-2 grid grid-cols-4 gap-8">
        {
        games.length !== 0 ? 
        games.map(game => <GameCard game={game} key={game._id} />)
           : <div className="ui icon message">
            <i className="icon info" />
            <div className="content">
              <div className="header">No games yet in our database</div>
            </div>
          </div>
        }
    </div>
  )
}

export default GamesList