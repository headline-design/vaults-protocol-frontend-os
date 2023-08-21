import React from 'react'
import { useNavigate } from "react-router-dom"

interface Props {
    
}

export const Footer = (props: Props) => {
    const navigate = useNavigate()
    const openGithub = () => {
       
          window.open('https://github.com/headline-design', "_blank");  
          return;
          
      }

    return (
        <footer>
            <p id="copy">
               
                Copyright &copy; HEADLINE Crypto. {new Date().getFullYear()}. All rights reserved.
            </p>
            <ul className="foot-menu">
                <li className="foot-list" onClick={() => {navigate("/info")}}>About</li>
                <li className="foot-list" onClick={()=>openGithub() }>Github</li>
                <img src="icons/PoweredBy.svg" alt="banner" className="footer-img" />
            </ul>
        </footer>
    )
}
