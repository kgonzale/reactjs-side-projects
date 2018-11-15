import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
import Loading from "./Loading.js";
import Button from "@material-ui/core/Button";

const axios = require("axios");

export default class DataGrabber extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        "X-CMC_PRO_API_KEY": "6368b13b-66dc-40d1-881d-5fb9d4af01b2"
      }
    }).then(function(response) {
      return response.data.data.slice();
    });
    this.allCrypto(apiResponse);

    this.setState({ loading: false });
  }

  allCrypto = apiResponse => {
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
  };

  sortPrice = mod => {
    let refinedEvenMore = this.state.refined.slice();
    let test = refinedEvenMore.sort((a, b) => mod * (b.price - a.price));

    this.setState({ refined: test });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Button variant="outlined" onClick={() => this.sortPrice(1)}>
            Descending order...
          </Button>
          <Button variant="outlined" onClick={() => this.sortPrice(-1)}>
            Ascending order...
          </Button>
        </div>

        {this.state.loading ? (
          <Loading />
        ) : (
          <Dashboard refinedResponse={this.state.refined} />
        )}
      </React.Fragment>
    );
  }
}
