import React, { useEffect } from "react";
import Notification from "../components/core/Notifier";
import { Footer, Navbar, Modal } from "components";
import { PackagesCard } from "components/Cards";
import { useNavigate } from "react-router-dom";
import { Staking } from "./Staking";
import { useDispatch, useSelector } from "react-redux";
import GetCategories from "methods/contracts/actions/getCategories";
import GetUserInfo from "methods/contracts/actions/getUserInfo";
import GetUserHdlBalance from "methods/contracts/actions/getUserHdlBalance";
import GetTotalStaked from "methods/contracts/actions/getTotalStaked";
import GetUserStakedCategories from "methods/contracts/actions/getUserStakedCategories";
import { notify } from "components/core/Notifier";
import { recreateWeb3 } from "utils/useAuth";
import SmallSideLoader from "components/core/SmallSideLoader";
import { Tooltip } from "@material-ui/core";
import { FastBackwardFilled, QuestionCircleOutlined } from "@ant-design/icons";
import {
  Pipeline,
  readLocalState,
  asas,
  optIn,
  appAddress,
  appId,
  keyCheck,
  getHDLValue,
  getAValue,
} from "vaultUtils";
import CopyPasteTextApp from "../copy-paste-app";
import key from "../assets/icons/Key.svg";
import { findAllByDisplayValue } from "@testing-library/react";
import Form from "../components/Form";
import Check from "../assets/icons/check.svg";
import Countdown from "components/Countdown";
import tvl from 'tvl'
import RedeemButton from '../components/RedeemButton'

interface Props { }

//Pipeline.address = "55TOUZSM6AOK7PCUT7O5SWYSNUDDGTOEGQQBKZPX32I6RPAAW4KUSI56C4"

Pipeline.main = true;
//var lastTime = Date.now()

var fetched = false;

