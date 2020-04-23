import React, { Component } from 'react'
import { Chart } from "react-google-charts";

export default class ChartForMoves extends Component {
    render() {
        const { allMoves, refProp } = this.props
        var data = allMoves.map(move => [new Date(move.at), +move.amount])
        data.unshift([{ type: 'date', label: 'Time' }, 'amount'])
        var title = 'Moves Statistics'
        var hAxis = {
            title: `Time`,
        }
        var vAxis = {
            title: 'Money transfers',
        }
        const loader = <img src={require('../assets/svg/loading.svg')} alt="Loading" />
        return (
            <div ref={refProp}>
                <Chart
                    className="chart"
                    width={'100%'}
                    height={'400px'}
                    chartType="AreaChart"
                    loader={loader}
                    data={data}
                    options={{
                        title,
                        hAxis,
                        vAxis,
                        // legend: "none",
                        animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1500,
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}
