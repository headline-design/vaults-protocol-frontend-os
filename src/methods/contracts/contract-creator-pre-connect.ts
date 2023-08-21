/**
 * This function is used to create contracts web3 objects used for calling contract methods.
 * @param abi
 * @param contractAddress
 */




async function createContractPreConnect(abi: Array<any>, contractAddress: any) {

let web3Instance

  if (web3Instance) {
    return new web3Instance.eth.Contract(abi, contractAddress);
  } else {
    throw "Can't create contract";
  }


}

export default createContractPreConnect;
