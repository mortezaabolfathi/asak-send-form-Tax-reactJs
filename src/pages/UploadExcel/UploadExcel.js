import { Button } from "../../components";
import {useNavigate } from "react-router-dom";

const UploadExcel = () => {

    const navigate=useNavigate()

    const RoutePageHandler = ()=>{
        navigate("/tableExcel")
    }
    return ( 
        <div>
            this is Page Upload excel file in dashboard
            <Button text={"تایید"} Click={()=>RoutePageHandler()}/>
        </div>
     );
}
 
export default UploadExcel;