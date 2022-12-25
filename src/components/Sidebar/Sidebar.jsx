import { Button } from "../Button/Button";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

export const SideBar = () => {
    
    const navigate = useNavigate()

    const RoutePageHandler = (e) =>{
        if(e==="TaxSetting"){
            navigate("/dashboard/taxSetting")
        } else if (e==="uploadExcel"){
            navigate("/dashboard/uploadExcel")
        }
    }

    const {activeMenu} = useSelector(state => state.menu);

    return ( 
        <div className={"sidebar " + (activeMenu && "active")}>
            <Button text={"ارسال صورت حساب"} size={"large"} Click = {()=> RoutePageHandler("uploadExcel")}/>
            <Button text={"تنظیم مالیاتی"}  size={"large"}  Click = {()=> RoutePageHandler("TaxSetting")}/>
        </div>
     );
}