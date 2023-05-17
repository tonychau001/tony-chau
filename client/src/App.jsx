import React from 'react'
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

import { logo } from "./assets"

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" 
          className="w-28 h-8 object-contain"/>
        </Link>

      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={""} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App