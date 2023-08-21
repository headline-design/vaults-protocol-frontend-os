import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from '@material-ui/core';
import { Button } from 'components'
import { url } from 'inspector'
import React from 'react'
import { useNavigate } from "react-router-dom"
import LaunchpadForm from "./LaunchpadForm"

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

export const LaunchpadCard = ({type, backgroundImage, backgroundColor}: Props) => {
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
        Vaults Launchpad
      </h1>
    </div>
    <p className="bd-lead">
      HEADLINE is expanding Vaults Protocol to support other Algorand Ecosystem projects.
    </p>
  </div>
  <div className="border-body">
  <div className="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
    <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
    <nav id="TableOfContents">
      <ul>
        <li>
          <a href="#launchpad-overview">Launchpad Overview</a>
          <ul>
            <li>
              <a href="#program-rules">Program Rules</a>
            </li>
            <li>
              <a href="#application">Application</a>
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
    Vaults Protocol allows the Algorand community and other Algorand Ecosystem projects to benefit from the same comprehensive
    vesting mechanism built by HEADLINE Inc. 
    
    Vaults Launchpad is modeled after HEADLINE's synthetic asset vesting solution sHDL, but customized for each project's token's unique properties. 
    </p>
    <h2 id="launchpad-overview">
      Launchpad overview
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#launchpad-overview"
        style={{ paddingLeft: "0.375em" }}
      />
    </h2>
    <p>
    Vaults Launchpad allows new blockchain projects to leverage some of Algorand's best vesting technology. By working with a proven model,
    new Algorand projects can focus on what's most important - building! In addition to the tech, HEADLINE offers all-included advisory services 
    for creating a community-first tokenomics plan. 
    </p>
    <h3 id="structural-synthetic">
      Target demo
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#structural-synthetic"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
    This program should be of particular interest to projects that want to avoid many of the common missteps made by early-stage blockchain startups.
    HEADLINE completely deconstructed token vesting and the spectrum of tokenomics models. Vaults Protocol and Vaults Launchpad is the culmination of that work,
    with priority placed on security, trust, and accessibility.
    </p>
    
    <h2 id="program-rules">
      Program rules
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#program-rules"
        style={{ paddingLeft: "0.375em" }}
      />
    </h2>
    <p>
      Vaults Launchpad has a number of very strict and very unflexible rules. 
      These rules are in place to protect the community and give Launchpad participants total peace of mind.
    </p>
    <h3 id="security-features-1">
      Token sales
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-1"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      Launchpad startups are not permitted to sell project tokens. 
      This is a core program rule and any deviation from it will result in immediate disqualification from Vaults Launchpad.
      All tokens in distribution must have been given away for free or distributed as rewards incentives.
      The one exception to this rule is in the case of currency exchange. If for example, tokens in circulation 
      are used as currency to buy a good or service from the Launchpad project, that project is permitted to exchange those tokens for stable or fiat.
      This is the only exception to the token selling rule and requires that said token was initially distributed for free.
    </p>
    <h3 id="security-features-2">
      Allocation minimums 
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-2"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      Vaults Launchpad projects must commit at least 20% of the total token supply to Vaults distribution.
      Launchpad is intended to be a core vesting element for projects, and anything less than 20% is not acceptable. 
      Vaults Launchpad projects must commit to at least 180-day vault lockup for said vesting.
    </p>
    <h3 id="security-features-2">
      Key requirement
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-2"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      Vaults Launchpad projects must distribute a utility NFT "Vault Key" to vaulters. 
      This "Vault Key" can either be distributed for free or sold as a standard utility NFT. 
      HEADLINE can assist with creating an interesting key.
    </p>
    <h3 id="security-features-2">
      Prior distribution
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-2"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      Vaults Launchpad projects must distribute at least 20% of total token supply prior to vault lockup period. 
      It's essential that there be adequate token circulation for vaulters to commit.
    </p>
    <h3 id="security-features-2">
      Fees
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#security-features-2"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
     HEADLINE has a simple fee structure for Vaults Launchpad. 
     <p>1. 20% of total Launchpad token allocation (If project allocates 5 million tokens for Launchpad - HEADLINE's fee is 1 million tokens).</p>
     <p>2. 15% of "Vault Key" NFT sales. (If project decides to sell (vs give away) utility NFT key - HEADLINE receives 15% of total NFT sales).</p>
    </p>
    <h3 id="color-contrast">
      Other rules
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#color-contrast"
        style={{ paddingLeft: "0.375em" }}
      />
    </h3>
    <p>
      The above list of rules is not comprehensive. Other program rules will be discussed with prospective launchpad projects prior to approval.
    </p>
    <h2 id="additional-resources">
      Launchpad application
      <a
        className="anchorjs-link "
        aria-label="Anchor"
        data-anchorjs-icon="#"
        href="#additional-resources"
        style={{ paddingLeft: "0.375em" }}
      />
    </h2>
    <p>
      Please complete the form below to be considered for the next Vaults Launchpad program. 
    </p>
    <LaunchpadForm></LaunchpadForm>
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