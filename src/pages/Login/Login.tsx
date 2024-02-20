import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { GamesContext } from "../../lib/context/GamesContext/GamesContext";
import { Link } from "react-router-dom";

export const Login = () => {
  return(
  <div className="ui container mt-6 ">
    <LoginForm />;

    <Link to="/register">
     Don't have an account yet? Sign up

    </Link>

  </div>
  )
};
