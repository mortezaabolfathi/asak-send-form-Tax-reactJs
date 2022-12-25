import { Button } from "../Button/Button";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handlerMenu } from "../../appRedux/features/menu/managementMenu";
import img from "./../../assets/image/icons8-close-100.png";



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
    const dispatch = useDispatch();

    const menuOpen = () =>{
        dispatch(handlerMenu());
        console.log("after Click ", activeMenu);
    }

    return ( 
            <div className={"sidebar " + (activeMenu && "active")}>
                <img src={img} alt=""  onClick={() => menuOpen()}/>
                <Button text={"ارسال صورت حساب"} size={"large"} Click = {()=> RoutePageHandler("uploadExcel")}/>
                <Button text={"تنظیم مالیاتی"}  size={"large"}  Click = {()=> RoutePageHandler("TaxSetting")}/>
            </div>
     );
}