import {Button} from "./../../components";
import {useNavigate} from "react-router-dom";

const WelcomePage = () => {
    const navigate=useNavigate();

    const RoutePageHandler = ( ) => {
        console.log("thi is click here with change page ")
        navigate("/Login")
    }

    return ( 
        <div>
            <Button text={"کلید کنید"} Click={()=>RoutePageHandler()}/>
        </div>
     );
}
 
export default WelcomePage;