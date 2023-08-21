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

export const ThanksCard = ({type, backgroundImage, backgroundColor}: Props) => {

  return (
      <div className={`package-card package-card-info ${
          renderColor(type)
      }`} 
      
      style={{backgroundImage: `url(${backgroundImage})`, background: backgroundColor}}>
<div className="bx--grid Main-module--main--24PSV Main-module--padded--1EKjR">
<div className="Thanks-module--container--h0iql">
  <h2 className="Thanks-module--heading--23mpX">
    Thank you for submitting your Algo address!
  </h2>
  <p className="Thanks-module--paragraph--3RuBe">
  Your Algo address submission has been recieved. If you are elligible for Vaults V2 you will be receiving sHDL synthetic assets within 48 hours.
    The amount of sHDL you receive will be equal to your total account balance of HDL, Platinum Astros, Algo Astros, FORUM Astros, and all possible rewards.

  </p>
  <span className="Thanks-module--thanks--1PUum">Cheers!</span>
</div>

  </div>

  </div>
  )
}