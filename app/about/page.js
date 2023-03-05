'use client'
import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'

export default function Index() {
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    setIsShowing(true)
  })
  return (
    <>
      <div className="rounded-xl bg-blur border m-4 md:m-8 lg:m-10 mt-20 p-8 w-fit h-fit">
        <h1 className="font-primary text-4xl md:text-6xl lg:text-8xl text-fuchsia-600">Invisible</h1>
        <h1 className="font-primary text-2xl md:text-3xl lg:text-4xl text-cyan-600">A Simple Discord App</h1>
      </div>
    </>
  )
}
