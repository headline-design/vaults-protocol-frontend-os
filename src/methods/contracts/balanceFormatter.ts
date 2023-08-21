/**
 * This function is used to create contracts web3 objects used for calling contract methods.
 * @param abi
 * @param contractAddress
 */

import App from "App";



async function balanceFormatter(balance: any) {


}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

});

export default balanceFormatter;
