import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from '@material-ui/core';
import { Button } from 'components'
import { url } from 'inspector'
import React from 'react'
import { useNavigate } from "react-router-dom"

interface Props {
    type?: string;
    apy?: number;
    limit:any;
    buttonText?: string;
    action?: () => void;
    backgroundImage?: string;
    backgroundColor?: string;
    id?: string;
    disabled?: boolean;
    address?:any;
    totalStakedInCategory?:any;
    categoryId?:any;
}

const renderColor = (type:any) => {
    switch(type) {
      case 'Seria A':
       return 'orange-bg';
      case 'Seria B':
       return 'blue-bg';
      case 'Seria X':
       return 'black-bg';
      default:
        return 'orange-bg';
    }
  }

export const PackagesCard = ({totalStakedInCategory,categoryId,limit,type, apy, buttonText, action, backgroundImage, backgroundColor, id, address, disabled }: Props) => {
  const navigate = useNavigate();

    const showInfoInWIKI = (categoryId: any) => {
      if(categoryId == 0)
      {
        window.open('https://algocloud.org', "_blank");
        return;
        
      }

      if(categoryId == 1){
        window.open('https://algocloud.org', "_blank");     
        return;
      }

      if(categoryId ==2){
        window.open('https://algocloud.org', "_blank");  
        return;
      }
    }
   
    return (
        <div className={`package-card ${
            renderColor(type)
        }`} 
        
        style={{backgroundImage: `url(${backgroundImage})`, background: backgroundColor}}>
               <Tooltip
                       leaveTouchDelay={3000} 
                       enterTouchDelay={50}
                title='Learn more'
                placement="top"
                >  
                <div style={{cursor:"pointer"}}    onClick={() => {navigate("/info")}}>
                <span className="card-type">{type}</span><QuestionCircleOutlined style={{ color: '#6966fb',paddingLeft:'5px' }} />
                </div>
                </Tooltip>
                <p className="card-apy">
                {apy}%
                <span id="apy">APR</span>
            </p>
            <p className="card-type-desc">Limit:</p>  
            <p className="card-type">{limit} HDL</p>
            <p className="card-type-desc">Currently Staked:</p>  
            <p className="card-type">{totalStakedInCategory} HDL</p>
                  
            <Button
                type="button"
                disabled={disabled}
                text={buttonText}
                tertiary
                className="card-btn"
                onClick={address ? () => action && action() : undefined  }                
            />
        </div>
    )
}

