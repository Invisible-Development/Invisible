import React from 'react'
import { Slide } from "react-awesome-reveal";

function about() {
  return (
    <Slide left>
      <div className="bg-gray-900 rounded-xl shadow w-fit m-10">
        <h1 className="font-primary text-cyan-600 text-8xl pt-8 pb-8 px-8">About Us</h1>
        </div>
        <div className="">
        <p className="font-primary m-10 text-cyan-800 text-2xl">
            I started this project on 11/2/22 and I have switch from many different Coding Languages/Frameworks
            <br></br><br></br>
            Python: Django, Flask
            <br></br><br></br>
            Javascript: React, Next.JS, Remix, Svelte
            <br></br><br></br>
            This project was introduced into a group on 1/23/23
            <br></br><br></br>
            Contributors: <a className="text-cyan-600 hover" href="/contributors/collin">Collin</a>
        </p>
        </div>
    </Slide>
  )
}
export default about