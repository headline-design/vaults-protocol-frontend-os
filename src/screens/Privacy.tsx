import React, { useEffect } from 'react'
import {Navbar,  Footer} from "components"
import {PrivacyCard} from 'components/PrivacyCard'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
    page?: string;
}

export const PrivacyPage = (props: Props) => {
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
                        <p id="topic">Privacy</p>
                        <p id="sub-topic">
                            {pathname.includes("/privacy") ? "AC Vaults overview " : "Details of the Vaults Protocol "}
                        </p>
                        
                    </div>
                </div>
                <PrivacyCard 
                limit={""}></PrivacyCard>
            </div>
            <Footer/>
        </div>
    )
}
