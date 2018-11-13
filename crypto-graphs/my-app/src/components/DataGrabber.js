import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
const axios = require("axios");

export default class DataGrabber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // bitcoin: null,
      // eth: null,
      // ltc: null
      refined: null,
      loading: true
    };
  }

  async componentDidMount() {
    const apiResponse = await axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "2"
      }
    }).then(function(response) {
      // console.log(response.data.data);
      return response.data.data.slice();
    });

    // this.crypto(apiResponse);
    this.allCrypto(apiResponse);
  }

  allCrypto = apiResponse => {
    // console.log(apiResponse);

    const refinedArray = apiResponse.map(item => {
      return {
        name: item.name,
        price: item.quote.USD.price,
        oneHr: item.quote.USD.percent_change_1h,
        twentyFourHr: item.quote.USD.percent_change_24h,
        sevenDays: item.quote.USD.percent_change_7d
      };
    });

    this.setState({ refined: refinedArray });

    // console.log(refinedArray);
  };

  // crypto = apiResponse => {
  //   this.setState({
  //     bitcoin: apiResponse.find(item => item.name === "Bitcoin"),
  //     eth: apiResponse.find(item => item.name === "Ethereum"),
  //     ltc: apiResponse.find(item => item.name === "Litecoin")
  //   });
  // };

  render() {
    return (
      <Dashboard
        refinedResponse={this.state.refined}
        // ltc={this.state.ltc}
        // eth={this.state.eth}
      />
    );
  }
}
