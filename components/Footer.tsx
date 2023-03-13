import { FaGithub } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"

function Footer() {
  return (
    <>
        <div className="absolute mt-[75vh] inset-x-0 top-[-15rem] -z-10 overflow-hidden blur-3xl">
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
        <footer id="footer" className="relative left-0 bottom-0 text-center width-full flex-shrink-0">
            <div className="border-t-4 border-purple-900 rounded-xl w-[10vw] m-auto"></div>
            <p className="font-secondary mt-5 text-center text-fuchsia-600"><strong>2022 &copy; All right Reserved <a href="https://github.com/Midnight-Development/" className="text-fuchsia-700 hover:text-cyan-600">Midnight</a></strong></p>
            <ul>
                <p className="font-secondary mt-5 text-center text-fuchsia-600">An error or an idea? <a className="text-fuchsia-700 hover:text-cyan-600" href="https://github.com/Midnight-Development/Midnight">Add it!</a></p>
                <a className="h-6 w-6 text-fuchsia-600 hover:text-cyan-600 text-center inline-block m-auto mb-4 mt-4 mx-4" href="https://github.com/Midnight-Development/"><FaGithub /></a>
                <a className="h-6 w-6 text-fuchsia-600 hover:text-cyan-600 text-center inline-block m-auto mb-4 mt-4" href="https://discord.gg/gbAXhJHxtS"><FaDiscord /></a>
            </ul>
            <div className="border-t-4 border-purple-900 rounded-xl w-[15vw] m-auto"></div>
            <p className="font-secondary mt-5 text-center text-fuchsia-600">Contributors:</p>
            <p className="font-secondary my-5 text-center text-fuchsia-700 hover:text-cyan-600"><a href="/">Collin</a></p>
        </footer>
    </>
  )
}

export default Footer