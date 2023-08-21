import React, { useEffect } from 'react'
import {Navbar,  Footer} from "components"
import {LaunchpadThanksCard} from 'components/LaunchpadThanksCard'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
    page?: string;
}

export const LaunchpadThanksPage = (props: Props) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const openGithub = () => {
       
        window.open('https://github.com/headline-design', "_blank");  
        return;
        
    }

    const dispatch = useDispatch();
 

    return (
        <div className="transactions">
            <Navbar />
            <div className="transaction-main">
                <div className="header">
                    <img src="/icons/back-arrow.svg" alt="back" className="back-img" 
                        onClick={() => navigate(-1)}
                    />
                    <div className="page-dets">
                        <p id="topic">Confirmation Log</p>
                        <p id="sub-topic">
                            {pathname.includes("/thanks") ? "Vaults Protocol Opt-In" : "Vaults Protocol Opt-In"}
                        </p>
                        
                    </div>
                </div>
                <LaunchpadThanksCard 
                limit={""}></LaunchpadThanksCard>
            </div>
            <footer>
            <p id="copy">
               
                Copyright &copy; HEADLINE Crypto. {new Date().getFullYear()}. All rights reserved.
            </p>
            <ul className="foot-menu">
                <li className="foot-list" onClick={() => {navigate("/info")}}>About</li>
                <li className="foot-list" onClick={()=>openGithub() }>Github</li>
                <img src="/icons/PoweredBy.svg" alt="banner" className="footer-img" />
            </ul>
        </footer>
        </div>
    )
}
