
import { Link } from "react-router-dom";

import "./MainMenu.css";

const MainMenu = ()=>{
    return(<nav className="navbar">
        <Link className="link" to="/">Home</Link> 
        <Link className="link" to="/input">Input</Link>
        <Link className="link" to="/show">Show</Link>
    </nav>)
}

export default MainMenu;