import React from 'react';
import Style from 'style-it';
import { ResponsiveChord } from '@nivo/chord'

import matrix from './data'

const Chart = () => {

    return (
        <div className="chart">
            <ResponsiveChord
                matrix={matrix}
                keys={['芹菜', '牛肉', '辣椒', '大蔥', '大蒜']}
                margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                valueFormat=".2f"
                padAngle={0.02}
                innerRadiusRatio={0.96}
                innerRadiusOffset={0.02}
                arcOpacity={1}
                arcBorderWidth={1}
                arcBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
                ribbonOpacity={0.5}
                ribbonBorderWidth={1}
                ribbonBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
                enableLabel={true}
                label="id"
                labelOffset={12}
                labelRotation={-90}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                colors={{ scheme: 'nivo' }}
                isInteractive={true}
                arcHoverOpacity={1}
                arcHoverOthersOpacity={0.25}
                ribbonHoverOpacity={0.75}
                ribbonHoverOthersOpacity={0.25}
                animate={true}
                motionStiffness={90}
                motionDamping={7}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 70,
                        itemWidth: 80,
                        itemHeight: 14,
                        itemsSpacing: 0,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
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

export default Chart