import { useSelector, useDispatch } from "react-redux";
import {handlerMenu} from "./../../appRedux/features/menu/managementMenu";

export const Header = () => {

    const dispatch = useDispatch();
    const {activeMenu} = useSelector(state => state.menu)
    console.log("before onCLick", activeMenu)

    const menuOpen = () =>{
        dispatch(handlerMenu())
        // console.log("click here");
        console.log("after Click ", activeMenu);
        // console.log(handlerMenu())
    }

    return ( 
        <div className="header">
            <p > open menu</p>
            <p onClick={()=> menuOpen()}>نام و نشان شرکت</p>
        </div>
     );
}
 
