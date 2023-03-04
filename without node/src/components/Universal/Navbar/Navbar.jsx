import React,{useState} from 'react'
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown.jsx';
function Navbar() {
    const [dropdown,setDropdown]=useState(false)
   const handleExplore=()=>{
        setDropdown(true)
   }
   const handleLeave=()=>{
    setDropdown(false)
   }
   
  return (
    <>
    <div className="header" onMouseLeave={handleLeave}>
           <div className="logo">
             <img src="data:image/png;base64,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"/>
             <span>Student Community</span>
           </div>
       
           <button type="button" className="explore-btn" onMouseEnter={handleExplore}>
            <span>Explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            {dropdown && <Dropdown/>}
          </button>
          

        <div className="search-bar">
            <input type="text" placeholder="Search..."/>
            <button className="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
            </button>
        </div>


        <ul className="links">
            <a className="login">
                <span>Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </a>
            <a className="register">
                <span>Register</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>
        </ul>
    </div>
      
    </>
  )
}

export default Navbar