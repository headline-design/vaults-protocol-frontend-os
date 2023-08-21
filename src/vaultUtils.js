import Pipeline from "@pipeline-ui-2/pipeline/index";
import { sendTxns } from '@pipeline-ui-2/pipeline/utils'
import algosdk from 'algosdk'
import {Algo, Forum} from './asaLists'


const tealContracts = {
    daoDeposit: {},
}

function checkFastros(asa,amount) {
    if (asas.ForumAstro.includes(asa)) {
      return amount
    }
    else {
      return 0
    }
  }

  function checkAastros(asa,amount) {
    if (asas.AlgoAstro.includes(asa)) {
      return amount
    }
    else {
      return 0
    }
  }

const myAlgoWallet = Pipeline.init()

const appAddress = "4C64ZK4TPONQKB4MXLYISXHXAI5NXX3SRT7GPN35AHP5HFWIZ5W7D3XFZU"
const appId = 927414183

//all should be on mainNet
const asas = {
    vHDL: 712922982,
    realHDL: 137594422,
    AlgoAstro: Algo,
    ForumAstro: Forum,
    PlatAstro: 673621287,
    tinyHDLALGO: 552706313,
    algoFiHDLALGO: 607696609
}

const getContracts = async () => {
    let name = "daoDeposit"
    let data = await fetch("teal/" + name + ".txt")
    tealContracts[name].program = await data.text()
    let data2 = await fetch("teal/" + name + " clear.txt")
    tealContracts[name].clearProgram = await data2.text()
}

const setNet = (event) => {
    if (event.target.value === "TestNet") {
        Pipeline.main = false
        return "TestNet"
    }
    else {
        Pipeline.main = true
        return "MainNet"
    }

}

const handleConnect = async () => {
    let data = await Pipeline.connect(myAlgoWallet)
    if(data === "QW257JSOIZS52ZE74FTQYBUPWE66IWGT2V7RME7DPKO7ZMGFGT6PZYKL4M" || data === "55TOUZSM6AOK7PCUT7O5SWYSNUDDGTOEGQQBKZPX32I6RPAAW4KUSI56C4"){
        alert(`182,793.024822 - Total Staked sHDL
        +-10% - Flex is (18,279.3)
        --- Min viable - 164,514
        -- Ban at 164,513
        Current at ban - 148,028.304207
        + pAstro: 2 - 14,802.8304207
        + fAstro: 2 - 740.141521
        = 163,571.276148
        `)
    }
    return data
}

const switchConnector = (event) => {
    Pipeline.pipeConnector = event.target.value
    console.log(Pipeline.pipeConnector)
}

const deploy = async () => {

    let name = "daoDeposit"



    let appId = await Pipeline.deployTeal(tealContracts[name].program, tealContracts[name].clearProgram, [1, 1, 10, 1], ["create"])
    return {
        appId: appId,
        appAddress: algosdk.getApplicationAddress(appId)
    }
}

const deleteApp = async () => {
    let data = await Pipeline.deleteApp(document.getElementById("appid").value)
    return data
}

const optIn = async (appid) => {
    if(Pipeline.pipeConnector === "WalletConnect"){
        alert("Click ok FIRST, sign transaction on your phone, and THEN return to this screen")
    }
    let args = ["register"]
    let data = await Pipeline.optIn(appid, args)
    return data
}



const clear = async () => {
    let transServer = "https://node.testnet.algoexplorerapi.io/v2/transactions"
    if (Pipeline.main === true) { transServer = "https://node.algoexplorerapi.io/v2/transactions" }
    let params = await Pipeline.getParams()
    let appId = parseInt(document.getElementById("appid").value)
    let txn = algosdk.makeApplicationClearStateTxn(Pipeline.address, params, appId)
    let signedTxn = await Pipeline.sign(txn, false)
    let txid = await sendTxns(signedTxn, transServer, false, "", true)
    return txid
}



