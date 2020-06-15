import React from 'react';
import Style from 'style-it';
import { ResponsiveTreeMap } from '@nivo/treemap'

import root from './data'
import root1 from './data1'

export const ResponsiveTreeMap1 = () => {

    return (
        <div className="chart">
            <ResponsiveTreeMap
                root={root}
                identity="name"
                value="loc"
                innerPadding={3}
                outerPadding={3}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                label="loc"
                labelFormat=".0s"
                labelSkipSize={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
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

export const ResponsiveTreeMap2 = () => {

    return (
        <div className="chart">
            <ResponsiveTreeMap
                root={root1}
                identity="name"
                value="loc"
                innerPadding={3}
                outerPadding={3}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                label="loc"
                labelFormat=".0s"
                labelSkipSize={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
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
