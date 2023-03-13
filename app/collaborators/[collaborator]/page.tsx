'use client'
import React, { useState, useEffect } from 'react'
import Loader from '../../actions/loader'
import FadeInLeft from '../../actions/fadeInLeft'

// anyone else on this proj in the future only do 5 songs also please
const collinSongs = [
    <iframe className="my-2" src="https://open.spotify.com/embed/track/4jx9GqqVMPacAOKHaFlsLb?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    <iframe className="my-2" src="https://open.spotify.com/embed/track/1iAPK2b2b85n47c1Hw0pm4?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    <iframe className="my-2" src="https://open.spotify.com/embed/track/1uULQtJ8rbsX5TwjPpPc9Q?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    <iframe className="my-2" src="https://open.spotify.com/embed/track/2Gn3xsO0hacXJy1Z2EHrgm?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    <iframe className="my-2" src="https://open.spotify.com/embed/track/6MFk8Dw2VnvweH2E46cjEv?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
]

const collaboratorData = [
    { name: "collin", description: "I started this project in late november 2022, I have been working on this for a long time and coding js and py websites is a very different experience than I thought it would be, and it is also very easy, much easier than I thought", aboutMe: "I'm in highschool in America, I love snowboarding, and I play football, basketball, baseball, and I run track", spotifyEmbeds: collinSongs }
]

function page({ params }) {
  const [data, setData] = useState(<Loader />)
  useEffect(() => {
    collaboratorData.forEach((e) => {
        if (e["name"] === params.collaborator) {
            setData(
                <div className="font-primary text-fuchsia-600 text-2xl">
                    <section>
                        <div className="border-t-4 border-purple-900 rounded-xl w-[50vw] m-auto mb-10"></div>
                        <h1 className="text-3xl">Description</h1>
                        {e["description"]}
                        <div className="border-b-4 border-purple-900 rounded-xl w-[50vw] m-auto mt-10"></div>
                    </section>
                    <section>
                        <div className="mt-10"></div>
                        <h1 className="text-3xl">About Me</h1>
                        {e["aboutMe"]}
                        <div className="border-b-4 border-purple-900 rounded-xl w-[50vw] m-auto mt-10"></div>
                    </section>
                    <section>
                        <div className="mt-10"></div>
                        <h1 className="text-3xl">Favorite Music</h1>
                        <div className="rounded-xl">
                            {e["spotifyEmbeds"]}
                        </div>
                        <div className="border-b-4 border-purple-900 rounded-xl w-[50vw] m-auto mt-10"></div>
                    </section>
                </div>
            )
        }
    })
  })
  return (
    <>
        <FadeInLeft>
            <div className="rounded-xl bg-blur border-4 border-purple-900 m-4 md:m-8 lg:m-10 mt-20 p-8 w-fit h-fit">
                <h1 className="text-4xl lg:text-8xl font-primary text-fuchsia-600">{params.collaborator}</h1>
            </div>
            <div className="m-10">
                {data}
            </div>
        </FadeInLeft>
    </>
  )
}

export default page