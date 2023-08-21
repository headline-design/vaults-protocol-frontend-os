const appIndex = 927414183

const vaultHDL = 4504000000000

const Algo = [
  445568169, 445569260, 445569822, 445570411, 445570786, 445571285, 445572039, 445572743, 445573215, 445573651, 456423620, 456427511, 456429650, 456433554, 456435444, 456437565, 456439368, 456442371, 456443779, 456445171, 464197360, 464199118, 464199727, 464201018, 464202221, 464203124, 464204475, 464205610, 464207071, 464208589, 471982576, 471985014, 471987722, 473640503, 473643846, 473651057, 473658580, 473662757, 473668209, 473670914, 475613252, 475616130, 502471248, 502482524, 502490896, 502500073, 502509832, 502519115, 502541437, 502547154, 502553013, 502565760, 535128334, 535131839, 535133901, 535135771, 535137022, 535138614, 535139911, 535141396, 535143622, 535146138, 535152278, 535153562, 535157068, 535159731, 535162328, 535166309, 535169211, 535171934, 548015593, 548021097, 548024499, 548027410, 548032469, 548035199, 548041256, 548043749, 548045811, 548049287, 562258753, 562262432, 562279027, 562281887, 562283416, 562285222, 562286403, 562287703, 562289261, 562303480, 576840281, 576842383, 576844469, 576845790, 576848239, 576849429, 576850733, 576851713, 576853720, 576855269, 576857743, 576901842, 576904558, 576907747, 576946341, 581655761, 581670373, 581692142, 590570900, 590573411, 590575876, 590577474, 590578448, 590582111, 590584673, 590588467, 590590669, 590593249, 590595760, 590597920, 602055153, 602056409, 602062616, 602063994, 602066749, 602071286, 602075976, 602078503, 602081786, 602084343, 617448328, 617451493, 617453998, 617455868, 617459983, 617461914, 617465035, 617467071, 617469488, 617471806, 627078180, 631830864, 631834345, 631842236, 631845133, 631850526, 631982203, 631985348, 631986890, 634067128, 644724417, 644730558, 644732553, 644750318, 644753223, 644756229, 644759682, 644762471, 644765555, 644854218, 656141452, 656145216, 656147132, 656150675, 656154698, 656158725, 656160252, 656161656, 656163459, 656165674, 667534630, 667536751, 667538327, 667541036, 667544181, 667545944, 667548197, 667550196, 667552276, 667554501, 678861343, 678864696, 678873889, 678880527, 678883237, 678885488, 678891698, 678893929, 678902468, 678904499, 689685777, 689688394, 689690579, 689692259, 689694233, 689696980, 689698438, 689701122, 689702543, 689703750, 698405085, 698407174, 698408667, 698409885, 698410921, 698412421, 698413879, 698415742, 698418991, 698420576, 707719319, 707723542, 707724084, 707726461, 707727225, 707728082, 707731119, 707731776, 707732469, 708106509, 713883314, 713884523, 713885860, 713886614, 713887625, 713889017, 713889842, 713890577, 713891244, 713891700, 531411274
]

const Forum = [
  699978601,
  699556702,
  645137849,
  645134879,
  645131807,
  591694299,
  591692876,
  535631028,
  535627807
]

const asas = {
  vHDL: 712922982,
  realHDL: 137594422,
  AlgoAstro: Algo,
  ForumAstro: Forum,
  PlatAstro: 673621287,
  tinyHDLALGO: 552706313,
  algoFiHDLALGO: 607696609
}

const txnAddresses = [
  "55TOUZSM6AOK7PCUT7O5SWYSNUDDGTOEGQQBKZPX32I6RPAAW4KUSI56C4"
]


function checkFastros(asa, amount) {
  if (asas.ForumAstro.includes(asa)) {
    return amount
  }
  else {
    return 0
  }
}

function checkAastros(asa, amount, banning = false) {
  if (asas.AlgoAstro.includes(asa)) {
    if (!banning) {
      return amount
    }
    else {
      return 1
    }
  }
  else {
    return 0
  }
}

async function tvl() {

  let tvlStart = 0

  let addresses = txnAddresses

  let url = "https://mainnet-idx.algonode.cloud"

  for (let i = 0; i < addresses.length; i++) {

    let appData = await fetch(url + '/v2/accounts/' + addresses[i] + '?include-all=false&assets-limit=50')

    let appJSON = await appData.json()

    let reward = 0

    let HDL = 0
    let pAstro = 0
    let fAstro = 0
    let aAstro = 0
    let tinyHDLALGO = 0
    let algoFiHDLALGO = 0

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
          fAstro += checkFastros(element["asset-id"], amount)
          aAstro += checkAastros(element["asset-id"], amount, true)
          break;
      }
    })

    let fakeHDLS = (tinyHDLALGO + algoFiHDLALGO) * 2
    HDL += fakeHDLS

    reward = parseInt(HDL + (pAstro * 0.05 * HDL) + (fAstro * 0.0025 * HDL) + (aAstro * 0.03 * HDL))

    let AppStates = await appJSON.account["apps-local-state"]

    if (AppStates !== undefined) {
      AppStates.forEach(async (state) => {
        if (state.id === parseInt(appIndex)) {
          let optedIn = true
          let rAmount = 0
          let banned = false
          let keyvalues = state["key-value"]
          if (keyvalues !== undefined) {
            keyvalues.forEach(entry => {
              switch (entry.key) {
                case "YmFubmVk":
                  if (entry.value.uint === 1) { banned = true }
                  break;
                case "dkhETA==":
                  rAmount = entry.value.uint
                  break;
                default:
                  break;
              }
            })
          }

          let minWiggle = rAmount - (rAmount * 0.1)


          if (optedIn !== undefined) {
            if ((HDL < 2000000000 || pAstro === 0 || reward < minWiggle) && !banned) {
              console.log("Detected that user should be banned: " + addresses[i] + " Staked: " + rAmount + " Balance: " + " HDL: " + HDL + " pAstro: " + pAstro + " aAstro: " + aAstro + " fAstro: " + fAstro )
            }
            else {
              if (banned) {
                console.log("Detected banned user: " + addresses[i])
                tvlStart -= rAmount
                console.log(tvlStart)
              }
            }
          }
        }
      })
    }
  }
  console.log("Locked amount")
  console.log(tvlStart)
  return (tvlStart) / 1000000
}

export default tvl