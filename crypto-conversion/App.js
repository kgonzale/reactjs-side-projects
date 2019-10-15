//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import React, { useState } from 'react';

const btcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
const ethUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'

const App = () => {
  const [btc, setBtc] = useState('')
  const [eth, setEth] = useState('')

  useEffect(() => {
    const getBtcPrice = () => {
      fetch(btcUrl).then(response => response.json()).then(response => setBtc(response.USD))
    }

    const getEthPrice = () => {
      fetch(ethUrl).then(response => response.json()).then(response => setEth(response.USD))
    }
  }, [btc, eth])

  setInterval(getBtcPrice, 3000)
  setInterval(getEthPrice, 3000)

  return (
    <div>btc: {btc}, eth: {eth}</div>
  );
}

export default App;