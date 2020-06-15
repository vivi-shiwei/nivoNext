import React from 'react';
import Style from 'style-it';
import { ResponsiveSunburst } from '@nivo/sunburst'

import data from './data'

const Chart = () => {

    return (
        <div className="chart">
            <ResponsiveSunburst
                data={data}
                margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
                identity="name"
                value="loc"
                cornerRadius={2}
                borderWidth={1}
                borderColor="white"
                colors={{ scheme: 'nivo' }}
                childColor={{ from: 'color' }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
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