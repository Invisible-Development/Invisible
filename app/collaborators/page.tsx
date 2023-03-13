'use client'
import React from 'react'
import FadeInLeft from '../actions/fadeInLeft'

const collaborators = [
    { name: "Collin", href: "/collaborators/collin" }
]

function Moon() {
  return (
    <>
        <FadeInLeft>
            <div className="rounded-xl bg-blur border-4 border-purple-900 m-4 md:m-8 lg:m-10 mt-20 p-8 w-fit h-fit">
                <h1 className="text-4xl lg:text-8xl font-primary text-fuchsia-600">Collaborators</h1>
            </div>
            <div className="font-primary text-fuchsia-600 m-10">
                {collaborators.map((item, i) => (
                    <a className="hover:text-cyan-600" href={item.href} key={i}>                
                        <h1 className="text-8xl">{item.name}</h1>
                    </a>
                ))}
            </div>
        </FadeInLeft>
    </>
  )
}

export default Moon