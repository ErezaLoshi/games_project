import { useGamesContext } from "../../lib/context/GamesContext/GamesContext"
import GameCard from "./GameCard"

const GamesList = () => {
  const {games: games} = useGamesContext()
  
  return (
    <div className="mt-5 grid grid-cols-2 gap-8">
      {/* mt-5 grid grid-cols-2 gap-4 */}
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