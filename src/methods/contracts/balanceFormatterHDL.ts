/**
 * This function is used to create contracts web3 objects used for calling contract methods.
 * @param abi
 * @param contractAddress
 */



async function balanceFormatterHDL(balance: any) {

  let web3Instance

  if (web3Instance) {

    const FormattedResult =  formatter.format(balance);


    return FormattedResult;
  } else {
    throw "Cant Format Balance";
  }


}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

});

export default balanceFormatterHDL;
