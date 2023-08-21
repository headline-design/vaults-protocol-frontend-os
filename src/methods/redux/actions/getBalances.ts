import getNodeUrl from "utils/node-url";
import commas from "../../utils/commas";
import _const from "../../_const";

const getNativeBalance = (address: string,chainId :any) => {

	return async (dispatch: Function) => {

		try {


			let balance
			balance = commas(Number(balance) * Math.pow(10, -18), 2)
            //let currency = chainId == 56?'BNB':'MATIC';
            let currency = 'BNB';
			dispatch({
				type: _const.NATIVE_BALANCE,
				payload: balance + ' ' + currency
			});
		} catch (e) {
			console.log(e)
		}

	}
}


export default getNativeBalance;

