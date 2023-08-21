import _const from "methods/_const";
import balanceFormatter from "../balanceFormatter";


function GetUserHdlBalance(ownerAddress:any) {
    return async (dispatch: Function) => {
        
        try {
           
            const response = await (ownerAddress);
            const formattedRes = await balanceFormatter(response)
           
           
            dispatch({
                type: _const.HDL_BALANCE,
                payload: formattedRes
            })
          
        } catch (err) {
           
           
        }
    };
}

export default GetUserHdlBalance;