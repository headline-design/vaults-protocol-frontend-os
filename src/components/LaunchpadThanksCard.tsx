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

export const LaunchpadThanksCard = ({type, backgroundImage, backgroundColor}: Props) => {

  return (
      <div className={`package-card package-card-info ${
          renderColor(type)
      }`} 
      
      style={{backgroundImage: `url(${backgroundImage})`, background: backgroundColor}}>
<div className="bx--grid Main-module--main--24PSV Main-module--padded--1EKjR">
<div className="Thanks-module--container--h0iql">
  <h2 className="Thanks-module--heading--23mpX">
    Thank you for applying for Vaults Launchpad!
  </h2>
  <p className="Thanks-module--paragraph--3RuBe">
  Your Vaults Launchpad application has been received. A member of our team will contact you to discuss next steps.
  There is no set timeframe between Vaults Launchpad application submission and final status notification. Project vetting is a multi-step process. We are working quickly to review applications in the order they are received.

  </p>
  <span className="Thanks-module--thanks--1PUum">Cheers!</span>
</div>

  </div>

  </div>
  )
}