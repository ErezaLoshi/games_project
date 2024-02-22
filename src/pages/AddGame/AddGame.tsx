import { useParams } from "react-router-dom"
import GameForm from "../../components/GameForm/GameForm"


const  AddGame=()=>{

       return  (
        <div className="ui container " style={{paddingTop:"8rem",paddingBottom:"117px",paddingLeft:"150px"}}>
          <div className=" bg-white rounded-xl p-8" style={{marginRight:"90px"}}>
            <GameForm />

          </div>
        </div>
       )
    
    }
    
    export default AddGame