export const PackagesCard2 = ({type, backgroundImage, backgroundColor}: Props) => {
  const navigate = useNavigate()

  return (
      <div className={`package-card package-card-info ${
          renderColor(type)
      }`} 
      
      style={{backgroundImage: `url(${backgroundImage})`, background: backgroundColor}}>
<div className="info-body" id="info">
  <div className="bd-intro ps-lg-4">
    <div className="d-md-flex flex-md-row-reverse align-items-center justify-content-between">
      <h1 className="bd-title" id="protocol-content">
        Vaults Protocol
      </h1>
    </div>
    <p className="bd-lead">
      Synthetic staking of fungible and non-fungible assets on the Algorand
      blockchain
    </p>
  </div>
  <div className="border-body">
  <div className="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
    <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
    <nav id="TableOfContents">
      <ul>
        <li>
          <a href="#protocol-overview">Protocol Overview</a>
          <ul>
            <li>
              <a href="#structural-synthetic">Structural synthetic</a>
            </li>
            <li>
              <a href="#rewards-component">Rewards component</a>
            </li>
            <li>
              <a href="#rollup-breakdown">Rollup breakdown</a>
            </li>
            <li>
              <a href="#program-overview">Program overview</a>
            </li>
            <li>
              <a href="#security-features">Security features</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#additional-resources">Additional resources</a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="bd-content ps-lg-4">
    <p>
    Vaults Protocol, which rolls up fungible and non-fungible assets in a single
    staking smart contract, is made possible by a synthetic Algorand Standard Asset callled sHDL. 
    </p>
    <h2 id="protocol-overview">
      Protocol overview
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#protocol-overview"
        style={{ paddingLeft: "0.375em" }}
      />
    </h2>
    <p>
    sHDL is a synthetic asset, backed 1 for 1 by actual HDL. 
    sHDL is a representation of the total possible
    rewards in a staking program, which accounts for both fungible and
    non-fungible assets.
    </p>
    <h3 id="structural-synthetic">
      Structural synthetic
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#structural-synthetic"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      sHDL is distributed to program participants after passing minimum
      verification parameters. In the case of the inaugural Vaults launch, the
      minimum parameters for sHDL distribution are 2000 HDL tokens and 1
      Platinum Astro (the Infinity Key).
    </p>
    <h3 id="rewards-component">
      Rewards component
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#rewards-component"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p> </p>
    <p>
      For the inaugural Vaults program, the rewards breakdown is as follows:
      100% reward for all HDL committed to the vault for 180 days. 5% reward for
      all Platinum Astros committed to the vault for 180 days. 3% reward for all
      Algo Astros committed to the vault for 180 days. 0.25% reward for all FORUM
      Astros committed to the vault for 180 days. The maximum possible reward for this staking period is 300% APR.
    </p>
    <h3 id="rollup-breakdown">
      Rollup breakdown
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#color-contrast"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      Collectively, this represents a staking program that can accommodate an
      infinite number of Algorand ASAs aggregated in a single contract. For the
      inaugural program, nearly 250 different ASAs are represented in one
      contract.{" "}
    </p>
    <h3 id="program-overview">
      Program overview
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#program-overview"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      After receiving the sHDL, program participants have 24 hours to commit
      their synthetic HDL tokens to the vault contract, while keeping their
      actual assets safe in their wallets. The sHDL in the vault after 24 hours
      is then locked as the full and unchangeable program period rewards. HDL,
      precisely equal to the committed sHDL, is then loaded into the contract by
      the vesting organization. At this point, the clock has started, and in 180
      days, all sHDL will be redeemable for HDL during the withdrawal process.
    </p>
    <div className="highlight" />
    <h2 id="security-features">
      Security features
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features"
        style={{ paddingLeft: "0.375em" }}
      />
    </h2>
    <p>
      A number of essential security measures are baked into the protocol to
      provide the maximum security possible for a staking contract.
    </p>
    <h3 id="security-features-1">
      "Double-dipping"{" "}
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-1"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      1. A major issue with staking contracts and synthetic asset distribution
      is “double-dipping” or staking assets, removing them, and staking from a
      separate account. Vaults Protocol solves this problem by detaching the
      opt-in and disbursement actions. If a potential exploiter attempts to
      opt-in with multiple addresses and moved assets, during the synthetic
      asset distribution period all addresses will fail if they do not meet the
      minimum staking threshold (2000 HDL and 1 Platinum Astro for the inaugural
      rewards program).
    </p>
    <h3 id="security-features-2">
      Under-collateralization
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-2"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      2. Another problem with synthetic staking is program manipulation by
      selling the actual assets once the staking period begins. Vaults Protocol
      solves this problem by running constant checks against the addresses
      committed to staking sHDL. If, at any point, during the staking period,
      the cumulative ballance of stakable assets drops by 10% or more of the
      committed staking amount, a liquidation event is triggered. When a
      liquidation event is triggered, the entire sHDL amount committed by the
      associated wallet is rendered permanently unretrievable.{" "}
    </p>
    <h3 id="color-contrast">
      Multi-asset equations
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#color-contrast"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      3. Stacking and rolling assets in a staking contract is another security
      issue - multiple fungible and non-fungible assets can be notoriously
      difficult to measure. With Vaults Protocol, the key to solving this issue
      is by using one synthetic asset to represent the cumulative rewards of all
      associated assets that are considered active in the program. The synthetic
      assets distributed at the beginning of the program period represent all
      possible rewards available in the program. Many other security features
      are built into the Vaults Protocol. To learn more, contact the HEADLINE
      team. The mainnet contract for Vaults Protocol is also available via this
      link.
    </p>
    <h2 id="additional-resources">
      Additional resources
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#additional-resources"
        style={{ paddingLeft: "0.375em" }}
      />
    </h2>
    <ul className="footer-add-links">
      <li>
        <a href="https://pipeline-ui.com">
          PIPELINE-UI Docs
        </a>
      </li>
      <li>
        <a href="https://developer.algorand.org">Algorand Dev Portal</a>
      </li>
      <li>
        <a href="https://github.com/headline-design">
          HEADLINE Design Github
        </a>
      </li>
      <li>
        <a href="https://twitter.com/headline_crypto">HEADLINE Crypto Twitter</a>
      </li>
      <li>
        <a href="https://algoexplorer.io/asset/137594422">
          HDL Token on AlgoExplorer
        </a>
      </li>
<li>
      <a  style={{cursor: "pointer", display: "flex", textDecoration: "underline"}} onClick={() => {navigate("/terms")}}>
                                          Terms of Use
                                        </a>
                                        </li>
                                        <li>
      <a  style={{cursor: "pointer", display: "flex", textDecoration: "underline"}} onClick={() => {navigate("/privacy")}}>
                                          Privacy Policy
                                        </a>
                                        </li>
      <li>
        <a href="https://headline.dev">HEADLINE Links</a>
      </li>
      <li>
        <a href="https://www.algocloud.org">
         AlgoCloud Homepage
        </a>
      </li>
    </ul>
  </div>

  </div>
  </div>

  </div>
  )
}