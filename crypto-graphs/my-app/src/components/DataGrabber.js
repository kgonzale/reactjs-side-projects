import React, { Component } from "react";
const axios = require("axios");

export default class DataGrabber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoin: ""
    };
  }

  componentDidMount = () => {
    axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "fuck off"
      }
    }).then(function(response) {
      console.log(response);
    });
  };

  render() {
    return <div>kevin</div>;
  }
}
