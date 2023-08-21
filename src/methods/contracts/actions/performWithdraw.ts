import { notification } from "antd";
import { notify } from "components/core/Notifier";
import _const from "methods/_const";
import Rehydrate from "./rehydrateValues";

interface IWithdrawAsset {
	categoryId: any,
    client:any,
    status: any,
    message: any
}

function PerformWithdraw(data:IWithdrawAsset) {
    return async (dispatch: Function) => {
        
        try {
            dispatch({
                type: _const.LOADINGDATA,
                payload: true
            })
            const response = await PerformWithdraw(data);
            const properties = Object.keys(response);

			if (properties.includes('status') && response) {
				dispatch(Rehydrate(data.client));
                notification['success']({
                    message: 'Withdraw Staked Funds',
                    description: "Withdraw of staked funds successful",
                    placement:"bottomRight",
                    duration:5,
                   
                  });
            }else{
                dispatch({
                    type: _const.LOADINGDATA,
                    payload: false
                })
                notification['error']({
                    message: 'Withdraw Staked Funds',
                    description: "Withdraw of staked funds unsuccessful",
                    placement:"bottomRight",
                    duration:5,
                   
                  });
            }

          
        } catch (err) {
            console.error(err);
           
        }
    };
}

export default PerformWithdraw;