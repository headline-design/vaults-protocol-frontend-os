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

export const PrivacyCard = ({type, backgroundImage, backgroundColor}: Props) => {

  return (
      <div className={`package-card package-card-info ${
          renderColor(type)
      }`} 
      
      style={{backgroundImage: `url(${backgroundImage})`, background: backgroundColor}}>
<div className="bx--grid Main-module--main--24PSV Main-module--padded--1EKjR">
  <section className="PageDescription-module--page-description--3vW3w">
    <div className="bx--row">
    <h1 className="bd-title" id="protocol-content">Privacy Policy</h1>
      <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
        At HEADLINE, we take user privacy and corporate transparency very
        seriously. Therefore, in keeping with our commitment to transparency, we
        provide useful privacy information to AlgoCloud’s online visitors.
      </p>
    </div>
  </section>
  <nav className="TableOfContents">
  <ul >
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#what-information-do-we-collect"
      >
        What information do we collect?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#how-do-we-use-your-information"
      >
        How do we use your information?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#will-your-information-be-shared-with-anyone"
      >
        Will your information be shared with anyone?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#do-we-use-cookies-and-other-tracking-technologies"
      >
        Do we use cookies and other tracking technologies?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#do-we-use-google-maps"
      >
        Do we use google maps?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#is-your-information-transferred-internationally"
      >
        Is your information transferred internationally?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#what-is-our-stance-on-third-party-websites"
      >
        What is our stance on third-party websites?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#how-long-do-we-keep-your-information"
      >
        How long do we keep your information?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#how-do-we-keep-your-information-safe"
      >
        How do we keep your information safe?
      </a>
    </li>
    <li>
      <a
        className="AnchorLinks-module--link--1_JzY"
        href="#do-we-collect-information-from-minors"
      >
        Do we collect information from minors?
      </a>
    </li>
  </ul>
  </nav>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Thank you for choosing to visit our website at{" "}
      <a
        href="https://algocloud.org"
        className="bx--link Link-module--link--PAAZ2"
      >
        https://algocloud.org
      </a>
      , doing business as HEADLINE and HEADLINE INC (“HEADLINE“, “we“, “us“,
      “our“). We are committed to protecting your personal information and your
      right to privacy. If you have any questions or concerns about this privacy
      notice, or our practices with regards to your personal information, please
      contact us at{" "}
      <a
        href="mailto:contact@headline-inc.com"
        className="bx--link Link-module--link--PAAZ2"
      >
        contact@headline-inc.com
      </a>
      .
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      When you visit our website{" "}
      <a
        href="https://algocloud.org"
        className="bx--link Link-module--link--PAAZ2"
      >
        https://algocloud.org
      </a>{" "}
      (the “Website“), and more generally, use any of our services (the
      “Services“, which include the Website), we appreciate that you are
      trusting us with your personal information. We take your privacy very
      seriously. In this privacy notice, we seek to explain to you in the
      clearest way possible what information we collect, how we use it, and what
      rights you have in relation to it. We hope you take some time to read
      through it carefully, as it is important. If there are any terms in this
      privacy notice that you do not agree with, please discontinue use of our
      Services immediately.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      This privacy notice applies to all information collected through our
      Services (which, as described above, includes our Website), as well as,
      any related services, sales, marketing, or events.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Please read this privacy notice carefully as it will help you understand
      what we do with the information that we collect.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="what-information-do-we-collect"
  >
    WHAT INFORMATION DO WE COLLECT?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#what-information-do-we-collect"
      aria-label="WHAT INFORMATION DO WE COLLECT? permalink"
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
      Information automatically collected In Short: Some information — such as
      your Internet Protocol (IP) address and/or browser and device
      characteristics — is collected automatically when you visit our Website.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We automatically collect certain information when you visit, use or
      navigate the Website. This information does not reveal your specific
      identity (like your name or contact information) but may include device
      and usage information, such as your IP address, browser and device
      characteristics, operating system, language preferences, referring URLs,
      device name, country, location, information about how and when you use our
      Website and other technical information. This information is primarily
      needed to maintain the security and operation of our Website, and for our
      internal analytics and reporting purposes.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Like many businesses, we also collect information through cookies and
      similar technologies.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The information we collect includes:
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Log and Usage Data. Log and usage data is service-related, diagnostic,
      usage and performance information our servers automatically collect when
      you access or use our Website and which we record in log files. Depending
      on how you interact with us, this log data may include your IP address,
      device information, browser type and settings and information about your
      activity in the Website (such as the date/time stamps associated with your
      usage, pages and files viewed, searches and other actions you take such as
      which features you use), device event information (such as system
      activity, error reports (sometimes called ‘crash dumps’) and hardware
      settings).
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Log and Usage Data. Log and usage data is service-related, diagnostic,
      usage and performance information our servers automatically collect when
      you access or use our Website and which we record in log files. Depending
      on how you interact with us, this log data may include your IP address,
      device information, browser type and settings and information about your
      activity in the Website (such as the date/time stamps associated with your
      usage, pages and files viewed, searches and other actions you take such as
      which features you use), device event information (such as system
      activity, error reports (sometimes called ‘crash dumps’) and hardware
      settings). Device Data. We collect device data such as information about
      your computer, phone, tablet or other device you use to access the
      Website. Depending on the device used, this device data may include
      information such as your IP address (or proxy server), device and
      application identification numbers, location, browser type, hardware model
      Internet service provider and/or mobile carrier, operating system and
      system configuration information. Location Data. We collect location data
      such as information about your device’s location, which can be either
      precise or imprecise. How much information we collect depends on the type
      and settings of the device you use to access the Website. For example, we
      may use GPS and other technologies to collect geolocation data that tells
      us your current location (based on your IP address). You can opt out of
      allowing us to collect this information either by refusing access to the
      information or by disabling your Location setting on your device. Note
      however, if you choose to opt out, you may not be able to use certain
      aspects of the Services.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="how-do-we-use-your-information"
  >
    HOW DO WE USE YOUR INFORMATION?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#how-do-we-use-your-information"
      aria-label="HOW DO WE USE YOUR INFORMATION? permalink"
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
      In Short: We process your information for purposes based on legitimate
      business interests, the fulfillment of our contract with you, compliance
      with our legal obligations, and/or your consent.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We use personal information collected via our Website for a variety of
      business purposes described below. We process your personal information
      for these purposes in reliance on our legitimate business interests, in
      order to enter into or perform a contract with you, with your consent,
      and/or for compliance with our legal obligations. We indicate the specific
      processing grounds we rely on next to each purpose listed below.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We use the information we collect or receive.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      To facilitate account creation and logon process. If you choose to link
      your account with us to a third-party account (such as your Google or
      Facebook account), we use the information you allowed us to collect from
      those third parties to facilitate account creation and logon process for
      the performance of the contract. To post testimonials. We post
      testimonials on our Website that may contain personal information. Prior
      to posting a testimonial, we will obtain your consent to use your name and
      the content of the testimonial. If you wish to update, or delete your
      testimonial, please contact us at{" "}
      <a
        href="mailto:contact@headline-inc.com"
        className="bx--link Link-module--link--PAAZ2"
      >
        contact@headline-inc.com
      </a>{" "}
      and be sure to include your name, testimonial location, and contact
      information. Request feedback. We may use your information to request
      feedback and to contact you about your use of our Website. To enable
      user-to-user communications. We may use your information in order to
      enable user-to-user communications with each user’s consent. To manage
      user accounts. We may use your information for the purposes of managing
      our account and keeping it in working order. To send administrative
      information to you. We may use your personal information to send you
      product, service and new feature information and/or information about
      changes to our terms, conditions, and policies. To protect our Services.
      We may use your information as part of our efforts to keep our Website
      safe and secure (for example, for fraud monitoring and prevention). To
      enforce our terms, conditions and policies for business purposes, to
      comply with legal and regulatory requirements or in connection with our
      contract. To respond to legal requests and prevent harm. If we receive a
      subpoena or other legal request, we may need to inspect the data we hold
      to determine how to respond. Fulfill and manage your orders. We may use
      your information to fulfill and manage your orders, payments, returns, and
      exchanges made through the Website Administer prize draws and
      competitions. We may use your information to administer prize draws and
      competitions when you elect to participate in our competitions. To deliver
      and facilitate delivery of services to the user. We may use your
      information to provide you with the requested service. To respond to user
      inquiries/offer support to users. We may use your information to respond
      to your inquiries and solve any potential issues you might have with the
      use of our Services. To send you marketing and promotional communications.
      We and/or our third-party marketing partners may use the personal
      information you send to us for our marketing purposes, if this is in
      accordance with your marketing preferences. For example, when expressing
      an interest in obtaining information about us or our Website, subscribing
      to marketing or otherwise contacting us, we will collect personal
      information from you. You can opt-out of our marketing emails at any time
      (see the “WHAT ARE YOUR PRIVACY RIGHTS” below). Deliver targeted
      advertising to you. We may use your information to develop and display
      personalized content and advertising (and work with third parties who do
      so) tailored to your interests and/or location and to measure its
      effectiveness.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="will-your-information-be-shared-with-anyone"
  >
    WILL YOUR INFORMATION BE SHARED WITH ANYONE?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#will-your-information-be-shared-with-anyone"
      aria-label="WILL YOUR INFORMATION BE SHARED WITH ANYONE? permalink"
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
      In Short: We only share information with your consent, to comply with
      laws, to provide you with services, to protect your rights, or to fulfill
      business obligations. We may process or share your data that we hold based
      on the following legal basis:
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Consent: We may process your data if you have given us specific consent to
      use your personal information for a specific purpose. Legitimate
      Interests: We may process your data when it is reasonably necessary to
      achieve our legitimate business interests. Performance of a Contract:
      Where we have entered into a contract with you, we may process your
      personal information to fulfill the terms of our contract. Legal
      Obligations: We may disclose your information where we are legally
      required to do so in order to comply with applicable law, governmental
      requests, a judicial proceeding, court order, or legal process, such as in
      response to a court order or a subpoena (including in response to public
      authorities to meet national security or law enforcement requirements).
      Vital Interests: We may disclose your information where we believe it is
      necessary to investigate, prevent, or take action regarding potential
      violations of our policies, suspected fraud, situations involving
      potential threats to the safety of any person and illegal activities, or
      as evidence in litigation in which we are involved. More specifically, we
      may need to process your data or share your personal information in the
      following situations:
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Business Transfers. We may share or transfer your information in
      connection with, or during negotiations of, any merger, sale of company
      assets, financing, or acquisition of all or a portion of our business to
      another company.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="do-we-use-cookies-and-other-tracking-technologies"
  >
    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#do-we-use-cookies-and-other-tracking-technologies"
      aria-label="DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? permalink"
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
      In Short: We may use cookies and other tracking technologies to collect
      and store your information.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We may use cookies and similar tracking technologies (like web beacons and
      pixels) to access or store information. Specific information about how we
      use such technologies and how you can refuse certain cookies is set out in
      our Cookie Notice.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="do-we-use-google-maps"
  >
    DO WE USE GOOGLE MAPS?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#do-we-use-google-maps"
      aria-label="DO WE USE GOOGLE MAPS? permalink"
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
      In Short: Yes, we use Google Maps for the purpose of providing better
      service. This Website uses Google Maps APIs which is subject to Google’s
      Terms of Service. You may find the Google Maps APIs Terms of Service here.
      To find out more about Google’s Privacy Policy, please refer to this link.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="is-your-information-transferred-internationally"
  >
    IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#is-your-information-transferred-internationally"
      aria-label="IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY? permalink"
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
      In Short: We may transfer, store, and process your information in
      countries other than your own.Our servers are located in. If you are
      accessing our Website from outside, please be aware that your information
      may be transferred to, stored, and processed by us in our facilities and
      by those third parties with whom we may share your personal information
      (see “WILL YOUR INFORMATION BE SHARED WITH ANYONE?” above), in and other
      countries.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      If you are a resident in the European Economic Area, then these countries
      may not necessarily have data protection laws or other similar laws as
      comprehensive as those in your country. We will however take all necessary
      measures to protect your personal information in accordance with this
      privacy notice and applicable law.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="what-is-our-stance-on-third-party-websites"
  >
    WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#what-is-our-stance-on-third-party-websites"
      aria-label="WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES? permalink"
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
      In Short: We are not responsible for the safety of any information that
      you share with third-party providers who advertise, but are not affiliated
      with, our Website.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      The Website may contain advertisements from third parties that are not
      affiliated with us and which may link to other websites, online services
      or mobile applications. We cannot guarantee the safety and privacy of data
      you provide to any third parties. Any data collected by third parties is
      not covered by this privacy notice. We are not responsible for the content
      or privacy and security practices and policies of any third parties,
      including other websites, services or applications that may be linked to
      or from the Website. You should review the policies of such third parties
      and contact them directly to respond to your questions.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="how-long-do-we-keep-your-information"
  >
    HOW LONG DO WE KEEP YOUR INFORMATION?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#how-long-do-we-keep-your-information"
      aria-label="HOW LONG DO WE KEEP YOUR INFORMATION? permalink"
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
      In Short: We keep your information for as long as necessary to fulfill the
      purposes outlined in this privacy notice unless otherwise required by
      law.We will only keep your personal information for as long as it is
      necessary for the purposes set out in this privacy notice, unless a longer
      retention period is required or permitted by law (such as tax, accounting
      or other legal requirements). No purpose in this notice will require us
      keeping your personal information for longer than the period of time in
      which users have an account with us.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      When we have no ongoing legitimate business need to process your personal
      information, we will either delete or anonymize such information, or, if
      this is not possible (for example, because your personal information has
      been stored in backup archives), then we will securely store your personal
      information and isolate it from any further processing until deletion is
      possible.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="how-do-we-keep-your-information-safe"
  >
    HOW DO WE KEEP YOUR INFORMATION SAFE?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#how-do-we-keep-your-information-safe"
      aria-label="HOW DO WE KEEP YOUR INFORMATION SAFE? permalink"
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
      In Short: We aim to protect your personal information through a system of
      organizational and technical security measures.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We have implemented appropriate technical and organizational security
      measures designed to protect the security of any personal information we
      process. However, despite our safeguards and efforts to secure your
      information, no electronic transmission over the Internet or information
      storage technology can be guaranteed to be 100% secure, so we cannot
      promise or guarantee that hackers, cybercriminals, or other unauthorized
      third parties will not be able to defeat our security, and improperly
      collect, access, steal, or modify your information. Although we will do
      our best to protect your personal information, transmission of personal
      information to and from our Website is at your own risk. You should only
      access the Website within a secure environment.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="do-we-collect-information-from-minors"
  >
    DO WE COLLECT INFORMATION FROM MINORS?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#do-we-collect-information-from-minors"
      aria-label="DO WE COLLECT INFORMATION FROM MINORS? permalink"
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
      In Short: We do not knowingly collect data from or market to children
      under 18 years of age.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We do not knowingly solicit data from or market to children under 18 years
      of age. By using the Website, you represent that you are at least 18 or
      that you are the parent or guardian of such a minor and consent to such
      minor dependent’s use of the Website. If we learn that personal
      information from users less than 18 years of age has been collected, we
      will deactivate the account and take reasonable measures to promptly
      delete such data from our records. If you become aware of any data we may
      have collected from children under age 18, please contact us at{" "}
      <a
        href="mailto:contact@headline-inc.com"
        className="bx--link Link-module--link--PAAZ2"
      >
        contact@headline-inc.com
      </a>
      .
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="what-are-your-privacy-rights"
  >
    WHAT ARE YOUR PRIVACY RIGHTS?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#what-are-your-privacy-rights"
      aria-label="WHAT ARE YOUR PRIVACY RIGHTS? permalink"
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
      In Short: You may review, change, or terminate your account at any time.
      If you are a resident in the European Economic Area and you believe we are
      unlawfully processing your personal information, you also have the right
      to complain to your local data protection supervisory authority. You can
      find their contact details here:{" "}
      <a
        href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
        className="bx--link Link-module--link--PAAZ2"
      >
        http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
      </a>
      .
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      If you are a resident in Switzerland, the contact details for the data
      protection authorities are available here:{" "}
      <a
        href="https://www.edoeb.admin.ch/edoeb/en/home.html"
        className="bx--link Link-module--link--PAAZ2"
      >
        https://www.edoeb.admin.ch/edoeb/en/home.html
      </a>
      . If you have questions or comments about your privacy rights, you may
      email us at{" "}
      <a
        href="mailto:contact@headline-inc.com"
        className="bx--link Link-module--link--PAAZ2"
      >
        contact@headline-inc.com
      </a>
      .
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Account Information If you would at any time like to review or change the
      information in your account or terminate your account, you can:
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Log in to your account settings and update your user account. Upon your
      request to terminate your account, we will deactivate or delete your
      account and information from our active databases. However, we may retain
      some information in our files to prevent fraud, troubleshoot problems,
      assist with any investigations, enforce our Terms of Use and/or comply
      with applicable legal requirements.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Cookies and similar technologies:
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Most Web browsers are set to accept cookies by default. If you prefer, you
      can usually choose to set your browser to remove cookies and to reject
      cookies. If you choose to remove cookies or reject cookies, this could
      affect certain features or services of our Website. To opt-out of
      interest-based advertising by advertisers on our Website visit{" "}
      <a
        href="http://www.aboutads.info/choices/"
        className="bx--link Link-module--link--PAAZ2"
      >
        http://www.aboutads.info/choices/
      </a>
      .
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Opting out of email marketing: You can unsubscribe from our marketing
      email list at any time by clicking on the unsubscribe link in the emails
      that we send or by contacting us using the details provided below. You
      will then be removed from the marketing email list — however, we may still
      communicate with you, for example to send you service-related emails that
      are necessary for the administration and use of your account, to respond
      to service requests, or for other non-marketing purposes. To otherwise
      opt-out, you may:
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      Access your account settings and update your preferences. Contact us using
      the contact information provided.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="controls-for-do-not-track-features"
  >
    CONTROLS FOR DO-NOT-TRACK FEATURES
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#controls-for-do-not-track-features"
      aria-label="CONTROLS FOR DO-NOT-TRACK FEATURES permalink"
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
      Most web browsers and some mobile operating systems and mobile
      applications include a Do-Not-Track (“DNT”) feature or setting you can
      activate to signal your privacy preference not to have data about your
      online browsing activities monitored and collected. At this stage no
      uniform technology standard for recognizing and implementing DNT signals
      has been finalized. As such, we do not currently respond to DNT browser
      signals or any other mechanism that automatically communicates your choice
      not to be tracked online. If a standard for online tracking is adopted
      that we must follow in the future, we will inform you about that practice
      in a revised version of this privacy notice.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="do-california-residents-have-specific-privacy-rights"
  >
    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#do-california-residents-have-specific-privacy-rights"
      aria-label="DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? permalink"
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
      In Short: Yes, if you are a resident of California, you are granted
      specific rights regarding access to your personal information.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      California Civil Code Section 1798.83, also known as the “Shine The Light”
      law, permits our users who are California residents to request and obtain
      from us, once a year and free of charge, information about categories of
      personal information (if any) we disclosed to third parties for direct
      marketing purposes and the names and addresses of all third parties with
      which we shared personal information in the immediately preceding calendar
      year. If you are a California resident and would like to make such a
      request, please submit your request in writing to us using the contact
      information provided below.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      If you are under 18 years of age, reside in California, and have a
      registered account with the Website, you have the right to request removal
      of unwanted data that you publicly post on the Website. To request removal
      of such data, please contact us using the contact information provided
      below, and include the email address associated with your account and a
      statement that you reside in California. We will make sure the data is not
      publicly displayed on the Website, but please be aware that the data may
      not be completely or comprehensively removed from all our systems (e.g.
      backups, etc.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="do-we-make-updates-to-this-notice"
  >
    DO WE MAKE UPDATES TO THIS NOTICE?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#do-we-make-updates-to-this-notice"
      aria-label="DO WE MAKE UPDATES TO THIS NOTICE? permalink"
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
      In Short: Yes, we will update this notice as necessary to stay compliant
      with relevant laws.
    </p>
  </div>
  <div className="bx--row">
    <p className="Markdown-module--paragraph--1xZR9 Markdown-module--paragraph--responsive--103Tj">
      We may update this privacy notice from time to time. The updated version
      will be indicated by an updated “Revised” date and the updated version
      will be effective as soon as it is accessible. If we make material changes
      to this privacy notice, we may notify you either by prominently posting a
      notice of such changes or by directly sending you a notification. We
      encourage you to review this privacy notice frequently to be informed of
      how we are protecting your information.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="how-can-you-contact-us-about-this-notice"
  >
    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#how-can-you-contact-us-about-this-notice"
      aria-label="HOW CAN YOU CONTACT US ABOUT THIS NOTICE? permalink"
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
      If you have questions or comments about this notice, you may email us at{" "}
      <a
        href="mailto:contact@headline-inc.com"
        className="bx--link Link-module--link--PAAZ2"
      >
        contact@headline-inc.com
      </a>
      .
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="how-can-you-review-update-or-delete-the-data-we-collect-from-you"
  >
    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you"
      aria-label="HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? permalink"
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
      Based on the applicable laws of your country, you may have the right to
      request access to the personal information we collect from you, change
      that information, or delete it in some circumstances. To request to
      review, update, or delete your personal information, please submit a
      request form by clicking here. We will respond to your request within 30
      days.
    </p>
  </div>
  <h2
    className="AutolinkHeader-module--header--1G1tm Markdown-module--h2--3_kQn"
    id="additional-questions"
  >
    Additional questions
    <a
      className="AutolinkHeader-module--anchor--36UpA AutolinkHeader-module--left-anchor--1SDoO"
      href="#additional-questions"
      aria-label="Additional questions permalink"
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
      If your question hasn’t been answered after visiting the HEADLINE INC
      site, check out our{" "}
      <a
        href="/terms-and-conditions"
        className="bx--link Link-module--link--PAAZ2"
      >
        Terms and Conditions
      </a>{" "}
      page. If you still have a question, please email the HEADLINE INC support
      team directly through the HEADLINE INC email channel.
      <a
        href="mailto:contact@headline-inc.com"
        className="bx--link Link-module--link--PAAZ2"
      >
        #HEADLINE
      </a>
      .
    </p>
  </div>
</div>


  </div>
  )
}