const readLocalState = async (net, addr, appIndex, pool = false) => {

    try {

        let url = ""

        if (!net) {
            url = "https://indexer.testnet.algoexplorerapi.io"
        }
        else {
            url = "https://indexer.algoexplorerapi.io"
        }

        let appData = await fetch(url + '/v2/accounts/' + addr + '?include-all=false&assets-limit=50')
        let appJSON = await appData.json()
        let algoBalance = await appJSON.account.amount / 1000000


        let obj = {
            algoBalance: algoBalance
        }

        if (pool) {
            obj.poolABalance = algoBalance || 0
        }
        else {
            obj.myBalance = algoBalance || 0
        }

        if (appJSON.account.assets !== undefined) {

            appJSON.account.assets.forEach(element => {
                let amount = element.amount

                if (!pool) {
                    switch (element["asset-id"]) {
                        case asas.vHDL:
                            obj.vHDL = amount
                            break;
                        case asas.realHDL:
                            obj.rHDL = amount / 1000000
                            break;
                        case asas.AlgoAstro:
                            obj.aAstro = amount
                            break;
                        case asas.ForumAstro:
                            obj.fAstro = amount
                            break;
                        case asas.PlatAstro:
                            obj.pAstro = amount
                            break;
                        default:
                            break;

                    }
                }
                else {
                    switch (element["asset-id"]) {
                        case asas.vHDL:
                            obj.vvHDL = amount / 1000000
                            break;
                        case asas.realHDL:
                            obj.vrHDL = amount / 1000000
                            break;
                        default:
                            break;
                    }
                }

            })
        }

        if (!pool) {

            let AppStates = appJSON.account["apps-local-state"]
            //alert(JSON.stringify(AppStates))

            if (AppStates !== undefined) {
                AppStates.forEach(state => {
                    if (state.id === parseInt(appIndex)) {
                        let keyvalues = state["key-value"]
                        if (keyvalues !== undefined) {
                            keyvalues.forEach(entry => {
                                switch (entry.key) {
                                    case "YmFubmVk":
                                        if (entry.value.uint === 1) { obj.banned = true }
                                        break;
                                    case "dkhETA==":
                                        obj.rAmount = entry.value.uint / 1000000
                                        break;
                                    default:
                                        break;
                                }
                            })
                        }
                    }
                })
            }
        }
        //if (obj.banned !== true){obj.banned = false}
        return obj
    }
    catch (error) { console.log(error) }
}


const commit = async (index, amount, appId) => {

    if(Pipeline.pipeConnector === "WalletConnect"){
        alert("Click ok FIRST, sign transaction on your phone, and THEN return to this screen")
    }
    let appAddress = algosdk.getApplicationAddress(appId)

    let data = await Pipeline.appCallWithTxn(parseInt(appId), ["addStuff"], appAddress, parseInt(amount * 1000000), "", parseInt(index), [appAddress], [parseInt(index)])
    return data

}

const redeem = async () => {
    let appAddress = algosdk.getApplicationAddress(appId)

    if(Pipeline.pipeConnector === "WalletConnect"){
        alert("Click ok FIRST, sign transaction on your phone, and THEN return to this screen")
    }

    let data = await Pipeline.appCall(appId, ["redeem"], [appAddress], [asas.realHDL])
    return data
}

const ban = async () => {
    let appId = document.getElementById("appid").value
    let userAddress = document.getElementById("userAddress").value
    let amount = parseInt(document.getElementById("tokenId").value) * 1000000

    let data = await Pipeline.appCall(appId, ["ban", amount], [userAddress], [])
    return data
}

const addAssets = async () => {
    let appId = parseInt(document.getElementById("appid").value)
    let appAddress = algosdk.getApplicationAddress(appId)
    let keys = Object.keys(asas)

    for (let i = 0; i < 2; i++) {
        let data = await Pipeline.appCall(appId, ["addasset"], [appAddress], [parseInt(asas[keys[i]])])
        alert(data)
    }
}

const fund = async () => {
    let appId = parseInt(document.getElementById("appid").value)
    let appAddress = algosdk.getApplicationAddress(appId)
    let data = await Pipeline.send(appAddress, 500000000000, "", undefined, undefined, asas.realHDL)
    return data
}

