import React, { useEffect,useState } from 'react'
import {Button, Input, Filter} from "components"
import moment from 'moment';
import Check from '../assets/icons/check.svg';
import Uncheck from '../assets/icons/unchecked.svg';
import { useDispatch } from 'react-redux';
import PerformStaking from 'methods/contracts/actions/performStaking';
import Tooltip from "@material-ui/core/Tooltip";
import { QuestionCircleOutlined,WarningOutlined } from '@ant-design/icons';
import { notification } from "antd";
import {Pipeline,commit,asas,appId,appAddress,keyCheck} from '../vaultUtils'

let hdlBalanceOfUser



function jsonDeformat(input:any) {
  let replacements = ["{", "}", '"']
  replacements.forEach(symbol => {
    input = input.replaceAll(symbol, "")
  })
  input = input.replaceAll(","," ")
  return input
}

interface Props {
    categories?: any;
    categoryId?: number;
    userHdlBalance?:any;
    address?:any;
    action?: () => void;
amount?:any;
}

export const Staking = ({categories,categoryId,userHdlBalance,address,action}: Props) => {
    const [check, setCheck] = useState(false)
    const [valueSelection, setValueSelection] = useState(false)
    const [amount, setAmount] = useState(0);
    const [myStuff, setMyStuff] = useState("");
    const dispatch = useDispatch();
    const [myHDL, setMyHDL] = useState(0);
    const [mypAstros, setMypAstros] = useState(0);
    const [myaAstros, setMyaAstros] = useState(0);
    const [myfAstros, setMyfAstros] = useState(0);
    const [myReward, setMyReward] = useState(0);
    const [txid, setTxid] = useState("");
    const [show,setShow] = useState(false)


    const [accumlatedIntrest, setAccumlatedIntrest] = useState('0.00');
    const selectedCategory = categories.filter(c =>
        c.id == categoryId
     )

    hdlBalanceOfUser = userHdlBalance;


    const currentDate = moment().format('YYYY-MM-DD HH:mm');

    const minmumWithdrawalDate = moment(currentDate).add(selectedCategory[0].withdrawTime, 'seconds').format('YYYY-MM-DD HH:mm');
    const endDate = moment(currentDate).add(selectedCategory[0].period, 'days').format('YYYY-MM-DD HH:mm');

    const penaltyReward = ((selectedCategory[0].tokenPenaltyPercent * 365)/(selectedCategory[0].period * 100000))*100;

    const handleFixingWithdrawalPrecisionIssue = (amountToWithdraw: any) => {
        try {
            return String(amountToWithdraw.toString().match(/^-?\d+(?:)?/)[0]);
        } catch (error) {
            return String('0');
        }

    }

    const divideTotalByWalletBalance = (percentage: number) => () => {
      try {
        const newAmount = (percentage / 100) * (userHdlBalance || 0);
        if (newAmount) {

          let inputValue = (newAmount / 1000000).toString()
          let element = document.getElementById("amountInput")
          element.setAttribute("value", inputValue);
          setAmount(newAmount / 1000000);
        } else {
          setAmount(0);
        }
      } catch (error) {
        setAmount(0);
      }
    };


   const onChangeStakeAmount= (e) => {
       try {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           setAmount(e.target.value)
        }
       } catch (error) {
        setAmount(0)
       }

 }

    const performStaking = () => {
        let amountAdded: number = +amount;
        let periodStaking = Number(selectedCategory[0].period)

        if(check){
            notification['error']({
                message: 'Invalid',
                description: "You must agree to terms and conditions to proceed",
                placement:"bottomRight",
                duration:5,

              });

              return;
        }

        if(hdlBalanceOfUser < amountAdded && hdlBalanceOfUser !== ""){
            notification['error']({
                message: 'Invalid',
                description: "Your HDL balance is insufficient",
                placement:"bottomRight",
                duration:5,

              });

              return;
        }

        if (amountAdded > 0  && amount !== "" ) {
            notification['success']({
                message: 'Staking Funds',
                description: "The amount of " +amount+" HDL will be staked",
                placement:"bottomRight",
                duration:5,

              });
            dispatch(PerformStaking({ amount: amount,period:periodStaking, client: address }))
            action();

        }else{

            notification['error']({
                    message: 'Invalid',
                    description: "Amount Must Be Greater than 0",
                    placement:"bottomRight",
                    duration:5,

                  });

            return;
        }
    }


    useEffect(() => {

        if(Pipeline.address !== ""){
          keyCheck(true).then(
            data => {
              setMyHDL(data.HDL)
              setMyfAstros(data.fAstro)
              setMypAstros(data.pAstro)
              setMyaAstros(data.aAstro)
              setMyReward(data.reward)
            })
          }

        let amountAdded: number = +amount;
        if (amountAdded > 0  && amount !== "") {

            const percentageValue = (amountAdded/100)* selectedCategory[0].apy;


            const finalValue = (percentageValue/365) * selectedCategory[0].period;
            setAccumlatedIntrest(finalValue.toFixed(2));
        }else{
            setAccumlatedIntrest('0.00');
        }


    }, [amount])

    return (
      <div className="staking">
        <div className="stake-left">
          <div className="left-main">
            <p className="stake-title">{selectedCategory[0].name}</p>
            <Input
                id="amountInput"
              name="amount"
              value={amount}
              type="number"
              label={
                <div className="input-label">
                  <p id="label-left">Stake Amount</p>
                  <p id="label-right">
                    Available amount:
                    <span id="suffix-span">
                      {userHdlBalance / 1000000 + " sHDL"}
                    </span>
                  </p>
                </div>
              }
              placeholder="Enter Stake Amount"
              className="stake-input"
              onChange={(e: any) => onChangeStakeAmount(e)}
            />
            <div
              className="percentages"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              {[25, 50, 75, 100].map((e) => {
                return (
                  <div
                    key={e}
                    className="activeValueSelection"
                    id={"percentageSelectId_" + e}
                    style={{ cursor: "pointer" }}
                    onClick={divideTotalByWalletBalance(e)}
                  >
                    {e}%
                  </div>
                );
              })}

            </div>
            {show? <>
            <p>My Account Balances & reward with %100 commitment:</p>
            <label>HDL:</label><p>{myHDL}</p>
            <label>pAstros:</label><p>{mypAstros}</p>
            <label>fAstros:</label><p>{myfAstros}</p>
            <label>aAstros:</label><p>{myaAstros}</p>
            <label>Reward:</label><p>{myReward}</p>
            <br></br>
            <br></br>

           <h4>If you commit 100%, you must maintain your personal above asset balances with a 10% variance accepted. If your calculated reward drops lower, your rewards will be liquidated. </h4>
            <br></br>
           <h4>Equation: reward = HDL + (pAstro * 0.05 * HDL) + (fAstro * 0.0025 * HDL) + (aAstro * 0.03 * HDL)</h4></>
           :null}
          </div>
        </div>
        <div className="stake-right">
          <p className="stake-title">Summary</p>
          <div className="box">
            <img src="/icons/rings.svg" alt="rings" className="rings" />
            <div className="items-main">
              <div className="row">
                <p className="item">Start Date</p>
                <p className="val">11-1-2022</p>
              </div>
              <div className="row">
                <p className="item">End Date</p>
                <p className="val">12-05-2022</p>
              </div>
              <div className="row">
                <p className="item">Period</p>
                <p className="val">{selectedCategory[0].period} Days</p>
              </div>
              <div className="row">
                <p className="item">
                  <Tooltip
                  leaveTouchDelay={3000}
                  enterTouchDelay={50}
                    title="The minimum withdrawal period before you can withdraw your staked tokens. NOTE: withdrawing before end date will lead to liquidation of reward"
                    placement="top"
                  >
                    <div>
                      <span>Min. Withdrawal Date</span>
                      <QuestionCircleOutlined
                        style={{ color: "#6966fb", paddingLeft: "5px", cursor: "pointer" }}
                      />
                    </div>
                  </Tooltip>
                </p>
                <p className="val">12-05-2022</p>
              </div>
              <div className="row">
                <p className="item">Withdrawal Penalty</p>
                <p className="val">-100% sHDL</p>
              </div>
            </div>
          </div>
          <div className="row-box">
            <p id="item">Best Deal (HDL APR)</p>
            <p id="val">~300% APR</p>
          </div>
          <div className="row-box">
            <p id="item">Est. All Time Rewards</p>
            <p id="val">{amount} HDL</p>
          </div>
          <div className="check">
            {!check ? (
              <img
                src={Uncheck}
                alt="check"
                className="check-img"
                onClick={() => setCheck(!check)}
              />
            ) : (
              <img
                src={Check}
                alt="check"
                className="check-img"
                onClick={() => setCheck(!check)}
              />
            )}
            <p id="agree">
              I have read and I agree to the above stated statement
            </p>
          </div>
          <Button
            text="Stake"
            disabled={!check}
            type="button"
            className="stake-btn"
            onClick={async () => {
              let sAmount = amount ;

              let newTxid = await commit(asas.vHDL, sAmount, appId);
              alert("TXID: " + newTxid)
              setTxid(newTxid);
            }}
          />
          <h4>TXID: {txid}</h4>
          <a href={"https://algoexplorer.io/tx/" + txid}>{"https://algoexplorer.io/tx/" + txid}</a>
        </div>
      </div>
    );
}
