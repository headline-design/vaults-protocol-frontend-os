import _const from "methods/_const";
import balanceFormatter from "../balanceFormatter";



function GetTotalStaked() {
    return async (dispatch: Function) => {

        try {

            const response = await GetTotalStaked();


            const FinalBalance = Web3.utils.fromWei(response.toString(), 'ether');

            const USDResultHDL =  await balanceFormatter(response);
            const formattedRes = await balanceFormatter(response)


            dispatch({
                type: _const.TOTAL_STAKED_CONTRACT,
                payload: formattedRes
            })

            dispatch({
                type: _const.TOTAL_STAKED_CONTRACT_USD,
                payload: USDResultHDL
            })

        } catch (err) {


        }
    };
}

export default GetTotalStaked;