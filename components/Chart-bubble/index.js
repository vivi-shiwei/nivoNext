import React from 'react';
import Style from 'style-it';
import { ResponsiveBubble } from '@nivo/circle-packing'

import root from './data'

const Chart = () => {

    return (
        <div className="chart">
            <ResponsiveBubble
                root={root}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                identity="name"
                value="loc"
                colors={{ scheme: 'nivo' }}
                padding={6}
                labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                borderWidth={2}
                borderColor={{ from: 'color' }}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'none',
                        color: 'inherit',
                        rotation: -45,
                        lineWidth: 5,
                        spacing: 8
                    }
                ]}
                fill={[{ match: { depth: 1 }, id: 'lines' }]}
                animate={true}
                motionStiffness={90}
                motionDamping={12}
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

export default Chart