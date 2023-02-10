import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"

function Footer() {
    return (
        <footer className="static left-0 bottom-0 text-center width-full">
            <div className="border-t-4 border-slate-900 rounded-xl w-[10vw] m-auto"></div>
            <p className="font-secondary mt-5 text-center text-fuchsia-600"><strong>2022 &copy; All right Reserved <a href="https://github.com/Invisible-Development/" className="text-fuchsia-700 hover:text-cyan-600">Invisible</a></strong></p>
            <ul>
                <p className="font-secondary mt-5 text-center text-fuchsia-600">An error or an idea? <a className="text-fuchsia-700 hover:text-cyan-600" href="https://github.com/Invisible-Development/Invisible-React">Add it!</a></p>
                <a className="h-6 w-6 text-fuchsia-600 hover:text-cyan-600 text-center inline-block m-auto mb-4 mt-4" href="https://github.com/Invisible-Development/"><FaGithub /></a>
                <a className="h-6 w-6 text-fuchsia-600 hover:text-cyan-600 text-center inline-block m-auto mb-4 mt-4" href="https://discord.gg/gbAXhJHxtS"><FaDiscord /></a>
            </ul>
            <div className="border-t-4 border-slate-900 rounded-xl w-[15vw] m-auto"></div>
            <p className="font-secondary mt-5 text-center text-fuchsia-600">Contributors:</p>
            <p className="font-secondary my-5 text-center text-fuchsia-700 hover:text-cyan-600"><a href="/contributors/Collin">Collin</a></p>
        </footer>
    );
}

export default Footer;