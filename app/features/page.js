'use client'

export default function Index() {
  return (
    <>
      <Slide left> 
        <div className="rounded-xl bg-blur border m-4 md:m-8 lg:m-10 mt-20 p-8 w-fit h-fit">
          <h1 className="font-primary text-4xl md:text-6xl lg:text-8xl text-fuchsia-600">Features</h1>
        </div>

        <div>
          
        </div>
      </Slide>
      <div className=" inset-x-0 top-[-15rem] -z-10 overflow-hidden blur-3xl">
          <svg
            className="max-w-none h-80 sm:left-[calc(15%+6rem)] sm:h-[650px] blur-3xl"
            viewBox="0 0 1155 678">
            <path
              fill="#7e22ce"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
        </svg>    
      </div>

    </>
  )
}
