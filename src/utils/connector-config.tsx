import { Config, ConnectorNames } from './types';
import MyAlgo from '../assets/icons/MyAlgo.svg';
import WalletConnect from '../assets/icons/walletconnect.svg'
import AlgoSigner from '../assets/icons/AlgoSigner.svg';

const connectors: Config[] = [
    {
        title: 'myAlgoWallet',
        icon: 'myalgo',
        image: MyAlgo,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'WalletConnect',
        icon: 'walletconnect',
        image: WalletConnect,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: 'AlgoSigner',
        icon: 'algosignert',
        image: AlgoSigner,
        connectorId: ConnectorNames.Injected,
    },
];

export default connectors;
export const connectorLocalStorageKey = 'connectorId';
