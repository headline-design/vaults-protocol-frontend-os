import React, { Component } from 'react'

export default class WalletLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: undefined
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({ img: this.props.label })
        }

    }

    render() {
        return (
            <img
                width="20px"
                src={this.state.img}
            ></img>
        )
    }
}