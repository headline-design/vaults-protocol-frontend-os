import React, { Component } from "react";
import Pipeline from "@pipeline-ui-2/pipeline/index";
import { useToggle } from "react-use";

interface IProps {
}

interface IState {
  myAddress?: string;
  walletBalance?: number;
  toggle?: string;
  Mainnet?: true;
  Testnet?: true;
  checked?: boolean;
  labelNet?: string;
}

const wallet = Pipeline.init()
Pipeline.main = true
class PipeConnect extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      myAddress: "",
      walletBalance: 0,
      checked: true,
      labelNet: "MainNet",
    }
  }

  setNet = (event) => {
    if (event.target.value === "TestNet") {
      Pipeline.main = false;
    } else {
      Pipeline.main = true;
    }
  };

  switchWallet = (event) => {
    Pipeline.pipeConnector = event.target.id
    Pipeline.connect(wallet).then(data => {
      document.getElementById("wallet-connect-2").style.display = "none";
      document.getElementById("wallet-connected").style.display = "flex";
      this.setState({ myAddress: data })
      Pipeline.balance(data).then(data2 => {
        document.getElementById("modal-root-1").style.display = "none";
        document.getElementById("modal-root-2").style.display = "none";
        this.setState({ walletBalance: data2 })
        //this.refresh(data)
        setInterval(this.refresh, 5000)
      })
    })
  }

  switchNet = (event) => {
    Pipeline.main = event.target.checked
    this.setState({ checked: !this.state.checked })
    let message1 = "MainNet"
    let message2 = "Testnet"
    if
      (Pipeline.main) {
      this.setState({ labelNet: message1 })
    }
    else
      this.setState({ labelNet: message2 })
  }

  refresh = () => {
    Pipeline.balance(
      this.state.myAddress
    )
      .then(data3 => { this.setState({ walletBalance: data3 }) })
  }

  render() {
    return (
      <div>
            <button id="WalletConnect" className="crayons-btn w-100" onClick={this.switchWallet}>
                  WalletConnect
                </button>
                <button id="AlgoSigner" className="crayons-btn w-100" onClick={this.switchWallet}>
                  AlgoSigner
                </button>
                <button id="myAlgoWallet" className="crayons-btn w-100" onClick={this.switchWallet}>
                  MyAlgoWallet
                </button>

      </div>
    )
  }
}

export default PipeConnect