import { Outlet } from "react-router-dom";
import  Navbar from "./Navbar.js"
import Footer from "./Footer.js";
function Layout(){
    return <div className='flex flex-col items-center justify-between w-screen h-screen overflow-hidden'><Navbar/> <Outlet/> <Footer/> </div>
}

export default Layout;