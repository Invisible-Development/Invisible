'use client'
import React from 'react'
import FadeInLeft from '../actions/fadeInLeft'

function page() {
  return (
    <>
      <FadeInLeft>
        <div className="m-10 font-primary text-fuchsia-600">
            <div className="rounded-xl bg-blur border-4 border-purple-900 p-8 w-fit h-fit">
                <h1 className="text-4xl lg:text-8xl font-primary text-fuchsia-600">About</h1>
            </div>
            <div className="mt-5"></div>
            <p className="text-2xl">Midnight is an application <a className="hover:text-cyan-600" href="/collaborators/collin">I</a> started in 2022, November</p>
            <br></br>
            <p className="text-2xl">Midnight was originally a django project, and I expreimented with many frameworks including Django, Flask, React, Next, Vue, and Svelte (Next is my favorite, and is the current framework)</p>
            <br></br>
        </div>
      </FadeInLeft>
    </>
  )
}

export default page