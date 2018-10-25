import React, { Component } from 'react';

const btcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
const ethUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btcCurrentPrice: '',
      ethCurrentPrice: ''
    };
  }

  componentDidMount() {
    const getBtcPrice = () => {
    fetch(btcUrl)
      .then(response => response.json())
      .then(response => this.setState({btcCurrentPrice : response.USD}));
    }

    const getEthPrice = () => {
      fetch(ethUrl)
        .then(response => response.json())
        .then(response => this.setState({ethCurrentPrice : response.USD}))
    }

    setInterval(getBtcPrice, 3000);
    setInterval(getEthPrice, 3000);
  }


  render() {
    const { btcCurrentPrice } = this.state;
    const { ethCurrentPrice } = this.state;

    return <h1>The price of bitcoin is ${this.state.btcCurrentPrice} and the price of ethereum is ${this.state.ethCurrentPrice}</h1>
  }
}

export default App;

