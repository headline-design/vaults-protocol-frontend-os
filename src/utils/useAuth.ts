import { ConnectorNames } from './types';
import { connectorsByName } from './web3React';
import { nodes } from './node-url';
import _const from '../methods/_const';
import removeAddress from '../methods/utils/remove-address';
import { connectorLocalStorageKey } from './config';
import reduxStore from '../methods/redux';
import { Dispatch } from "redux"
import { useSelector } from 'react-redux';








export const Login = (connectorID: ConnectorNames, chainId: number, walletName: string) => {

    return async (dispatch: Function) => {
        try {
            let account: any = null;


            const connector: any = connectorsByName(connectorID, chainId);

            const dt = { chainId, connectorID, walletName }

            localStorage.setItem("CONNECTION_DETAILS", JSON.stringify(dt))

            dispatch({
                type: _const.NETWORK_CONNECT,
                payload: { ChainId: chainId}
            })



            if (connector) {

                if (connectorID === 'injected') {
                    await switchOrAddNetworkToMetamask(chainId);

                    let connection = await connector.activate();



                    connection.provider.on('accountsChanged', (code: number, reason: string) => {

                        const accountSwitch = code[0];
                        if (accountSwitch) {
                            if (accountSwitch) {
                                dispatch({
                                    type: _const.ADDRESS,
                                    payload: { address: accountSwitch }
                                })
                            }
                        } else {
                            DisconnectFromWallet();
                        }
                    });

                    account = connection.account;


                }


                if (account) {
                    dispatch({
                        type: _const.ADDRESS,
                        payload: { address: account, walletInUse: walletName, chainId }
                    })

                }

            } else {
                console.warn("Can't find connector \n The connector config is wrong");
            }
        } catch (error) {
            console.log(error);
        }

    }

};


export const recreateWeb3 = () => {

    return async (dispatch: Function) => {

        try {
            const connectionDetails = JSON.parse(localStorage.getItem("CONNECTION_DETAILS"));



            if (connectionDetails) {

                let account: any = null;

                let { walletName, chainId } = connectionDetails;
                dispatch({
                    type: _const.ADDRESS,
                    payload: { address: '', walletInUse: walletName, chainId }
                })


                const connector: any = connectorsByName(connectionDetails.connectorID, connectionDetails.chainId);

                if (connector) {

                    if (connectionDetails.connectorID === 'injected') {
                        await switchOrAddNetworkToMetamask(connectionDetails.chainId);

                        let connection = await connector.activate();

                        connection.provider.on('accountsChanged', (code: number, reason: string) => {

                            const accountSwitch = code[0];
                            if (accountSwitch) {
                                if (accountSwitch) {
                                    dispatch({
                                        type: _const.ADDRESS,
                                        payload: { address: accountSwitch }
                                    })
                                }
                            } else {
                                DisconnectFromWallet();
                            }
                        });

                        account = connection.account;

                    }


                    if (connectionDetails.connectorID === 'walletconnect') {
                        const result = await connector.enable();
                        account = result[0];


                        // very important 2 lines
                        delete connector.__proto__.request;
                        connector.hasOwnProperty("request") && delete connector.request

                    }


                    if (account) {

                        dispatch({
                            type: _const.ADDRESS,
                            payload: { address: account }
                        })
                    }

                } else {
                    console.warn("Can't find connector \n The connector config is wrong");
                }
            } else {
                console.log("Storage Data Not There Yet Show Modal");
            }


        } catch (error) {
            console.log(error)
        }

    }

};


export const DisconnectFromWallet = async () => {

    try {
        let connector: any = localStorage.getItem("CONNECTION_DETAILS");
        let { connectorID } = JSON.parse(connector);

        if (connectorID === "walletconnect") {
            localStorage.removeItem(connectorID)
        }

        removeAddress();





        window.sessionStorage.removeItem(connectorLocalStorageKey);
        window.localStorage.removeItem("CONNECTION_DETAILS");

        const DashboardReducerAction: any = await reduxStore();
        DashboardReducerAction.dispatch({
            type: _const.PRISTINE,
        });

        DashboardReducerAction.dispatch({
            type: _const.LOADINGDATA,
            payload: false
        });





        window.location.reload();

    } catch (error) {
        console.log(error)
    }

};



async function switchOrAddNetworkToMetamask(chainId: number) {

    const hexChainId = `0x${chainId.toString(16)}`;

    try {
        // switch to the selected network
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: hexChainId }]
        })



    } catch (e :any) {

        if (e.code === 4902) {

            let params: any = {};

            // add algo network
            if (chainId === 56) {

                params = {
                    chainId: hexChainId,
                    chainName: 'Algorand Mainnet',
                    nativeCurrency: {
                        name: 'ALGO',
                        symbol: 'algo',
                        decimals: 6,
                    },
                    rpcUrls: nodes,
                    blockExplorerUrls: ['https://algoexplorer.io/'],
                }

            }

            try {

                // the network is added
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [params]
                });
            } catch (e) {
                console.log(e);

            }


        }




    }
}




