
export enum ConnectorNames {
    Injected = 'injected',
    ALGO = 'algo',
}

//used For Contract Creator
export enum WalletConnectorNames {
    InjectedWallet = 'MyAlgo',
    AlgoSigner = 'AlgoSigner',
}

export declare type Login = (connectorId: ConnectorNames) => void;
export interface Config {
    title: string;
    icon: string;
    image: any;
    connectorId: ConnectorNames;
}

export interface ConfigVaults {
    code: string;
    image: any;
}