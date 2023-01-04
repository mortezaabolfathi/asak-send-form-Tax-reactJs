import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../components";

export const Layout = () => {
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
 