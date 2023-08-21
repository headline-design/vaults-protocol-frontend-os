import { ConnectorNames } from './types';
//import getNodeUrl from './node-url';
import _const from '.././methods/_const';
import { DisconnectFromWallet } from './useAuth';
import getNodeUrl from './node-url';



export const connectorsByName = (connectorName: ConnectorNames, chainId: number) => {
    try {

        const rpcUrl = getNodeUrl();
        if (connectorName === ConnectorNames.Injected) {

            return ;
        }
    } catch (error) {

    }
}





