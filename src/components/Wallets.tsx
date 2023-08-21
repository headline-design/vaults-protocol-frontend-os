import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Wallet } from '../assets/icons/wallet.svg';
import MyAlgo from '../images/myalgo.svg';
import connectors from '../utils/connector-config';
import truncateAddress from '../methods/utils/truncate-address';
import retrieveAddress from 'methods/utils/retrieve-address';
import _const from 'methods/_const';
import saveAddress from 'methods/utils/save-address';
import { reacquireEmit } from 'methods/utils/event-fnc-recall';
import { assignAddresses } from 'methods/utils/protocol-settings';
import { addSettingsObjectToStorage } from 'methods/utils/intro-settings';
import { recreateWeb3 } from 'utils/useAuth';
import { Pipeline } from './ConnectionModal';
import WalletLogo from 'components/walletLogo'
import myAlgo from 'assets/icons/MyAlgo.svg'
import algoSigner from 'assets/icons/AlgoSigner.svg'
import walletConnect from 'assets/icons/walletconnect.svg'

interface WalletProps {
	setOpen: Function
}


const Wallets: FC<WalletProps> = ({ setOpen }) => {
	const dispatch = useDispatch();

	const {  walletInUse,nativeBalance,chainId} = useSelector((store: any) => store.DashboardReducer)

	const [width, setWidth] = useState<number>(window.innerWidth);

	const [walletLogo, setWalletLogo] = useState('');
	const [networkLogo, setNetworkLogo] = useState('');
	const [address,setAddress] = useState('')
	const [balance,setBalance] = useState(0)
	const [img,setImg] = useState(undefined)





	function addressWork() {
		const localAddress = retrieveAddress();
		if(localAddress){
		dispatch({
				type: _const.ADDRESS,
				payload: {
					address: localAddress,
				},
			});
		}

	}



	// main function handling the connection into the app
	const insideConnectWallet = (account: any) => {
		//console.log("Account Got ", account);
		saveAddress(account);
		dispatch({
			type: _const.ADDRESS,
			payload: { address: account },
		});

		const connectionDetails = JSON.parse(localStorage.getItem("CONNECTION_DETAILS"));
		if(connectionDetails){

			let path = window.location.pathname;
		    path = path.length > 1 ? path.substring(1) : path;
		    reacquireEmit(path);
		}else{

			let path = window.location.pathname;
			path = path.length > 1 ? path.substring(1) : path;
			reacquireEmit(path);
		}

	}

	useEffect(() => {
		if (Pipeline.address !== ""){
			let img = myAlgo
			switch (Pipeline.pipeConnector) {
				case "myAlgoWallet":
					img = myAlgo
					break;
				case "AlgoSigner":
					img = algoSigner
					break;
				case "WalletConnect":
					img = walletConnect
					break;
				default:
					break;
			}
			setImg(img)
			setAddress(Pipeline.address)
			setInterval(updateBalance,5000)
		}
	})

	const updateBalance = () => {
		setBalance(Pipeline.balance || 0)
	}

	useEffect(() => {
		if (typeof address !== 'undefined' && address) {
			insideConnectWallet(address);

		}
	}, [address]);


	useEffect(() => {

		assignAddresses();
		addressWork();
		addSettingsObjectToStorage();

		// eslint-disable-next-line
	}, []);


	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	function handleRejectedCall() {

	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		window.addEventListener('unhandledrejection', handleRejectedCall);

		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};

	}, []);




	useEffect(() => {

		const connectionDetails = JSON.parse(localStorage.getItem("CONNECTION_DETAILS"));
		if(connectionDetails){
			const connectedWallet = connectors.filter(x => x.title === connectionDetails.walletName);
			connectedWallet[0] && setWalletLogo(connectedWallet[0].image);

		}else{
			const connectedWallet = connectors.filter(x => x.title === walletInUse);
		    connectedWallet[0] && setWalletLogo(connectedWallet[0].image);

		}

	}, [address, walletInUse])




	return (
		<>

			<div className="ConnectWalletStyle" onClick={() => setOpen(true)}>
				{!address ?
					(<div className="flex wallet-icon-mobile">
						<div className="wallet-margin" style={{marginRight: "12px",display: "flex"}}>
							<Wallet />
						</div>
						<p className="connect-wallet">Connect Wallet</p>
					</div>
					) : (
						<div>
							<span className="wallet-sum">{balance} ALGO </span>
							<div className="wallet">
								<span className="wallet-address">{truncateAddress(address)}</span>
								<WalletLogo
									label={img}
								></WalletLogo>
							</div>
						</div>
					)
				}

			</div>
		</>
	)
}

export default Wallets;


