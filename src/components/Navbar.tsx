import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Wallets from './Wallets'
import ConnectionModal from './ConnectionModal'
import { readLocalState, Pipeline} from '../vaultUtils'


interface Props {
}


export const Navbar = () => {
    const navigate = useNavigate()

    const [connectModal, setConnectModal] = useState(false);
   

    async function connect(data:any){
        let address = data
        let userObject = await readLocalState(Pipeline.main,address)
        console.log(userObject)
    }

    return (
        <div>
            <nav className="primary-nav">
                <img src="/icons/av_white.svg" alt="logo" className="logo"
                    onClick={() => navigate("/")}
                />
                <Wallets setOpen={setConnectModal} />
            </nav>

            <ConnectionModal
                open={connectModal}
                setOpen={setConnectModal}
                getPipeline={connect}>
            </ConnectionModal>
        </div>
    )
}
