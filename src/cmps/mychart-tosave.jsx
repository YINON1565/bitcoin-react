

import React, { Component } from 'react'
import { Chart } from "react-google-charts";

export default class MyChart extends Component {
    render() {
        const {description, data, hAxis, vAxis} = this.props.statistics
        const loader=<img src={require('../assets/svg/loading.svg')} alt="Loading" />
        return (
            <div>
                <Chart
                    className="chart"
                    width={'100%'}
                    height={'400px'}
                    chartType="AreaChart"
                    loader={loader}
                    data={data}
                    options={{
                        titleTextStyle: { fontSize: 22 },
                        title:description,
                        hAxis,
                        vAxis,
                        colors: ['#535a69'],
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