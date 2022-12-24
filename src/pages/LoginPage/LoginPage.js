import { Button } from "../../components";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    
   const navigate = useNavigate();
   const RoutePageHandler = ()=>{
    navigate("/dashboard");
   }

    return ( 
        <div>
            This is LoginPage
            <Button text={"تایید"} Click={()=>RoutePageHandler()}/>
        </div>
     );
}
 
export default LoginPage;