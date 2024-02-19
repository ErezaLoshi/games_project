import { useGamesContext } from "../../lib/context/GamesContext/GamesContext";
import Featured from "./Featured";
import ReactImageFallback from "react-image-fallback";
import { AddGameRequest, GameRespnseType } from "../../api/Games/games.types";
import { deleteGameApi } from "../../api/Games/games.client";

interface Props{
    game: GameRespnseType,
}

export interface GameInterface{
  _id: string;
  title: string;
  developer: string;
  description: string;
  price: number;
  im: string;
  featured: boolean;
  date:string;
  genre1:string
  genre2:string
  genre3:string
  genre4:string
}

const GameCard = ({game}: Props) => {
    const {selectGame, deleteGame} = useGamesContext()

    const deleteGameHandler = () => {
      deleteGameApi(game._id).then(() => {
        deleteGame(game._id)
      }).catch(err => {console.log(err)})
    }

    return <div className="ui card">
    <Featured id={game._id} featured={game.featured}/>
    <div className="image">
      <span className="ui green label ribbon">{game.price}</span>
      <ReactImageFallback
        src={game.img}
        fallbackImage={'https://placehold.co/400'}
        initialImage="loader.gif"
        alt="cool image should be here"
        className="my-image" />
    </div>

    <div className="content">
      <span className="header">
        {game.title}
      </span>
      <div className="meta">
        <i className="icon users" /> {game.developer}
       
        <span className="right floated">
          <i className="icon wait right" /> {game.date}
        </span>
      </div>
      <div className=" extra content ">
        
     <span className="ui olive label"> {game.genre1}</span>
     <span className="ui yellow label">{game.genre2}</span>
     <span className="ui purple label"> {game.genre3}</span>
     <span className="ui teal label"> {game.genre4}</span>
        
    </div>
      <button onClick={() => {selectGame(game._id)}} className='ui button' type="button">Edit</button>
      <button onClick={deleteGameHandler} className='ui button' type="button">Delete</button>
    </div>
  </div>
}

// .propTypes

// defaultProps

export default GameCard