import _const from "methods/_const";
import balanceFormatterHDL from "../balanceFormatterHDL";


function GetUserInfo(ownerAddress:any) {
    return async (dispatch: Function) => {

        try {

            dispatch({
                type: _const.LOADINGDATA,
                payload: true
            })

            dispatch({
                type: _const.LOADINGDATAREWARD,
                payload: true
            })

            let userInfo = {
            };


            dispatch({
                type: _const.USER_INFO,
                payload: userInfo
            })

            dispatch({
                type: _const.LOADINGDATA,
                payload: false
            })

        } catch (err) {


        }
    };
}

export const getUSDHDLValue = async (
	amount: any,
	currentPrice: number
	) => {

   let FinalBalance

    const USDResultHDL = await balanceFormatterHDL(Number(FinalBalance) * currentPrice);
    return USDResultHDL;

}


export default GetUserInfo;