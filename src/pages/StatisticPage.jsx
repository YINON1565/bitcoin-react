import React, { Component } from 'react'

import { BitcoinService } from '../services/BitcoinService'
import { UserService } from '../services/UserService'

import MyChart from '../cmps/MyChart'

export default class StatisticPage extends Component {
  state = { marketPrice: null, tradeVolume: null, avgBlockSize: null, nTransactions: null }
  componentDidMount() {
    var user = UserService.getUser()
    if (!user) this.props.history.push('/signup')
    this.getMarketPrice()
    this.getTradeVolume()
    this.getAvgBlockSize()
    this.getNTransactions()
  }
  getNTransactions = async () => {
    const nTransactions = await BitcoinService.getNTransactions();
    this.setState({ nTransactions })
  }
  getMarketPrice = async () => {
    const marketPrice = await BitcoinService.getMarketPrice();
    this.setState({ marketPrice })
  }
  getTradeVolume = async () => {
    const tradeVolume = await BitcoinService.getTradeVolume();
    this.setState({ tradeVolume })
  }
  getAvgBlockSize = async () => {
    const avgBlockSize = await BitcoinService.getAvgBlockSize();
    this.setState({ avgBlockSize })
  }
  render() {
    const { marketPrice, tradeVolume, avgBlockSize, nTransactions } = this.state
    return (
      <div className="width-container">
        <h1>Statistics</h1>
        <div className="chart-container">
          <MyChart value={marketPrice} color={'rgb(150, 44, 44)'}/>
          <MyChart value={tradeVolume} color={'#bed4ff'}/>
          <MyChart value={avgBlockSize} color={'rgb(253, 132, 132)'}/>
          <MyChart value={nTransactions} color={'rgb(172, 255, 139)'}/>
        </div>
      </div>
    );
  }
}