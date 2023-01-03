import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { SideBar } from "../components";

export const LayOut = () => {
    return ( 
        <div className="layout">
            <div className="layout__header">
                <Header/>
            </div>
            <div className="layout__content">
                <div className="layout__content__sidebar">
                    <SideBar/>
                </div>
                <div className="layout__content__outlet">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 