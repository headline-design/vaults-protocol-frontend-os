import abiManager from "abiManager";
import createContract from "../contract-creator";

async function GetUserStakedCategoriesTotalTokensWithdrawn(categoryId:any) {
    try {

        const stakingContract = await createContract(abiManager.XSTAKING, "0x3d4D0699C4Df1539Fdc42C6F9594A478c6929051");

        const res = await stakingContract.methods.getFinalTokenStakeWithdraw(categoryId).call();

    } catch (err :any) {
        console.log(err);
        return {
            status: false,
            message: err.message
        };
    }
}

export default GetUserStakedCategoriesTotalTokensWithdrawn;