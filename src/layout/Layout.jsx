import { Outlet } from "react-router-dom";
import { Header } from "./../components";
import { SideBar } from "./../components";
const Layout = () => {
    return ( 
        <div>
            <Header/>
            <SideBar/>
            <Outlet/>
        </div>
     );
}
 
export default Layout;