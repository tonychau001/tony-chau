import React from 'react'
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

import { logo, background } from "./assets"
import { Header, Footer} from "./components";

const App = () => {
  return (
    <div style={{backgroundImage: `surl(${background})`}}>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full  min-h-[calc(100vh-73px)]">
        <div className="flex justify-center text-white text-[120px] pt-40">
          Tony Chau
        </div>
        <div className="flex justify-center text-white text-[24px]">
          SOFTWARE ENGINEER, FRONT END & BACK END DEVELOPER.
        </div>
      </main>
    </div>
  )
}

export default App