import React from 'react';
import Style from 'style-it';
import { ResponsiveWaffle } from '@nivo/waffle'

import data from './data'

const AreaBump = () => {

    return (
        <div className="chart">
            <ResponsiveWaffle
                data={data}
                total={100}
                rows={18}
                columns={14}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        justify: false,
                        translateX: -100,
                        translateY: 0,
                        itemsSpacing: 4,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        itemTextColor: '#777',
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                    itemBackground: '#f7fafb'
                                }
                            }
                        ]
                    }
                ]}
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

export default AreaBump