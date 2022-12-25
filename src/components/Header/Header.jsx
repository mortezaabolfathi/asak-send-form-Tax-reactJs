import { useSelector, useDispatch } from "react-redux";
import {handlerMenu} from "./../../appRedux/features/menu/managementMenu";
import img from "./../../assets/image/icons8-menu100.png";
export const Header = () => {

    const dispatch = useDispatch();
    const {activeMenu} = useSelector(state => state.menu)
    console.log("before onCLick", activeMenu)

    const menuOpen = () =>{
        dispatch(handlerMenu());
        console.log("after Click ", activeMenu);
    }

    return ( 
        <div className="header">
            <img  src={img} alt="" onClick={()=> menuOpen()} />
            <p>نام و نشان شرکت</p>
        </div>
     );
}
 
