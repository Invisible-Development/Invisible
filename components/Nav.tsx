'use client'
import { useState } from 'react'

export default function Nav() {
  const [loginStatus, setLoginStatus] = useState("Login!")
  return (
    <>
      <div className="absolute inset-x-0 top-[-5rem] -z-10 transform-gpu overflow-hidden blur-3xl">
        <svg
            className="max-w-none h-[600px] blur-3xl -translate-x-1/2"
            viewBox="0 0 1155 678">
            <path
              fill="#7e22ce"
              fillOpacity=".5"
              d="M317.219 918.975L203.852 688 320 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 265.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 126.53 375.293L855 299l21.173 362.054-558.954-142.079z"
            />
        </svg>    
      </div>
      <nav className="sticky top-0 z-30 h-20 bg-gray-900 bg-opacity-40 backdrop-blur backdrop-filter flex-shrink-0">
          <div className="mx-auto lg:px-10">
            <div className="flex items-center border-b border-slate-800 px-4 py-5 sm:px-6 lg:px-10 xl:px-0 justify-between">
              <a className="block" href="/">
                <h1 className="font-primary text-fuchsia-600 text-4xl hover:text-cyan-600">Midnight</h1>
              </a>
              <div className="font-primary text-xl text-fuchsia-600">
                {loginStatus}
              </div>
            </div>
          </div>
      </nav>
    </>
  )
}