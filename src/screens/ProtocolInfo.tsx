import React, { useEffect } from 'react'
import {Navbar,  Footer} from "components"
import {PackagesCard2} from 'components/Cards'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import GetUserStakedCategories from 'methods/contracts/actions/getUserStakedCategories'

interface Props {
    page?: string;
}

export const ProtocolInfo = (props: Props) => {
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
                        <p id="topic">Contract Info</p>
                        <p id="sub-topic">
                            {pathname.includes("/info") ? "AC Vaults overview " : "Details of the Vaults Protocol "}
                        </p>
                        
                    </div>
                </div>
                <PackagesCard2 
                limit={""}></PackagesCard2>
            </div>
            <Footer/>
        </div>
    )
}
