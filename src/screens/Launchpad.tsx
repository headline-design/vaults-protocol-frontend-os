import React, { useEffect } from 'react'
import {Navbar,  Footer} from "components"
import {PackagesCard2} from 'components/Cards'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import GetUserStakedCategories from 'methods/contracts/actions/getUserStakedCategories'
import { LaunchpadCard } from 'components/LaunchpadCard'

interface Props {
    page?: string;
}

export const LaunchpadPage = (props: Props) => {
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
                        <p id="topic">Launchpad Info</p>
                        <p id="sub-topic">
                            {pathname.includes("/info") ? "AC launchpad overview " : "Learn about Vaults Launchpad"}
                        </p>
                        
                    </div>
                </div>
                <LaunchpadCard
                limit={""}></LaunchpadCard>
            </div>
            <Footer/>
        </div>
    )
}
