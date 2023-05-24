import React from 'react'
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";

import { logo, background } from "./assets"
import { Header, Footer} from "./components";

const App = () => {
  return (
    <div className="bg-[#151019]">
      <Header />
      <main style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}} className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
        <div className="flex font-serif justify-center text-white text-[120px] pt-40">
          Tony Chau
        </div>
        <div className="flex font-serif justify-center text-white text-[24px]">
          SOFTWARE ENGINEER, FRONT END & BACK END DEVELOPER.
        </div>

        <div className="flex justify-center relative mt-96 text-white text-[105px]">
          My Expertise
        </div>

        <div className="grid grid-rows-1 grid-flow-col border border-white">
          <div className="border border-white text-white p-4">
            Software Development, Java, SQL/NoSQL
          </div>
          <div className="border border-white text-white p-4">
            FrontEnd Dev, ReactJS, TailWindCSS
          </div>
          <div className="border border-white text-white p-4">
            BackEnd Dev, NodeJS, ExpressJS
          </div>
          {/* EXAMPLE */}
          <div class="rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mountain</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App