export const Home = (props: Props) => {
  const navigate = useNavigate();

  const [modal, setModal] = React.useState({
    open: false,
    type: "",
    categoryId: null,
  });
  const openModal = (open: boolean, type: string, categoryId: any) =>
    setModal({ open, type, categoryId });
  const closeModal = () =>
    setModal({ open: false, type: "", categoryId: null });

  const [modal2, setModal2] = React.useState({ open: false, type: "" });
  const openModal2 = (open: boolean, type: string) => setModal2({ open, type });
  const closeModal2 = () => setModal2({ open: false, type: "" });

  const {
    userInfo,
    hdlBalance,
    totalStakedContract,
    totalStakedUSD,
    summedRewardsUserInfo,
    loadingDataReward,
  } = useSelector((store: any) => store.DashboardReducer);

  const categories = [
    {
      id: 0,
      name: "Platinum Vault",
      apy: 105,
      limit: "5000000",
      totalStakedInCategory: "infinite",
    },
    {
      id: 1,
      name: "Liquid Staking",
      apy: 25,
      limit: "300000",
      totalStakedInCategory: "n/a",
    },
    {
      id: 2,
      name: "Multi-Stake",
      apy: 57,
      limit: "1000000",
      totalStakedInCategory: "n/a",
    },
  ];

  const dispatch = useDispatch();

  const [wallet, setWallet] = React.useState(false);
  const toggleWallet = () => setWallet(!wallet);
  const [loadingData, setLoadingData] = React.useState(true);
  const [vvHDL, setVvHDL] = React.useState(0);
  const [vAlgo, setVAlgo] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [myAlgoBalance, setMyAlgoBalance] = React.useState(0);
  const [myVaultBalance, setMyVaultBalance] = React.useState(0);
  const [hValue, setHValue] = React.useState(0);
  const [aValue, setAValue] = React.useState(0);
  const [banned, setBanned] = React.useState(false);
  const [mysHDLBalance, setMysHDLBalance] = React.useState(0);
  const [keyScript, setkeyScript] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [vrHDL, setVrHDL] = React.useState(0);
  const [eligible2, setEligible2] = React.useState(false);
  const [signupOver, setSignupOver] = React.useState(false);
  const [tvlAmount, setTvlAmount] = React.useState(0)
  const [tvlChecked, setTvlChecked] = React.useState(false)



  useEffect( () => {
    //let time = Date.now()
    //if (time >= lastTime + 10000 ){lastTime = time}

    if (!fetched) {
      fetched = true;
      setInterval(getInfo, 4000);
    }
    if (Pipeline.address !== "") {
      setAddress(Pipeline.address);
      setConnected(true);
    }

  });

  useEffect(async () => {
    if (!tvlChecked) {
      let tvla = await tvl();
      setTvlAmount(tvla);
      setTvlChecked(true);
    }
  }, []);

  async function getInfo() {
    setLoadingData(true);
    if (Pipeline.address !== "") {
      setConnected(true);
      setAddress(Pipeline.address);

      let myData = await readLocalState(
        Pipeline.main,
        Pipeline.address,
        appId,
        false
      );
      if (myData !== undefined) {
        console.log("My Data");
        console.log(myData);
        setMyAlgoBalance(myData.myBalance);
        setMysHDLBalance(myData.vHDL);
        setBanned(myData.banned);
        //alert(JSON.stringify(myData))
        setMyVaultBalance(myData.rAmount);
        Pipeline.balance = myData.myBalance;
      } else alert("Unable to fetch data for address: " + Pipeline.address);
    }

    let HDLValue = await getHDLValue();
    let AlgoValue = await getAValue();
    setAValue(AlgoValue);
    setHValue(HDLValue);
    //setLoadingData(true)

    let data = await readLocalState(Pipeline.main, appAddress, undefined, true);
    console.log(JSON.stringify(data));

    if (data.vvHDL !== undefined) {
      setVvHDL(data.vvHDL);
      setVrHDL(data.vrHDL);
      setVAlgo(data.algoBalance);
    }

    setLoadingData(false);

    return data;
  }

  return (
    <div>
      {!banned ? (
        <div className="header-flash-liquid">
          <p className="header-flash-liquid-p">
            Vaults Protocol is live on Algorand Mainnet
          </p>
        </div>
      ) : (
        <div className="header-flash-liquidated">
          <p className="header-flash-liquid-p">Vault liquidated!</p>
        </div>
      )}
      <div className="home">
        <Navbar />
        <div>{loadingData ? <SmallSideLoader /> : null}</div>
        <main className="home-main">
          <section className="step-1">
            <div
              className="containerBanner"
              onClick={() => {
                fetched = false;
                navigate("/info");
              }}
            >
              <p className="label"></p>
              <img
                className="banner-img"
                src="./stakingbanner.svg"
                alt="click"
                id="arrow"
              />
            </div>

            <div className="locker">
              <div className="lock-left">
                <p id="title">Total Value Locked</p>
                <p className="val tvl-amount">{(tvlAmount + vrHDL).toLocaleString(undefined, { maximumFractionDigits: 2 })} HDL</p>
                <p className="amount tvl-amount">
                  {"$" + ((tvlAmount + vrHDL) * hValue).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
              <img
                src="/icons/wallet.svg"
                alt="wallet"
                className="wallet-img"
              />
            </div>
          </section>

          <section className="step-2 step-wallet">
            {address === "" ? (
              <>
                <p id="connect">No wallet connected</p>
                <p id="dets">Connect wallet to see your balance</p>
              </>
            ) : (
              <div className="non-empty row">
                <div className="left-2">
                  <div className="box-2">
                    <Tooltip
                      leaveTouchDelay={3000}
                      enterTouchDelay={50}
                      title="Total HDL staked"
                      placement="top"
                    >
                      <div>
                        <span className="prop">My Staking Balance</span>
                        <QuestionCircleOutlined
                          style={{ color: "#6966fb", paddingLeft: "5px" }}
                        />
                      </div>
                    </Tooltip>
                    {
                      <p className="val">
                        {!banned ? (
                          myVaultBalance
                        ) : (
                          <button
                            style={{ backgroundColor: "red", color: "yellow" }}
                          >
                            BANNED!!!
                          </button>
                        )}{" "}
                        HDL
                      </p>
                    }
                    {<p className="amount">{userInfo.stakedUSD}</p>}
                    {
                      <p className="amount">
                        {"$" + (myVaultBalance * hValue).toFixed(2)}
                      </p>
                    }
                  </div>

                  <div className="box-2">
                    <Tooltip
                      leaveTouchDelay={3000}
                      enterTouchDelay={50}
                      title="This shows the Algorand Balance of your Algorand account"
                      placement="top"
                    >
                      <div>
                        <span className="prop">My Algo Balance</span>
                        <QuestionCircleOutlined
                          style={{ color: "#6966fb", paddingLeft: "5px" }}
                        />
                      </div>
                    </Tooltip>

                    {<p className="val">{myAlgoBalance} ALGO</p>}
                    {
                      <p className="amount">
                        {"$" + (myAlgoBalance * aValue).toFixed(2)}
                      </p>
                    }
                  </div>

                  <div className="box-2">
                    <Tooltip
                      leaveTouchDelay={3000}
                      enterTouchDelay={50}
                      title="This shows the synthetic HDL Balance of your Algorand account"
                      placement="top"
                    >
                      <div>
                        <span className="prop">My sHDL Balance</span>
                        <QuestionCircleOutlined
                          style={{ color: "#6966fb", paddingLeft: "5px" }}
                        />
                      </div>
                    </Tooltip>

                    {<p className="val">{mysHDLBalance / 1000000} sHDL</p>}
                    {
                      <p className="amount">
                        {"$" + ((mysHDLBalance / 1000000) * aValue).toFixed(2)}
                      </p>
                    }
                  </div>
                </div>
                <div className="right-2 history-2">
                  <a
                    className="pointer active"
                    href={"https://algoexplorer.io/address/" + appAddress}
                  >
                    <p className="label">Contract URL</p>
                    <img src="/icons/arrow-right.svg" alt="click" id="arrow" />
                  </a>
                  <a
                    className="pointer"
                    href="https://t.me/headline_crypto"
                  >
                    <p className="label">IT Support</p>
                    <img src="/icons/arrow-right.svg" alt="click" id="arrow" />
                  </a>
                </div>
              </div>
            )}
          </section>
          <RedeemButton />
          {!signupOver ?
            <section className="step-2 a-1">
              <div>
                {(!keyScript) ? (
                  <div className="flex center-flex">
                    <h1>Check eligibility</h1>
                    <label className="dets">
                      (1 Platinum Astro & 2000 HDL Tokens req. for vault access){" "}
                    </label>
                  </div>
                ) : (eligible2) ? (
                  <div className="flex center-flex">
                    <div className="flex" style={{ position: "relative" }}>
                      <h1>Eligibility confirmed</h1>
                      <img
                        className="check confirmed-check"
                        src={Check}
                        alt="check"
                      />
                    </div>
                    <label className="dets">
                      Keycheck passed!
                    </label>
                  </div>
                ) : (
                  <div className="flex center-flex">
                    <h1>Eligibility not confirmed</h1>
                    <label className="dets">
                      Please add 1 Platinum Astro and 2000 HDL to your account to
                      qualify
                    </label>
                  </div>
                )}
              </div>

              {(eligible2) ? (
                <button
                  className="KeyCkeckStyle"
                  disabled={!connected}
                  onClick={async () => {
                    setEligible2(false);
                    let eligible = await keyCheck();
                    if (eligible) {
                      setkeyScript(true);
                      setEligible2(true);
                    } else {
                      setkeyScript(true);
                      setEligible2(false);
                    }
                  }}
                >
                  <img
                    style={{ marginRight: "8px", display: "flex" }}
                    src={key}
                  ></img>
                  <p>Key check</p>
                </button>
              ) : (
                <button
                  className="KeyCkeckStyle KeyCkeckStyle-success"
                  onClick={() => setModal2({ open: true, type: "" })}
                >
                  Register
                </button>
              )}

              <Modal
                className="optin-modal"
                modalOpen={modal2.open}
                modalClose={closeModal2}
                modalChild={
                  <div>
                    <div>
                      <p className="heading">Vault registration</p>
                      <p className="desc">Complete steps for Vaults opt-in</p>
                      <div className="modal-contrals-hq"></div>
                    </div>
                    <div className="container-row">
                      <div className="optin-row">
                        <button
                          className="button tertiary opt-in"
                          onClick={async () => {
                            if (Pipeline.pipeConnector === "WalletConnect") {
                              alert(
                                "Click ok FIRST, sign transaction on your phone, and THEN return to this screen"
                              );
                            }
                            let txid = await Pipeline.send(
                              Pipeline.address,
                              0,
                              "sHDL opt in",
                              undefined,
                              undefined,
                              asas.vHDL
                            );
                            alert(txid);
                          }}
                        >
                          <div className="btn-inside">
                            <p className="optin-btns">1 sHDL opt-in</p>
                          </div>
                        </button>
                        <button
                          className="button tertiary opt-in"
                          onClick={async () => {
                            let txid = await optIn(appId);
                            alert(txid);
                          }}
                        >
                          <div className="btn-inside">
                            <p className="optin-btns">2 Vault opt-in</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                }
              />
            </section> : null}
          <section className="step-2">
            <h1>Vault Analytics</h1>
            {
              <div>
                <div className="grid-1">
                  <div className="left-2 app-grid row row-cols-2">
                    <div className="box-2">
                      <Tooltip
                        title="App ID for active Vaults Protocol smart contract"
                        placement="top"
                        leaveTouchDelay={3000}
                        enterTouchDelay={50}
                      >
                        <div>
                          <span className="prop">App ID:</span>
                          <QuestionCircleOutlined
                            style={{ color: "#6966fb", paddingLeft: "5px" }}
                          />
                        </div>
                      </Tooltip>
                      <div className="val">
                        <CopyPasteTextApp
                          text={appId}
                          copyText={appId}
                          hideIcon={false}
                        />
                      </div>
                    </div>

                    <div className="box-2">
                      <Tooltip
                        title="Asset ID for HDL on the Algorand blockchain"
                        placement="top"
                        leaveTouchDelay={3000}
                        enterTouchDelay={50}
                      >
                        <div>
                          <span className="prop">Asset ID:</span>
                          <QuestionCircleOutlined
                            style={{ color: "#6966fb", paddingLeft: "5px" }}
                          />
                        </div>
                      </Tooltip>
                      <div className="val">
                        <CopyPasteTextApp
                          text={137594422}
                          copyText={137594422}
                          hideIcon={false}
                        />
                      </div>
                    </div>
                    <div className="box-2">
                      <Tooltip
                        title="The asset ID for synthetic HDL or (sHDL)"
                        placement="top"
                        leaveTouchDelay={3000}
                        enterTouchDelay={50}
                      >
                        <div>
                          <span className="prop">Synthetic Asset ID:</span>
                          <QuestionCircleOutlined
                            style={{ color: "#6966fb", paddingLeft: "5px" }}
                          />
                        </div>
                      </Tooltip>
                      <div className="val">
                        <CopyPasteTextApp
                          text={712922982}
                          copyText={712922982}
                          hideIcon={false}
                        />
                      </div>
                    </div>
                    <div className="box-2">
                      <Tooltip
                        leaveTouchDelay={3000}
                        enterTouchDelay={50}
                        title="This shows the total number of Algos deposited in the smart contract to run Vaults Protocol"
                        placement="top"
                      >
                        <div>
                          <span className="prop">Vault Algo Balance</span>
                          <QuestionCircleOutlined
                            style={{ color: "#6966fb", paddingLeft: "5px" }}
                          />
                        </div>
                      </Tooltip>

                      {<p className="val">{vAlgo} ALGOS</p>}
                    </div>
                  </div>
                  <Countdown></Countdown>
                  <div className="left-2">
                    <div className="box-2 vault-box">
                      <Tooltip
                        title="Algorand address for current Vaults Protocol smart contract"
                        placement="top"
                        leaveTouchDelay={3000}
                        enterTouchDelay={50}
                      >
                        <div>
                          <span className="prop">Vault Address</span>
                          <QuestionCircleOutlined
                            style={{ color: "#6966fb", paddingLeft: "5px" }}
                          />
                        </div>
                      </Tooltip>
                      <div className="vault-address">
                        <CopyPasteTextApp
                          text={appAddress}
                          copyText={appAddress}
                          hideIcon={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="non-empty">
                    <div className="left-2">
                      <div className="box-2">
                        <Tooltip
                          title="Total sHDL staked by HDL holders in Vaults Protocol"
                          placement="top"
                          leaveTouchDelay={3000}
                          enterTouchDelay={50}
                        >
                          <div>
                            <span className="prop">Vault sHDL Balance</span>
                            <QuestionCircleOutlined
                              style={{ color: "#6966fb", paddingLeft: "5px" }}
                            />
                          </div>
                        </Tooltip>
                        {<p className="val">{vvHDL} Synth HDL</p>}
                        {<p className="amount"></p>}
                      </div>
                      <div className="box-2">
                        <Tooltip
                          title="Total vested HDL in Vaults Protocol"
                          placement="top"
                          leaveTouchDelay={3000}
                          enterTouchDelay={50}
                        >
                          <div>
                            <span className="prop">Vault HDL Balance</span>
                            <QuestionCircleOutlined
                              style={{ color: "#6966fb", paddingLeft: "5px" }}
                            />
                          </div>
                        </Tooltip>
                        {<p className="val">{vrHDL} HDL</p>}
                        {<p className="amount"></p>}
                      </div>
                    </div>
                    <div className="right-2">
                      <div className="pointer active"></div>
                      <div
                        className="pointer"
                        onClick={() => {
                          fetched = false;
                          navigate("/info");
                        }}
                      >
                        <p className="label">Contract Info</p>
                        <img
                          src="/icons/arrow-right.svg"
                          alt="click"
                          id="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </section>
          <section className="step-3">
            {categories.map((entry, i) => (
              <PackagesCard
                key={entry.id}
                categoryId={entry.id}
                type={entry.name}
                apy={entry.apy}
                limit={entry.limit}
                totalStakedInCategory={(entry.id === 0)? vvHDL: entry.totalStakedInCategory}
                buttonText={address ? "Stake" : "No wallet connected"}
                id="orange-bg"
                action={() =>
                  setModal({ open: true, type: "stake", categoryId: i })
                }
                address={address}
              />
            ))}
          </section>
        </main>

        <Footer />

        <Modal
          modalOpen={modal.open}
          modalClose={closeModal}
          modalChild={
            modal.open &&
            modal.type === "stake" && (
              <Staking
                categoryId={modal.categoryId}
                categories={categories}
                userHdlBalance={mysHDLBalance}
                address={address}
                action={() =>
                  setModal({
                    open: false,
                    type: "stake",
                    categoryId: modal.categoryId,
                  })
                }
              />
            )
          }
          className={`${modal.type === "stake" && "stake-modal"}`}
        />
      </div>
    </div>
  );
};

export function click() {
  alert("Submitted!");
}
