import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

function Footer() {
    return (
        <footer className="static left-0 bottom-0 text-center width-full">
            <p className="font-secondary mt-5 text-center text-cyan-600"><strong>2022 &copy; All right Reserved <a href="https://github.com/Collin8432/" className="text-cyan-800 hover">Invisible</a></strong></p>
            <ul className="footer-social">
                <p className="font-secondary mt-5 text-center text-cyan-600">An error or an idea? <a className="text-cyan-800 hover" href="https://github.com/Collin8432/Invisible">Add it!</a></p>
                <a className="h-6 w-6 text-cyan-600 hover text-center block m-auto mb-4 mt-4" href="https://github.com/Collin8432/"><FaGithub /></a>
            </ul>
        </footer>
    );
}

export default Footer;