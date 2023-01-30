import React from 'react'
import { Slide } from "react-awesome-reveal";

function Contact() {
  return (
    <Slide left>
      <div className="bg-gray-900 rounded-xl shadow w-fit m-10">
        <h1 className="font-primary text-cyan-600 text-8xl pt-8 pb-8 px-8">Contact Us</h1>
        </div>
        <div className="">
            <p className="font-primary m-10 text-cyan-800 text-2xl">
                Contact us at our <a className="text-cyan-600 hover" href="https://discord.gg/gbAXhJHxtS">Discord</a>
            </p>
        </div>
    </Slide>
  )
}

export default Contact