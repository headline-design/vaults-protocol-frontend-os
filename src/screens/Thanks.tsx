import React, { useEffect } from 'react'
import {Navbar,  Footer} from "components"
import {ThanksCard} from 'components/ThanksCard'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
    page?: string;
}

export const ThanksPage = (props: Props) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

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
                <ThanksCard 
                limit={""}></ThanksCard>
            </div>
            <Footer/>
        </div>
    )
}
