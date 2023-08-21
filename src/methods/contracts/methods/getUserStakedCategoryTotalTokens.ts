import abiManager from "abiManager";
import moment from "moment";
import createContract from "../contract-creator";

async function GetUserStakedCategoriesTotalTokens(categoryId:any) {
    try {

        const stakingContract = await createContract(abiManager.XSTAKING, "0x3d4D0699C4Df1539Fdc42C6F9594A478c6929051");

        const res = await stakingContract.methods.getStakingTokenById(categoryId).call();

    } catch (err :any) {
        console.log(err);
        return {
            status: false,
            message: err.message
        };
    }
}

export default GetUserStakedCategoriesTotalTokens;