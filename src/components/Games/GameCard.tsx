import { useGamesContext } from "../../lib/context/GamesContext/GamesContext";
import Featured from "./Featured";
import ReactImageFallback from "react-image-fallback";
import { AddGameRequest, GameRespnseType } from "../../api/Games/games.types";
import { deleteGameApi } from "../../api/Games/games.client";
import { useRef, useState } from "react";
import Modal from "./../shared/Modal/Modal";
import { useNavigate } from "react-router-dom";


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

    const navigate= useNavigate()
    // const [showDescription, setShowDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
      setShowModal(true);
    }
  
    const closeModal = () => {
      setShowModal(false);
    }

//   const handleToggleDescription = () => {
//         setShowDescription(!showDescription)
// }

    const deleteGameHandler = () => {
      deleteGameApi(game._id).then(() => {
        deleteGame(game._id)
      }).catch(err => {console.log(err)})
    }

    return(
    <div style={{paddingLeft: "3.0rem"}}>
      <div className="ui card" style={{ width: "90%" }}>
      <div  className="content " >
        <div className="ui items ">
            <div className="item">
                <Featured id={game._id} featured={game.featured}/>
                <div className="ui image">
                  <ReactImageFallback
                    src={game.img}
                    fallbackImage={'https://placehold.co/200x400'}
                    initialImage="loader.gif"
                    alt="image should be here"
                    className="my-image" />
                </div>

    <div className="content" style={{padding: "1.5rem"}}>
      <span className="ui header large">{game.title}</span>
          <div className="meta">
      <span className="cinema">Release date: {game.date}</span>
          </div>
          <div className="extra">
              <div className="ui label"><i className="user icon"></i> {game.developer}</div>
               <div className="ui green label"> {game.price}$</div>
          </div>
          <div className="extra content m-0">
         
         <button onClick={openModal} className="ui button" type="button">
          Description
         </button>
         <Modal showModal={showModal} onClose={closeModal}>
           
           <p>{game.description}</p>
         </Modal>
       </div>
            {/* <div className="ui tiny label description">
                  <button className="ui tiny basic green button" onClick={handleToggleDescription}>
                    <i className={`eye icon ${showDescription ? 'slash' : ''}`} /> {showDescription ? 'Hide' : 'Show'} More
                       </button> */}
                        {/* {showDescription && (
                     <div className="ui tiny segment">
                      <p>{game.description}</p>
                     </div>
                      )}  */}
                 {/* </div> */}
          <div style={{paddingTop: "0.5rem"}}>
          <button onClick={() => {navigate(`update-game/${game._id}`)}} className='ui small button' type="button">Edit</button>
      <button onClick={deleteGameHandler} className='ui small button' type="button">Delete</button>
          </div>
      </div>
      </div>
      </div>
      </div> 
      <div className=" extra content ">
        
     <span className="ui olive label"> {game.genre1}</span>
     <span className="ui yellow label">{game.genre2}</span>
     <span className="ui purple label"> {game.genre3}</span>
     <span className="ui teal label"> {game.genre4}</span>
        
    </div>
   
    </div>
  </div>

)}


export default GameCard