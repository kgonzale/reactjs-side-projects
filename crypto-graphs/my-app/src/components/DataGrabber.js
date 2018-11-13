import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
const axios = require("axios");

export default class DataGrabber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoin: null,
      eth: null,
      ltc: null
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
        "X-CMC_PRO_API_KEY": ""
      }
    }).then(function(response) {
      // console.log(response.data.data);
      return response.data.data.slice();
    });

    this.crypto(apiResponse);
  }

  crypto = apiResponse => {
    this.setState({
      bitcoin: apiResponse.find(item => item.name === "Bitcoin"),
      eth: apiResponse.find(item => item.name === "Ethereum"),
      ltc: apiResponse.find(item => item.name === "Litecoin")
    });
  };

  render() {
    return (
      <Dashboard
        bitcoin={this.state.bitcoin}
        ltc={this.state.ltc}
        eth={this.state.eth}
      />
    );
  }
}