const funda = async () => {
    let appId = parseInt(document.getElementById("appid").value)
    let appAddress = algosdk.getApplicationAddress(appId)
    let data = await Pipeline.send(appAddress, 5000000, "", undefined, undefined, 0)
    return data
}

const getHDLValue = async () => {

    const poolAddress = "ALPWZJB6DRFNZIMP4SG44V27Z2YNKJ4DNEWVQ2HZ4JJBE4SUTVMTL4X35Q"

    let url = ""
    let usdc = 31566704

    if (!Pipeline.main) {
        url = "https://indexer.testnet.algoexplorerapi.io"
    }
    else {
        url = "https://indexer.algoexplorerapi.io"
    }

    let appData = await fetch(url + '/v2/accounts/' + poolAddress)

    let appJSON = await appData.json()

    let obj = {data:appJSON}


    appJSON.account.assets.forEach(element => {
        let amount = element.amount

        switch (element["asset-id"]) {
            case asas.realHDL:
                obj.hAmount = amount
                break;
            case usdc:
                obj.uAmount = amount
                break;
            default:
                break;
        }
    })

    return obj.uAmount / obj.hAmount
}

const keyCheck = async (calculator = false) => {
    let addresses = [Pipeline.address]
    let i = 0

    let url = ""

    if (!Pipeline.main) {
        url = "https://indexer.testnet.algoexplorerapi.io"
    }
    else {
        url = "https://indexer.algoexplorerapi.io"
    }

    let appData = await fetch(url + '/v2/accounts/' + addresses[i])

    let appJSON = await appData.json()

    let reward = 0

    let HDL = 0
    let pAstro = 0
    let fAstro = 0
    let aAstro = 0
    let tinyHDLALGO = 0
    let algoFiHDLALGO = 0

    if (appJSON.account.assets !== undefined) {

        appJSON.account.assets.forEach(element => {
            let amount = element.amount

            switch (element["asset-id"]) {
                case asas.realHDL:
                    HDL = amount
                    break;
                case asas.PlatAstro:
                    pAstro = amount
                    break;
                case asas.tinyHDLALGO:
                    tinyHDLALGO = amount
                    break;
                case asas.algoFiHDLALGO:
                    algoFiHDLALGO = amount
                    break;
                default:
                    fAstro += checkFastros(element["asset-id"],amount)
                    aAstro += checkAastros(element["asset-id"],amount)
                    break;
            }
        })
    }

    let fakeHDLS = (tinyHDLALGO + algoFiHDLALGO) * 2
    HDL += fakeHDLS

    reward = parseInt(HDL + (pAstro * 0.05 * HDL) + (fAstro * 0.0025 * HDL) + (aAstro * 0.03 * HDL))

    if (!calculator) {
        alert("HDL: " + HDL + ", pAstro: " + pAstro + ", fAstro: " + fAstro + ", aAstro: " + aAstro)
    }

    if (calculator) {
        return {
            HDL: (HDL / 1000000),
            pAstro: pAstro,
            fAstro: fAstro,
            aAstro: aAstro,
            reward: (reward / 1000000)
        }
    }
    else {

        if (HDL >= 2000000000 && pAstro >= 1) {

            return true
        }
        else {
            return false
        }
    }

}

const getAValue = async () => {

    let url = "https://price.algoexplorerapi.io/price/algo-usd"

    let appData = await fetch(url)

    let appJSON = await appData.json()

    let algoValue = appJSON.price
    return algoValue
}

export {
    funda,
    fund,
    addAssets,
    ban,
    redeem,
    commit,
    readLocalState,
    optIn,
    deleteApp,
    deploy,
    switchConnector,
    handleConnect,
    setNet,
    keyCheck,
    getHDLValue,
    getAValue,
    asas,
    tealContracts,
    Pipeline,
    appAddress,
    appId
}

/* example usage in JSX tag:

onClick={async () => {let txid = await connect()}}

*/