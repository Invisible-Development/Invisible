import Modal from 'react-modal';
import SearchBar from "./objects/searchBar";
import React, { useState } from 'react';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle"


function NavBar() {
  Modal.setAppElement(document.getElementById('openModal'));

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  return (


    <nav className="font-secondary flex min-h-15 justify-center ml-20" id="nav">
          <h3 className="mt-10 mr-52 font-primary text-cyan-600" id="logo">Invisible</h3>
          <a className="text-cyan-600 h-6 w-6 mt-11 ml-56" id="icon" href="https://discord.gg/tSwMrkneyX">
            <FaDiscord className="hover" /> 
          </a>
          <li className="list-none mt-10"><a className="text-cyan-600 no-underline pr-4 pl-4 font-bold hover" href="/">Home</a></li>
          <li className="list-none mt-10"><a className="text-cyan-600 no-underline pr-4 pl-4 font-bold hover" href="/about">About</a></li>
          <li className="list-none mt-10"><a className="text-cyan-600 no-underline pr-4 pl-4 font-bold hover" href="/contact">Contact</a></li>
          <div className="mt-11">
            <FaSearch id="openModal" onClick={openModal} className="text-cyan-600 hover"/>
          </div>

          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="absolute top-1/4 left-10 right-10 bottom-10 blurred border-b-[1px] border-slate-900 w-auto h-fit rounded-3xl pb-8" overlayClassName="fixed top-0 left-0 right-0 bottom-0 text-slate-800">
            <SearchBar />
            <div className="hidden-animation" id="hidden">
              <div className="pl-2 h-8 ml-7 mt-7 max-w-[90%] border border-slate-50 rounded" id="hit1">
                <a className="font-secondary text-cyan-600" id="hit1text" href="/">No results</a>
                <a className="font-secondary pl-5 text-cyan-800" id="hit1description" href="/">No description</a>
              </div>
              <h3 className="font-secondary text-cyan-800 ml-16 mt-3">Secondary Results</h3>
              <div className="pl-2 h-8 ml-7 mt-7 max-w-[90%] border border-slate-50 rounded" id="hit2">
                <a className="font-secondary text-cyan-600" id="hit2text" href="/">No Secondary results</a>
                <a className="font-secondary pl-5 text-cyan-800" id="hit2description" href="/">No description</a>
              </div>
              <div className="pl-2 h-8 ml-7 mt-7 max-w-[90%] border border-slate-50 rounded" id="hit3">
                <a className="font-secondary text-cyan-600" id="hit3text" href="/">No Secondary results</a>
                <a className="font-secondary pl-5 text-cyan-800" id="hit3description" href="/">No description</a>
              </div>
            </div>
            <FaTimesCircle className="text-cyan-600 h-6 w-6 absolute right-0 top-0 mt-7 mr-7 hover" onClick={closeModal} />
          </Modal>
    </nav>
  );
}

export default NavBar;
