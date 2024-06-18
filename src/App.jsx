import { createContext, useReducer} from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import InputDetail from "./pages/InputDetail.page";
import ShowDetails from "./pages/ShowDetails.page";

import {is,reducer} from "./reducer";


 export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, is);
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/input" element={<InputDetail />}/>
        <Route path="/show" element={<ShowDetails />}/>
      </Routes>
    </UserContext.Provider >
  )
}

export default App;
