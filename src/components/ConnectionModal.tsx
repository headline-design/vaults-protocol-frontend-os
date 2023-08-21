
import { disconnect } from 'methods/redux/actions/contract-setup';
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CopyPasteText from "../copy-paste";
import { useNavigate } from "react-router-dom"

import styled from 'styled-components';
import connectors from '../utils/connector-config';

// import { disconnect } from '../methods/redux/actions/contract-setup';
 import ALGO from '../assets/icons/algo.svg';

 import Check from '../assets/icons/check.svg';
 import Disconnect from '../assets/icons/disconnect.svg';
import Modal from '../components/core/Modal';
import { getCurrentSelectedNetwork } from '../methods/utils/get-current-network-selected';
import {
	handleConnect,
	Pipeline
  } from '../vaultUtils.js'
import { PropertySafetyFilled } from '@ant-design/icons';
interface ConnectionModalProps {
	open: boolean
	setOpen: Function,
	getPipeline: Function
}


const ConnectionModal: FC<ConnectionModalProps> = ({ open, setOpen, getPipeline}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate()

	//const address = useSelector((store: any) => store.DashboardReducer.address);
	const [walletInUse, setWalletInUse] = React.useState("")

	const [address,setAddress] = React.useState("")
	const [net,setNet] = React.useState("")
	
  
    

	const [connectInfo, setConnectInfo] = useState({ network: 'algo', protocol: null, wallet: null, chainId: 56 })	



	const [currentNetwork, setCurrentNetwork] = useState(getCurrentSelectedNetwork());
	const {chainId} = useSelector((store: any) => store.DashboardReducer)

	const disconnectWallet = () => {		
		setOpen(false);
		setTimeout(() => {
			localStorage.clear()
			window.location.reload();
		}, 500)
	}

    
	return (
		<>
	
			{!address ? (
				<Modal
					title="Connect Wallet"
					desc="You can connect your wallet to start staking your HDL"
					visible={open} 
					//width="992px"
					close={() => setOpen(false)}>
					<div>
						<div className="InfoWrapper">
							By connecting a wallet, you agree and acknowledge that you have read and accept HEADLINE Crypto's
							&nbsp;<a  onClick={() => {navigate("/terms")}}  style={{ cursor: "pointer", textDecoration: "underline", color: "#6F89E4" }}>Terms of Service</a>&nbsp; and &nbsp;<a onClick={() => {navigate("/privacy")}} style={{cursor: "pointer", textDecoration: "underline", color: "#6F89E4" }}>Privacy Policy</a>
						</div>
					</div>

					<div className="SectionWrapper">
						<div className="SectionHeader">
							<div className="number">1</div>
							<div className="modal-title">Choose Network</div>
						</div>
						<div className="SectionBodyNetwork">
							<div className="CardWrapper"
									onClick={() => {setConnectInfo({
										...connectInfo,
										network: 'algo',
										chainId: 56,
										protocol: null,										
									})								
								   
								    }									
									}>
                                
								{
									connectInfo.network === 'algo' &&
									<img className="check" src={Check} alt="check" />
								}
								<img src={ALGO} width={40} alt='algorand' />
								<div className="chain-name">Algorand</div>
							</div>
						
						
						</div>
					</div>

					

					<div className="SectionWrapper">
						<div className="SectionHeader">
							<div className="number">2</div>
							<div className="modal-title">Choose Wallet</div>
						</div>
						<div className="SectionBodyNetwork">
						<div className="container wallets-container">
  <div className="row row-cols-2">

							{
								connectors.map((entry, i) => (
									<div className="CardWrapper col"
										key={i}
										
										onClick={async() => {
											Pipeline.pipeConnector = entry.title
											let address = await handleConnect()
											setAddress(address)
											setWalletInUse(Pipeline.pipeConnector)
											setNet(Pipeline.main)
											getPipeline(address)
										
										}
										}>
										<img width={40} src={entry.image} alt={entry.title} />
										<div style={{ color:'#edecec' }} className="chain-name">{entry.title}</div>
									</div>
								))
							}
							</div>
						</div>
						</div>
					</div>
				</Modal>
			) : (
				<Modal
					title="Connected account"
					desc={`You are connected with ${walletInUse}`}
					visible={open}
					close={() => setOpen(false)}>
					<div className="CardContainer">
						<div className="ConnectInfoWrapper">
							<div>
								<p style={{ color:'#edecec' }}>Network</p>
								<h1 style={{ color:'#edecec' }}>{"Algorand " + (net?"MainNet":"TestNEt")}</h1>							
							</div>
						</div>

						<div className="AddressInfoWrapper">
							<p style={{ color:'#edecec' }}>Address</p>
							
								<CopyPasteText
  text={address}
  copyText={address}
  hideIcon={false}
/>
							</div>
						</div>

					<div className="ActionContainer">						
						<div onClick={disconnectWallet}>
							<img  src={Disconnect} alt="disconnect" />
							<p>Disconnect</p>
						</div>
					</div>
                   
				</Modal >
			)}
		</>
	)
}

export {Pipeline}

export default ConnectionModal;

