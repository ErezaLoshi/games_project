import { useParams } from "react-router-dom"
import GameForm from "../../components/GameForm/GameForm"


const  AddGame=()=>{

       return  (
        <div className="ui container mt-6 ">
            <GameForm />
        </div>
       )
    
    }
    
    export default AddGame