import React, { useEffect } from 'react'
import {Navbar,  Footer} from "components"
import {TermsCard} from 'components/TermsCard'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
    page?: string;
}

export const TermsPage = (props: Props) => {
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
                        <p id="topic">Terms of Service</p>
                        <p id="sub-topic">
                            {pathname.includes("/terms") ? "AC Vaults overview " : "Details of the Vaults Protocol "}
                        </p>
                        
                    </div>
                </div>
                <TermsCard 
                limit={""}></TermsCard>
            </div>
            <Footer/>
        </div>
    )
}
