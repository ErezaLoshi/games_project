import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { GamesContext } from "../../lib/context/GamesContext/GamesContext";

export const Login = () => {
  return(
  <div className="ui container mt-6 ">
    <LoginForm />;

  </div>
  )
};
