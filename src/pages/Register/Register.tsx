import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
export const Register = () => {
  return(
    <div className="ui container" style={{paddingLeft:"25rem", height:"100vh", paddingTop:"20rem", paddingRight:"22rem "}}>
    <div className="p-10 bg-white rounded-xl ">
      <RegisterForm />

      <Link to="/login" style={{color:"grey"}}>
      <b> Don't have an account yet? Sign up </b>
    </Link>

    </div>
    </div>  
  ) 
};
