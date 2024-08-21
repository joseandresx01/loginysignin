import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from './components/Register';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;