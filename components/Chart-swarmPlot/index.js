import React from 'react';
import Style from 'style-it';
import { ResponsiveSwarmPlot } from '@nivo/swarmplot'

import data from './data'

const Swarmplot = () => {

    return (
        <div className="chart">
            <ResponsiveSwarmPlot
                data={data}
                groups={['group A', 'group B', 'group C']}
                value="price"
                valueFormat="$.2f"
                valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
                size={{ key: 'volume', values: [4, 20], sizes: [6, 20] }}
                forceStrength={4}
                simulationIterations={100}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.6
                        ],
                        [
                            'opacity',
                            0.5
                        ]
                    ]
                }}
                margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
                axisTop={{
                    orient: 'top',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'group if vertical, price if horizontal',
                    legendPosition: 'middle',
                    legendOffset: -46
                }}
                axisRight={{
                    orient: 'right',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'price if vertical, group if horizontal',
                    legendPosition: 'middle',
                    legendOffset: 76
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'group if vertical, price if horizontal',
                    legendPosition: 'middle',
                    legendOffset: 46
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'price if vertical, group if horizontal',
                    legendPosition: 'middle',
                    legendOffset: -76
                }}
                motionStiffness={50}
                motionDamping={10}
            />
            <style jsx>{`
                    .chart {
                        height:50vh;
                        width:60vw;
                        background: white;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                            transition: 0.3s;
                    }
                    .chart:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }
                `}</style>
        </div>
    )
}

export default Swarmplot