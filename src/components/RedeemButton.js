import React, { useEffect, useState } from "react";
import { Pipeline, redeem } from "../vaultUtils";

const redeemTime = 1666720835;

const RedeemButton = () => {
  const [redeemable, setRedeemable] = useState(false);

  function checkRedeemable() {
    let now = (new Date() / 1000)
    if (now - redeemTime >= 0) {
      setRedeemable(true);
    }
  }
  useEffect(checkRedeemable, []);
  return (
    <section className="step-2 a-1">
      <div className="flex center-flex">
        <h1>Claim HDL</h1>
      </div>

      <div className="flex center-flex"></div>
      {redeemable ? (
        <button
          className="button w-50
                stake-btn 
               "
          onClick={async () => {
            let txid = await redeem();
            alert(txid);
          }}
        >
          <div className="btn-inside">
            <p>Redeem</p>
          </div>
        </button>
      ) : null}
      <div className="flex center-flex"></div>
    </section>
  );
};

export default RedeemButton;