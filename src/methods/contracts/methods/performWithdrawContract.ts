import abiManager from "abiManager";
import createContract from "../contract-creator";
import Notify from 'bnc-notify';
import { notification } from "antd";


interface IWithdrawAsset {
	categoryId: any,
    client:any
}

export const PerformWithdrawProtocol = async ({
	categoryId,
    client
	}: IWithdrawAsset) => {

	try {

		let notifyBNC = Notify({
			dappId: getDappId(56),
			networkId: 56,
			mobilePosition: 'bottom',
			desktopPosition: 'bottomRight'
		})

      
        const stakingContract = await createContract(abiManager.XSTAKING, "0x3d4D0699C4Df1539Fdc42C6F9594A478c6929051");
      
		// deposit
		return await stakingContract.methods['withdrawStakedTokens'](categoryId)
			.send({ from: client })
			.on('transactionHash', hash => {
              
				notifyBNC.hash(hash)
                notification['info']({
                    message: 'Withdrawing Staked Funds',
                    description: hash,
                    placement:"bottomRight",
                    duration:15,
					style:{cursor:"pointer"},
                    onClick: () =>
                    window.open(("https://algoexplorer.io/tx/")+hash),
                  });
			})


	} catch (e: any) {
		console.error(e);
		return { status: false, message: e.message }
	}
}



export const getDappId = (network: number) => {
	switch (network) {
		case 56: return 'a7f90c48-943a-4d3a-a8df-6ca5d0f7522a';
		case 97: return 'a7f90c48-943a-4d3a-a8df-6ca5d0f7522a';
		default: return '';
	}
}


export default PerformWithdrawProtocol;