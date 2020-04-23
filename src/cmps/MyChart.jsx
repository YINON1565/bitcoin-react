import React, { Component } from 'react'
import { Chart } from "react-google-charts";

export default class MyChart extends Component {
    render() {
        const { value, color } = this.props
        var data,title,hAxis, vAxis;
        if (value) {
            title = value.description
            data = value.values.map(value => {
                return [new Date(value.x * 1000),
                value.y]
            })
            data.unshift([{ type: 'date', label: 'Time' },
            value.name])
            hAxis = {
                title: `Time (per 5 month)`,
                titleTextStyle: { fontSize: 18 }
            }
            vAxis = {
                title: value.unit,
                titleTextStyle: { fontSize: 18 }
            }
        }
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
                        title,
                        hAxis,
                        vAxis,
                        colors: [color],
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