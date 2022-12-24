import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
    
    const navigate = useNavigate()

    const RoutePageHandler = (e) =>{
        if(e==="TaxSetting"){
            navigate("/dashboard/taxSetting")
        } else if (e==="uploadExcel"){
            navigate("/dashboard/uploadExcel")
        }
    }

    return ( 
        <div className="sidebar">
            <Button text={"ارسال صورت حساب"} size={"large"} Click = {()=> RoutePageHandler("uploadExcel")}/>
            <Button text={"تنظیم مالیاتی"}  size={"large"}  Click = {()=> RoutePageHandler("TaxSetting")}/>
        </div>
     );
}