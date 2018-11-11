import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
const axios = require("axios");

export default class DataGrabber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoin: ""
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
        "X-CMC_PRO_API_KEY": "eat me"
      }
    }).then(function(response) {
      // console.log(response.data.data);
      return response.data.data.slice();
    });

    this.bitcoin(apiResponse);
  }

  bitcoin = apiResponse => {
    const data = apiResponse.find(item => {
      return item.name === "Bitcoin";
    });

    this.setState({ bitcoin: data });
  };

  render() {
    return <Dashboard bitcoin={this.state.bitcoin} />;
  }
}
