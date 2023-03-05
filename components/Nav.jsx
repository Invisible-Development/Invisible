'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Collaborators', href: '/collaborators' },
]

export default function Nav() {
  let [isOpen, setIsOpen] = useState(false)

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
      <nav className="sticky top-0 z-30 h-20 bg-gray-900 bg-opacity-40 backdrop-blur backdrop-filter">
          <div className="mx-auto lg:px-10">
            <div className="flex items-center border-b border-slate-800 px-4 py-5 sm:px-6 lg:px-10 xl:px-0">
              <a className="block" href="/">
                <h1 className="font-primary text-fuchsia-600 text-4xl hover:text-cyan-600">Invisible</h1>
              </a>
              <div className="pl-20 gap-x-10 hidden lg:flex">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="font-primary text-fuchsia-600 hover:text-cyan-600">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex lg:hidden absolute right-2 ">
                <button type="button" className="" onClick={() => setIsOpen(true)}>
                  <Bars3Icon className="h-6 w-6 text-fuchsia-600 hover:text-cyan-600" />
                </button>

                <Dialog as="div" open={isOpen} onClose={setIsOpen}>
                  <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-slate-900 px-6 py-6">
                    <div className="flex items-center justify-between">
                      <button type="button" className="" onClick={() => setIsOpen(false)}>
                          <Bars3Icon className="h-6 w-6 text-fuchsia-600 hover:text-cyan-600" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6 mt-4">
                          {navItems.map((item, i) => (
                            <a
                              key={i}
                              href={item.href}
                              className="-mx-3 block rounded-lg py-2 px-3 font-primary leading-7 text-fuchsia-600 hover:bg-slate-800"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Dialog>
              </div>
            </div>
          </div>
      </nav>
    </>
  )
}