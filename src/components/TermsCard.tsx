import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from '@material-ui/core';
import { Button } from 'components'
import { url } from 'inspector'
import React from 'react'

interface Props {
    type?: string;
    apy?: number;
    limit:any;
    buttonText?: string;
    action?: () => void;
    backgroundImage?: string;
    backgroundColor?: string;
    id?: string;
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

export const TermsCard = ({type, backgroundImage, backgroundColor}: Props) => {

  return (
      <div className={`package-card package-card-info ${
          renderColor(type)
      }`} 
      
      style={{backgroundImage: `url(${backgroundImage})`, background: backgroundColor}}>
<div className="bx--grid Main-module--main--24PSV Main-module--padded--1EKjR">
  <section className="PageDescription-module--page-description--3vW3w">
    <div className="bx--row">
    <h1 className="bd-title" id="protocol-content">Terms of Use</h1>
      <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
        HEADLINE INC’s terms of use for end-user access to the AlgoCloud
        website.
      </p>
    </div>
  </section>
  <ul className="AnchorLinks-module--list--2RS5j">
    <li>
      <a className="AnchorLinks-module--link--1_JzY" href="#agreement-to-terms">
        Agreement to terms
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#intellectual-property-rights"
      >
        Intellectual property rights
      </a>
    </li>
    <li>
      <a className="AnchorLinks-module--link--1_JzY" href="#submissions">
        Submissions
      </a>
    </li>
    <li>
      <a className="AnchorLinks-module--link--1_JzY" href="#site-management">
        Site management
      </a>
    </li>
    <li>
      <a className="AnchorLinks-module--link--1_JzY" href="#disclaimer">
        Disclaimer
      </a>
    </li>
  </ul>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="agreement-to-terms"
  >
    AGREEMENT TO TERMS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#agreement-to-terms"
      aria-label="AGREEMENT TO TERMS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h2>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      These Terms of Use constitute a legally binding agreement made between
      you, whether personally or on behalf of an entity (“you”) and HEADLINE
      INC, doing business as HEADLINE (“HEADLINE“, “we”, “us”, or “our”),
      concerning your access to and use of the{" "}
      <a
        href="https://algocloud.org"
        className="bx--link Link-module--link--PAAZ2"
      >
        https://algocloud.org
      </a>{" "}
      website as well as any other media form, media channel, mobile website or
      mobile application related, linked, or otherwise connected thereto
      (collectively, the “Site”). You agree that by accessing the Site, you have
      read, understood, and agreed to be bound by all of these Terms of Use.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY
      PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Supplemental terms and conditions or documents that may be posted on the
      Site from time to time are hereby expressly incorporated herein by
      reference. We reserve the right, in our sole discretion, to make changes
      or modifications to these Terms of Use at any time and for any reason. We
      will alert you about any changes by updating the “Last updated” date of
      these Terms of Use, and you waive any right to receive specific notice of
      each such change. It is your responsibility to periodically review these
      Terms of Use to stay informed of updates. You will be subject to, and will
      be deemed to have been made aware of and to have accepted, the changes in
      any revised Terms of Use by your continued use of the Site after the date
      such revised Terms of Use are posted.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The information provided on the Site is not intended for distribution to
      or use by any person or entity in any jurisdiction or country where such
      distribution or use would be contrary to law or regulation or which would
      subject us to any registration requirement within such jurisdiction or
      country. Accordingly, those persons who choose to access the Site from
      other locations do so on their own initiative and are solely responsible
      for compliance with local laws, if and to the extent local laws are
      applicable.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The Site is not tailored to comply with industry-specific regulations
      (Health Insurance Portability and Accountability Act (HIPAA), Federal
      Information Security Management Act (FISMA), etc.), so if your
      interactions would be subjected to such laws, you may not use this Site.
      You may not use the Site in a way that would violate the
      Gramm-Leach-Bliley Act (GLBA).
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The Site is intended for users who are at least 18 years old. Persons
      under the age of 18 are not permitted to use or register for the Site.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="intellectual-property-rights"
  >
    INTELLECTUAL PROPERTY RIGHTS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#intellectual-property-rights"
      aria-label="INTELLECTUAL PROPERTY RIGHTS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h2>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Unless otherwise indicated, the Site is our proprietary property and all
      source code, databases, functionality, software, website designs, audio,
      video, text, photographs, and graphics on the Site (collectively, the
      “Content”) and the trademarks, service marks, and logos contained therein
      (the “Marks”) are owned or controlled by us or licensed to us, and are
      protected by copyright and trademark laws and various other intellectual
      property rights and unfair competition laws of the United States,
      international copyright laws, and international conventions. The Content
      and the Marks are provided on the Site “AS IS” for your information and
      personal use only. Except as expressly provided in these Terms of Use, no
      part of the Site and no Content or Marks may be copied, reproduced,
      aggregated, republished, uploaded, posted, publicly displayed, encoded,
      translated, transmitted, distributed, sold, licensed, or otherwise
      exploited for any commercial purpose whatsoever, without our express prior
      written permission.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Provided that you are eligible to use the Site, you are granted a limited
      license to access and use the Site and to download or print a copy of any
      portion of the Content to which you have properly gained access solely for
      your personal, non-commercial use. We reserve all rights not expressly
      granted to you in and to the Site, the Content and the Marks.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="user-representations"
  >
    USER REPRESENTATIONS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#user-representations"
      aria-label="USER REPRESENTATIONS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      By using the Site, you represent and warrant that: (1) all registration
      information you submit will be true, accurate, current, and complete; (2)
      you will maintain the accuracy of such information and promptly update
      such registration information as necessary; (3) you have the legal
      capacity and you agree to comply with these Terms of Use; (4) you are not
      a minor in the jurisdiction in which you reside; (5) you will not access
      the Site through automated or non-human means, whether through a bot,
      script, or otherwise; (6) you will not use the Site for any illegal or
      unauthorized purpose; and (7) your use of the Site will not violate any
      applicable law or regulation. If you provide any information that is
      untrue, inaccurate, not current, or incomplete, we have the right to
      suspend or terminate your account and refuse any and all current or future
      use of the Site (or any portion thereof).
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="user-registration"
  >
    USER REGISTRATION
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#user-registration"
      aria-label="USER REGISTRATION permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      You may be required to register with the Site. You agree to keep your
      password confidential and will be responsible for all use of your account
      and password. We reserve the right to remove, reclaim, or change a
      username you select if we determine, in our sole discretion, that such
      username is inappropriate, obscene, or otherwise objectionable.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="prohibited-activities"
  >
    PROHIBITED ACTIVITIES
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#prohibited-activities"
      aria-label="PROHIBITED ACTIVITIES permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      You may not access or use the Site for any purpose other than that for
      which we make the Site available. The Site may not be used in connection
      with any commercial endeavors except those that are specifically endorsed
      or approved by us.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      As a user of the Site, you agree not to:
    </p>
  </div>
  <ol className="bx--list--ordered--native Markdown-module--list--oZv7L">
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Systematically retrieve data or other content from the Site to create
          or compile, directly or indirectly, a collection, compilation,
          database, or directory without written permission from us.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Trick, defraud, or mislead us and other users, especially in any
          attempt to learn sensitive account information such as user passwords.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Circumvent, disable, or otherwise interfere with security-related
          features of the Site, including features that prevent or restrict the
          use or copying of any Content or enforce limitations on the use of the
          Site and/or the Content contained therein.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
          Site.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Use any information obtained from the Site in order to harass, abuse,
          or harm another person.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Make improper use of our support services or submit false reports of
          abuse or misconduct.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Use the Site in a manner inconsistent with any applicable laws or
          regulations.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Upload or transmit (or attempt to upload or to transmit) viruses,
          Trojan horses, or other material, including excessive use of capital
          letters and spamming (continuous posting of repetitive text), that
          interferes with any party’s uninterrupted use and enjoyment of the
          Site or modifies, impairs, disrupts, alters, or interferes with the
          use, features, functions, operation, or maintenance of the Site.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Engage in any automated use of the system, such as using scripts to
          send comments or messages, or using any data mining, robots, or
          similar data gathering and extraction tools.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Delete the copyright or other proprietary rights notice from any
          Content.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Attempt to impersonate another user or person or use the username of
          another user.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Sell or otherwise transfer your profile.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Upload or transmit (or attempt to upload or to transmit) any material
          that acts as a passive or active information collection or
          transmission mechanism, including without limitation, clear graphics
          interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other
          similar devices (sometimes referred to as “spyware” or “passive
          collection mechanisms” or “pcms”).
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Interfere with, disrupt, or create an undue burden on the Site or the
          networks or services connected to the Site.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Harass, annoy, intimidate, or threaten any of our employees or agents
          engaged in providing any portion of the Site to you.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Attempt to bypass any measures of the Site designed to prevent or
          restrict access to the Site, or any portion of the Site.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Copy or adapt the Site’s software, including but not limited to Flash,
          PHP, HTML, JavaScript, or other code.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Decipher, decompile, disassemble, or reverse engineer any of the
          software comprising or in any way making up a part of the Site.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Except as may be the result of standard search engine or Internet
          browser usage, use, launch, develop, or distribute any automated
          system, including without limitation, any spider, robot, cheat
          utility, scraper, or offline reader that accesses the Site, or using
          or launching any unauthorized script or other software.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Use a buying agent or purchasing agent to make purchases on the Site.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Make any unauthorized use of the Site, including collecting usernames
          and/or email addresses of users by electronic or other means for the
          purpose of sending unsolicited email, or creating user accounts by
          automated means or under false pretenses.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Use the Site as part of any effort to compete with us or otherwise use
          the Site and/or the Content for any revenue-generating endeavor or
          commercial enterprise.
        </p>
      </div>
    </li>
  </ol>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="user-generated-contributions"
  >
    USER GENERATED CONTRIBUTIONS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#user-generated-contributions"
      aria-label="USER GENERATED CONTRIBUTIONS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The Site does not offer users to submit or post content. We may provide
      you with the opportunity to create, submit, post, display, transmit,
      perform, publish, distribute, or broadcast content and materials to us or
      on the Site, including but not limited to text, writings, video, audio,
      photographs, graphics, comments, suggestions, or personal information or
      other material (collectively, “Contributions”). Contributions may be
      viewable by other users of the Site and through third-party websites. As
      such, any Contributions you transmit may be treated in accordance with the
      Site Privacy Policy. When you create or make available any Contributions,
      you thereby represent and warrant that:
    </p>
  </div>
  <ol className="bx--list--ordered--native Markdown-module--list--oZv7L">
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          The creation, distribution, transmission, public display, or
          performance, and the accessing, downloading, or copying of your
          Contributions do not and will not infringe the proprietary rights,
          including but not limited to the copyright, patent, trademark, trade
          secret, or moral rights of any third party.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          You are the creator and owner of or have the necessary licenses,
          rights, consents, releases, and permissions to use and to authorize
          us, the Site, and other users of the Site to use your Contributions in
          any manner contemplated by the Site and these Terms of Use.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          You have the written consent, release, and/or permission of each and
          every identifiable individual person in your Contributions to use the
          name or likeness of each and every such identifiable individual person
          to enable inclusion and use of your Contributions in any manner
          contemplated by the Site and these Terms of Use.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions are not false, inaccurate, or misleading.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions are not unsolicited or unauthorized advertising,
          promotional materials, pyramid schemes, chain letters, spam, mass
          mailings, or other forms of solicitation.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions are not obscene, lewd, lascivious, filthy, violent,
          harassing, libelous, slanderous, or otherwise objectionable (as
          determined by us).
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not ridicule, mock, disparage, intimidate, or
          abuse anyone.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions are not used to harass or threaten (in the legal
          sense of those terms) any other person and to promote violence against
          a specific person or class of people.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not violate any applicable law, regulation, or
          rule.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not violate the privacy or publicity rights of
          any third party.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not contain any material that solicits personal
          information from anyone under the age of 18 or exploits people under
          the age of 18 in a sexual or violent manner.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not violate any applicable law concerning child
          pornography, or otherwise intended to protect the health or well-being
          of minors.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not include any offensive comments that are
          connected to race, national origin, gender, sexual preference, or
          physical handicap.
        </p>
      </div>
    </li>
    <li className="bx--list__item Markdown-module--list-item--32ShB">
      <div className="bx--row">
        <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
          Your Contributions do not otherwise violate, or link to material that
          violates, any provision of these Terms of Use, or any applicable law
          or regulation.
        </p>
      </div>
    </li>
  </ol>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Any use of the Site in violation of the foregoing violates these Terms of
      Use and may result in, among other things, termination or suspension of
      your rights to use the Site.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="contribution-license"
  >
    CONTRIBUTION LICENSE
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#contribution-license"
      aria-label="CONTRIBUTION LICENSE permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      You and the Site agree that we may access, store, process, and use any
      information and personal data that you provide following the terms of the
      Privacy Policy and your choices (including settings).
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      By submitting suggestions or other feedback regarding the Site, you agree
      that we can use and share such feedback for any purpose without
      compensation to you.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We do not assert any ownership over your Contributions. You retain full
      ownership of all of your Contributions and any intellectual property
      rights or other proprietary rights associated with your Contributions. We
      are not liable for any statements or representations in your Contributions
      provided by you in any area on the Site. You are solely responsible for
      your Contributions to the Site and you expressly agree to exonerate us
      from any and all responsibility and to refrain from any legal action
      against us regarding your Contributions.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="social-media"
  >
    SOCIAL MEDIA
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#social-media"
      aria-label="SOCIAL MEDIA permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      As part of the functionality of the Site, you may link your account with
      online accounts you have with third-party service providers (each such
      account, a “Third-Party Account”) by either: (1) providing your
      Third-Party Account login information through the Site; or (2) allowing us
      to access your Third-Party Account, as is permitted under the applicable
      terms and conditions that govern your use of each Third-Party Account. You
      represent and warrant that you are entitled to disclose your Third-Party
      Account login information to us and/or grant us access to your Third-Party
      Account, without breach by you of any of the terms and conditions that
      govern your use of the applicable Third-Party Account, and without
      obligating us to pay any fees or making us subject to any usage
      limitations imposed by the third-party service provider of the Third-Party
      Account. By granting us access to any Third-Party Accounts, you understand
      that (1) we may access, make available, and store (if applicable) any
      content that you have provided to and stored in your Third-Party Account
      (the “Social Network Content”) so that it is available on and through the
      Site via your account, including without limitation any friend lists and
      (2) we may submit to and receive from your Third-Party Account additional
      information to the extent you are notified when you link your account with
      the Third-Party Account. Depending on the Third-Party Accounts you choose
      and subject to the privacy settings that you have set in such Third-Party
      Accounts, personally identifiable information that you post to your
      Third-Party Accounts may be available on and through your account on the
      Site.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Please note that if a Third-Party Account or associated service becomes
      unavailable or our access to such Third Party Account is terminated by the
      third-party service provider, then Social Network Content may no longer be
      available on and through the Site. You will have the ability to disable
      the connection between your account on the Site and your Third-Party
      Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE
      THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS
      GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE
      PROVIDERS.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We make no effort to review any Social Network Content for any purpose,
      including but not limited to, for accuracy, legality, or non-infringement,
      and we are not responsible for any Social Network Content. You acknowledge
      and agree that we may access your email address book associated with a
      Third-Party Account and your contacts list stored on your mobile device or
      tablet computer solely for purposes of identifying and informing you of
      those contacts who have also registered to use the Site. You can
      deactivate the connection between the Site and your Third-Party Account by
      contacting us using the contact information below or through your account
      settings (if applicable). We will attempt to delete any information stored
      on our servers that was obtained through such Third-Party Account, except
      the username and profile picture that become associated with your account.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="submissions"
  >
    SUBMISSIONS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#submissions"
      aria-label="SUBMISSIONS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h2>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      You acknowledge and agree that any questions, comments, suggestions,
      ideas, feedback, or other information regarding the Site (“Submissions”)
      provided by you to us are non-confidential and shall become our sole
      property. We shall own exclusive rights, including all intellectual
      property rights, and shall be entitled to the unrestricted use and
      dissemination of these Submissions for any lawful purpose, commercial or
      otherwise, without acknowledgment or compensation to you. You hereby waive
      all moral rights to any such Submissions, and you hereby warrant that any
      such Submissions are original with you or that you have the right to
      submit such Submissions. You agree there shall be no recourse against us
      for any alleged or actual infringement or misappropriation of any
      proprietary right in your Submissions.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="third-party-website-and-content"
  >
    THIRD-PARTY WEBSITE AND CONTENT
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#third-party-website-and-content"
      aria-label="THIRD-PARTY WEBSITE AND CONTENT permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The Site may contain (or you may be sent via the Site) links to other
      websites (“Third-Party Websites”) as well as articles, photographs, text,
      graphics, pictures, designs, music, sound, video, information,
      applications, software, and other content or items belonging to or
      originating from third parties (“Third-Party Content”). Such Third-Party
      Websites and Third-Party Content are not investigated, monitored, or
      checked for accuracy, appropriateness, or completeness by us, and we are
      not responsible for any Third-Party Websites accessed through the Site or
      any Third-Party Content posted on, available through, or installed from
      the Site, including the content, accuracy, offensiveness, opinions,
      reliability, privacy practices, or other policies of or contained in the
      Third-Party Websites or the Third-Party Content. Inclusion of, linking to,
      or permitting the use or installation of any Third-Party Websites or any
      Third-Party Content does not imply approval or endorsement thereof by us.
      If you decide to leave the Site and access the Third-Party Websites or to
      use or install any Third-Party Content, you do so at your own risk, and
      you should be aware these Terms of Use no longer govern. You should review
      the applicable terms and policies, including privacy and data gathering
      practices, of any website to which you navigate from the Site or relating
      to any applications you use or install from the Site.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Any purchases you make through Third-Party Websites will be through other
      websites and from other companies, and we take no responsibility
      whatsoever in relation to such purchases which are exclusively between you
      and the applicable third party. You agree and acknowledge that we do not
      endorse the products or services offered on Third-Party Websites and you
      shall hold us harmless from any harm caused by your purchase of such
      products or services. Additionally, you shall hold us harmless from any
      losses sustained by you or harm caused to you relating to or resulting in
      any way from any Third-Party Content or any contact with Third-Party
      Websites.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="advertisers"
  >
    ADVERTISERS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#advertisers"
      aria-label="ADVERTISERS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We allow advertisers to display their advertisements and other information
      in certain areas of the Site, such as sidebar advertisements or banner
      advertisements. If you are an advertiser, you shall take full
      responsibility for any advertisements you place on the Site and any
      services provided on the Site or products sold through those
      advertisements. Further, as an advertiser, you warrant and represent that
      you possess all rights and authority to place advertisements on the Site,
      including, but not limited to, intellectual property rights, publicity
      rights, and contractual rights. We simply provide the space to place such
      advertisements, and we have no other relationship with advertisers.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="site-management"
  >
    SITE MANAGEMENT
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#site-management"
      aria-label="SITE MANAGEMENT permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h2>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We reserve the right, but not the obligation, to: (1) monitor the Site for
      violations of these Terms of Use; (2) take appropriate legal action
      against anyone who, in our sole discretion, violates the law or these
      Terms of Use, including without limitation, reporting such user to law
      enforcement authorities; (3) in our sole discretion and without
      limitation, refuse, restrict access to, limit the availability of, or
      disable (to the extent technologically feasible) any of your Contributions
      or any portion thereof; (4) in our sole discretion and without limitation,
      notice, or liability, to remove from the Site or otherwise disable all
      files and content that are excessive in size or are in any way burdensome
      to our systems; and (5) otherwise manage the Site in a manner designed to
      protect our rights and property and to facilitate the proper functioning
      of the Site.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="term-and-termination"
  >
    TERM AND TERMINATION
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#term-and-termination"
      aria-label="TERM AND TERMINATION permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      These Terms of Use shall remain in full force and effect while you use the
      Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE
      RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
      LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN
      IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
      WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
      CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE
      MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT
      AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
      WARNING, IN OUR SOLE DISCRETION.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      If we terminate or suspend your account for any reason, you are prohibited
      from registering and creating a new account under your name, a fake or
      borrowed name, or the name of any third party, even if you may be acting
      on behalf of the third party. In addition to terminating or suspending
      your account, we reserve the right to take appropriate legal action,
      including without limitation pursuing civil, criminal, and injunctive
      redress.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="modifications-and-interruptions"
  >
    MODIFICATIONS AND INTERRUPTIONS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#modifications-and-interruptions"
      aria-label="MODIFICATIONS AND INTERRUPTIONS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We reserve the right to change, modify, or remove the contents of the Site
      at any time or for any reason at our sole discretion without notice.
      However, we have no obligation to update any information on our Site. We
      also reserve the right to modify or discontinue all or part of the Site
      without notice at any time. We will not be liable to you or any third
      party for any modification, price change, suspension, or discontinuance of
      the Site.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We cannot guarantee the Site will be available at all times. We may
      experience hardware, software, or other problems or need to perform
      maintenance related to the Site, resulting in interruptions, delays, or
      errors. We reserve the right to change, revise, update, suspend,
      discontinue, or otherwise modify the Site at any time or for any reason
      without notice to you. You agree that we have no liability whatsoever for
      any loss, damage, or inconvenience caused by your inability to access or
      use the Site during any downtime or discontinuance of the Site. Nothing in
      these Terms of Use will be construed to obligate us to maintain and
      support the Site or to supply any corrections, updates, or releases in
      connection therewith.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="governing-law"
  >
    GOVERNING LAW
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#governing-law"
      aria-label="GOVERNING LAW permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      These Terms of Use and your use of the Site are governed by and construed
      in accordance with the laws of the State of Texas applicable to agreements
      made and to be entirely performed within the State of Texas, without
      regard to its conflict of law principles
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="dispute-resolution"
  >
    DISPUTE RESOLUTION
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#dispute-resolution"
      aria-label="DISPUTE RESOLUTION permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Any legal action of whatever nature brought by either you or us
      (collectively, the “Parties” and individually, a “Party”) shall be
      commenced or prosecuted in the state and federal courts located in Bexar,
      Texas, and the Parties hereby consent to, and waive all defenses of lack
      of personal jurisdiction and forum non conveniens with respect to venue
      and jurisdiction in such state and federal courts. Application of the
      United Nations Convention on Contracts for the International Sale of Goods
      and the Uniform Computer Information Transaction Act (UCITA) are excluded
      from these Terms of Use.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="corrections"
  >
    CORRECTIONS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#corrections"
      aria-label="CORRECTIONS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      There may be information on the Site that contains typographical errors,
      inaccuracies, or omissions, including descriptions, pricing, availability,
      and various other information. We reserve the right to correct any errors,
      inaccuracies, or omissions and to change or update the information on the
      Site at any time, without prior notice.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="disclaimer"
    tabIndex={-1}
    style={{ outline: "none" }}
  >
    DISCLAIMER
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#disclaimer"
      aria-label="DISCLAIMER permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h2>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
      YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE
      FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
      IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING,
      WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
      A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
      REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT
      OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
      LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES
      OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
      NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3)
      ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL
      PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
      INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY
      BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
      THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN
      ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
      AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
      MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
      ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY
      A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
      MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
      WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
      TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
      SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM
      OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
      CAUTION WHERE APPROPRIATE.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="limitations-of-liability"
  >
    LIMITATIONS OF LIABILITY
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#limitations-of-liability"
      aria-label="LIMITATIONS OF LIABILITY permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO
      YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
      INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST
      REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE,
      EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="indemnification"
  >
    INDEMNIFICATION
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#indemnification"
      aria-label="INDEMNIFICATION permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      You agree to defend, indemnify, and hold us harmless, including our
      subsidiaries, affiliates, and all of our respective officers, agents,
      partners, and employees, from and against any loss, damage, liability,
      claim, or demand, including reasonable attorneys’ fees and expenses, made
      by any third party due to or arising out of: (1) use of the Site; (2)
      breach of these Terms of Use; (3) any breach of your representations and
      warranties set forth in these Terms of Use; (4) your violation of the
      rights of a third party, including but not limited to intellectual
      property rights; or (5) any overt harmful act toward any other user of the
      Site with whom you connected via the Site. Notwithstanding the foregoing,
      we reserve the right, at your expense, to assume the exclusive defense and
      control of any matter for which you are required to indemnify us, and you
      agree to cooperate, at your expense, with our defense of such claims. We
      will use reasonable efforts to notify you of any such claim, action, or
      proceeding which is subject to this indemnification upon becoming aware of
      it.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="user-data"
  >
    USER DATA
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#user-data"
      aria-label="USER DATA permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We will maintain certain data that you transmit to the Site for the
      purpose of managing the performance of the Site, as well as data relating
      to your use of the Site. Although we perform regular routine backups of
      data, you are solely responsible for all data that you transmit or that
      relates to any activity you have undertaken using the Site. You agree that
      we shall have no liability to you for any loss or corruption of any such
      data, and you hereby waive any right of action against us arising from any
      such loss or corruption of such data.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="electronic-communications-transactions-and-signatures"
  >
    ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#electronic-communications-transactions-and-signatures"
      aria-label="ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Visiting the Site, sending us emails, and completing online forms
      constitute electronic communications. You consent to receive electronic
      communications, and you agree that all agreements, notices, disclosures,
      and other communications we provide to you electronically, via email and
      on the Site, satisfy any legal requirement that such communication be in
      writing.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS,
      AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
      RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      You hereby waive any rights or requirements under any statutes,
      regulations, rules, ordinances, or other laws in any jurisdiction which
      require an original signature or delivery or retention of non-electronic
      records, or to payments or the granting of credits by any means other than
      electronic means.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="california-users-and-residents"
  >
    CALIFORNIA USERS AND RESIDENTS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#california-users-and-residents"
      aria-label="CALIFORNIA USERS AND RESIDENTS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      If any complaint with us is not satisfactorily resolved, you can contact
      the Complaint Assistance Unit of the Division of Consumer Services of the
      California Department of Consumer Affairs in writing at 1625 North Market
      Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800)
      952-5210 or (916) 445-1254.
    </p>
  </div>
  <h3
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h3--Gwbvh"
    id="miscellaneous"
  >
    MISCELLANEOUS
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#miscellaneous"
      aria-label="MISCELLANEOUS permalink"
    >
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={20}
        height={20}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z" />
        <path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z" />
      </svg>
    </a>
  </h3>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      These Terms of Use and any policies or operating rules posted by us on the
      Site or in respect to the Site constitute the entire agreement and
      understanding between you and us. Our failure to exercise or enforce any
      right or provision of these Terms of Use shall not operate as a waiver of
      such right or provision. These Terms of Use operate to the fullest extent
      permissible by law. We may assign any or all of our rights and obligations
      to others at any time. We shall not be responsible or liable for any loss,
      damage, delay, or failure to act caused by any cause beyond our reasonable
      control. If any provision or part of a provision of these Terms of Use is
      determined to be unlawful, void, or unenforceable, that provision or part
      of the provision is deemed severable from these Terms of Use and does not
      affect the validity and enforceability of any remaining provisions. There
      is no joint venture, partnership, employment or agency relationship
      created between you and us as a result of these Terms of Use or use of the
      Site. You agree that these Terms of Use will not be construed against us
      by virtue of having drafted them. You hereby waive any and all defenses
      you may have based on the electronic form of these Terms of Use and the
      lack of signing by the parties hereto to execute these Terms of Use.
    </p>
  </div>
</div>

  </div>
  )
}