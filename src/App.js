import { Route, Routes } from "react-router-dom";
import './App.css';

import Body from "./pages/App";
import Hero from "./pages/Hero";


function App() {
  return (
    <div>
        
        <Routes>
           {/* <Route path="/" element={<Body />} /> */}
           <Route path="/" element={<Hero />} />
         </Routes>
    </div>
  );
}

export default App;
