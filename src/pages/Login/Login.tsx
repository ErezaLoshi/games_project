import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { GamesContext } from "../../lib/context/GamesContext/GamesContext";
import { Link } from "react-router-dom";

export const Login = () => {
  return(
  <div className="ui container" style={{paddingLeft:"25rem", height:"100vh", paddingTop:"20rem", paddingRight:"22rem "}}>
   <div className="p-10 bg-white rounded-xl ">
    <LoginForm />

    <Link to="/register" style={{color:"grey"}}>
      <b> Don't have an account yet? Sign up </b>
    </Link>

   </div>

  </div>
  )
};
