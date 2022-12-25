import {Button} from "../../components";
import {useNavigate} from "react-router-dom";
import Dian from "../../assets/image/DIAN.png";
const WelcomePage = () => {
    

    return ( 
        <div className="welcome">
            <img src={Dian} className="welcome__img"/>
            <p>شرکت دیان همراه فردا</p>
        </div>
     );
}
 
export default WelcomePage;