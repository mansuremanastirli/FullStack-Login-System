import Login from "./components/login";
import Register from "./components/register";
import HomePage from "./components/HomaPage" 
import {Routes, Route } from "react-router-dom"
import { useState } from "react";


function App() {
  const [user , setUser] = useState(null)
  return (
    <div className="App">
      <Routes>
          <Route path="/register" element={<Register/>}></Route>  
          <Route path="/" element={<Login user={user} setUser={setUser}/> }></Route>  
          <Route path="/index" element={<HomePage user ={user} setUser={setUser}/>}></Route>  
      </Routes>  
    </div>
  );
}

export default App;
