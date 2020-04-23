import React, { Component } from 'react'
import { BitcoinService } from '../services/BitcoinService'
import MyChart from '../cmps/MyChart'


export default class StatisticPage extends Component {
    state = { marketPrice: null, tradeVolume: null, avgBlockSize: null,  nTansactions: null}
    componentDidMount() {
    //   var user = UserService.getUser()
    //   if (!user) this.props.history.push('/signup')
      this.getStatistics('market-price')
      this.getStatistics('trade-volume')
      this.getStatistics('avg-block-size')
      this.getStatistics('n-transactions')
      // this.getMarketPrice()
      // this.getTradeVolume()
      // this.getAvgBlockSize()
    }
    getStatistics = async (type) => {
      const res = await BitcoinService.getStatistics(type);
      switch (type) {
        case 'market-price':
          this.setState({ marketPrice: res })
          break;
        case 'trade-volume':
          this.setState({ tradeVolume: res })
          break;
        case 'avg-block-size':
          this.setState({ avgBlockSize: res })
          break;
        case 'n-transactions':
          this.setState({ nTansactions: res })
          break;
      }
    }
    // getMarketPrice = async () => {
    //   const marketPrice = await BitcoinService.getMarketPrice();
    //   this.setState({ marketPrice })
    // }
    // getTradeVolume = async () => {
    //   const tradeVolume = await BitcoinService.getTradeVolume();
    //   this.setState({ tradeVolume })
    // }
    // getAvgBlockSize = async () => {
    //   const avgBlockSize = await BitcoinService.getAvgBlockSize();
    //   this.setState({ avgBlockSize })
    // }
    render() {
      const { marketPrice, tradeVolume, avgBlockSize, nTansactions } = this.state
      return (
        <div className="width-container">
          <h1>Statistics</h1>
          <div className="chart-container">
            <MyChart value={marketPrice}/>
            <MyChart value={tradeVolume}/>
            <MyChart value={avgBlockSize}/>
            <MyChart value={nTansactions}/>
          </div>
        </div>
      );
    }
  }