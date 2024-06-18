
import { useState, useContext } from "react";

import MainMenu from "../components/MainMenu.component";
import { UserContext } from "../App";

const InputDetail = () => {

  const  {dispatch} = useContext(UserContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");


  const handleChange= (e)=>{
    const{name, value} = e.target;
    if(name == "name"){
      setName(value.trim());
    }
    else if(name == "age"){
      setAge(value)
    }else if(name == "email"){
      setEmail(value);
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let newUser = {
      name:name,
      age:age,
      email:email
    }
    dispatch({type:"add",payload:newUser})
  setName("");
  setAge("");
  setEmail("");

  }



  return (<div className="container">
    <h2>Input form page</h2>
    <MainMenu />
    <div className="flex">
      <div className="input-form">
        <form >
          <table>
            <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name" name="name" value={name} onChange={(e)=>handleChange(e)} /></td>
            </tr>
            <tr>
              <td><label htmlFor="age">Age</label></td>
              <td><input type="number" id="age" name="age" value={age} onChange={(e)=>handleChange(e)} /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input type="email" id="email" name="email" value={email} onChange={(e)=>handleChange(e)} /></td>
            </tr>
           </tbody>
          </table>
          <button onClick={(e)=>handleSubmit(e)}>Save</button>
        </form>
      </div>
      <div className="poster"></div>
    </div>
    
    </div>
  )

  }
export default InputDetail;