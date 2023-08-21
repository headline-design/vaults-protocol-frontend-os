import abiManager from "abiManager";
import moment from "moment";

async function GetCategoryTotalTokensStaked(categoryId:any) {
    try {


    } catch (err :any) {
        console.log(err);
        return {
            status: false,
            message: err.message
        };
    }
}

export default GetCategoryTotalTokensStaked;