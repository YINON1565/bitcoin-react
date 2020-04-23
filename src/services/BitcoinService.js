import axios from "axios";
import { StorageService } from './StorageService'

const KEY_RATE = 'rate'
const KEY_MARKET_PRICE = 'marketPrice'
const KEY_N_TRANSACTIONS = 'n-transactions'
const KEY_TRADE_VULUME = 'tradeVolume'
const KEY_AVG_BLOCK_SIZE = 'avgBlockSize'

async function getRate(coins) {
    var rate = StorageService.load(KEY_RATE)
    if (!rate) {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        rate = res.data
        StorageService.store(KEY_RATE, rate)
    }
    return rate
}
async function getMarketPrice(timespan = '5months') {
    var marketPrice = StorageService.load(KEY_MARKET_PRICE)
    if (!marketPrice) {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${timespan}&format=json&cors=true`)
        marketPrice = res.data
        StorageService.store(KEY_MARKET_PRICE, marketPrice)
    }
    return marketPrice
}

async function getTradeVolume(timespan = '5months') {
    var tradeVolume = StorageService.load(KEY_TRADE_VULUME)
    if (!tradeVolume) {
        const res = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=${timespan}&format=json&cors=true`)
        tradeVolume = res.data
        StorageService.store(KEY_TRADE_VULUME, tradeVolume)
    }
    return tradeVolume
}

async function getAvgBlockSize(timespan = '5months') {
    var avgBlockSize = StorageService.load(KEY_AVG_BLOCK_SIZE)
    if (!avgBlockSize) {
        const res = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=${timespan}&format=json&cors=true`)
        avgBlockSize = res.data
        StorageService.store(KEY_AVG_BLOCK_SIZE, avgBlockSize)
    }

    return avgBlockSize
}
async function getNTransactions(timespan = '5months') {
    var nTransactions = StorageService.load(KEY_N_TRANSACTIONS)
    if (!nTransactions) {
        const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=${timespan}&format=json&cors=true`)
        nTransactions = res.data
        StorageService.store(KEY_N_TRANSACTIONS, nTransactions)
    }

    return nTransactions
}

async function getStatistics(type, timespan = '5months') {
    var statistics = StorageService.load(type)
    if (!statistics) {
        const res = await axios.get(`https://api.blockchain.info/charts/${type}?timespan=${timespan}&format=json&cors=true`)
        statistics = {
            description: res.data.description,
            data: res.data.values.map(value => {
                return [new Date(value.x * 1000), value.y];
            }),
            hAxis: {
                title: `time ${timespan = '5months'}`,
                titleTextStyle: { fontSize: 18 }
            },
            vAxis: {
                title: res.data.name,
                titleTextStyle: { fontSize: 18 }
            }
        }
        statistics.data.unshift([{ type: 'date', label: 'Time' },
        res.data.unit])
        StorageService.store(type, statistics)
    } 
    return statistics
}

export const BitcoinService = {
    getRate,
    getMarketPrice,
    getTradeVolume,
    getAvgBlockSize,
    getNTransactions,
    // getStatistics
}

