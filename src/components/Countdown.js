import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const creation = 1667322710 * 1000

const redeemStart = 3024000 * 1000

const regEnd = 86400 * 1000

Number.prototype.toFixedNoRounding = function(n) {
  const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
  const a = this.toString().match(reg)[0];
  const dot = a.indexOf(".");
  if (dot === -1) { // integer, insert decimal dot and pad up zeros
      return a + "." + "0".repeat(n);
  }
  const b = n - (a.length - dot) + 1;
  return b > 0 ? (a + "0".repeat(b)) : a;
}

function formatTime(stamp) {
  stamp = stamp / 1000
  let hours = parseInt((stamp / 3600).toFixedNoRounding(0))
  let remainder1 = (stamp / 3600) - hours
  let minutes = parseInt((remainder1 * 60).toFixedNoRounding(0))
  let remainder2 = (remainder1 * 60) - minutes
  let seconds = parseInt((remainder2 * 60).toFixedNoRounding(0))
return ("h: " + hours + " m: " + minutes + " s: " + seconds)
}

const Countdown = () => {

  const [time1, setTime1] = useState("")
  const [time2, setTime2] = useState("")

  function updateTime() {
    let now = new Date()
    let regEnding = (creation + regEnd) - now
    let redeemBegin = (creation + redeemStart) - now
    setTime1(formatTime(regEnding))
    setTime2(formatTime(redeemBegin))
  }

  useEffect(() => {
    setInterval(updateTime, 1000)

  }
  )

  const navigate = useNavigate();

  return (
    
        <div >
        <div className="left-2 left-countdown">
            <div className="box-2 box-countdown">
                <span className="prop">Registration ends in: </span><p className="copyable__text">{time1}</p>
             </div>
     
            <div className="box-2 countdown">
                <span className="prop">Redeem starts in: </span><p className="copyable__text">{time2}</p>
            </div>
        </div>
            
       </div>
  )

}

export default Countdown