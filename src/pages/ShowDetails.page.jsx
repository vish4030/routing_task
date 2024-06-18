
import { useContext } from "react";

import MainMenu from "../components/MainMenu.component";
import {UserContext} from "../App";


const ShowDetails = ()=>{
    const {state, dispatch} = useContext(UserContext);
    

    return(<div className="container">
        <h2>Users Details...</h2>
        <MainMenu />
        <div className="flex users">
        {
            state?.users?.map((item,i)=>(
            <div className="user-box" key={"a"+i}>
                 <h3>Name: {item.name}</h3>
                 <p>Age: {item.age}</p>
                 <p>Email: {item.email}</p>
                 <button onClick={(e)=>dispatch({type:"del",payload:i})}>X</button>
           </div>
        ))}
        </div>
        </div>
    )
}

export default ShowDetails;