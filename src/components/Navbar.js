import {BsSearch} from "react-icons/bs"
import "../styles/Navbar.css"

function Navbar(){
    return  <div className="px-14 items-center h-[75px] w-full bg-black flex justify-between ">
                <div className="iceland text-yellow-600 text-6xl">Bus</div>
                <div className="border-2  w-[190px] h-[35px] px-2 flex">
                    <input placeholder= "Rechercher..." className="text-white w-[150px] bg-black border-white text-white"/>
                    <div className="flex items-center ">
                    <BsSearch className="text-white font-bold"/>
                    </div>
               </div>
            </div>
           

}

export default Navbar