import React from 'react';
import Style from 'style-it';
import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates'

import data from './data'
import data1 from './data1'

export const AreaBump = () => {

    return (
        <div className="chart">
            <ResponsiveParallelCoordinates
                data={data}
                variables={[
                    {
                        key: 'temp',
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        ticksPosition: 'before',
                        legend: 'temperature',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                    {
                        key: 'cost',
                        type: 'linear',
                        min: 0,
                        max: 'auto',
                        ticksPosition: 'before',
                        legend: 'cost',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                    {
                        key: 'color',
                        type: 'point',
                        padding: 1,
                        values: [
                            'red',
                            'yellow',
                            'green'
                        ],
                        legend: 'color',
                        legendPosition: 'start',
                        legendOffset: -20
                    },
                    {
                        key: 'target',
                        type: 'point',
                        padding: 0,
                        values: [
                            'A',
                            'B',
                            'C',
                            'D',
                            'E'
                        ],
                        legend: 'target',
                        legendPosition: 'start',
                        legendOffset: -20
                    },
                    {
                        key: 'volume',
                        type: 'linear',
                        min: 0,
                        max: 'auto',
                        legend: 'volume',
                        legendPosition: 'start',
                        legendOffset: -20
                    }
                ]}
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
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
export const AreaBump1 = () => {

    return (
        <div className="chart">
            <ResponsiveParallelCoordinates
                data={data1}
                variables={[
                    {
                        key: 'temp',
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        ticksPosition: 'before',
                        legend: 'temperature',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                    {
                        key: 'cost',
                        type: 'linear',
                        min: 0,
                        max: 'auto',
                        ticksPosition: 'before',
                        legend: 'cost',
                        legendPosition: 'start',
                        legendOffset: 20
                    },
                    {
                        key: 'color',
                        type: 'point',
                        padding: 1,
                        values: [
                            'red',
                            'yellow',
                            'green'
                        ],
                        legend: 'color',
                        legendPosition: 'start',
                        legendOffset: -20
                    },
                    {
                        key: 'target',
                        type: 'point',
                        padding: 0,
                        values: [
                            'A',
                            'B',
                            'C',
                            'D',
                            'E'
                        ],
                        legend: 'target',
                        legendPosition: 'start',
                        legendOffset: -20
                    },
                    {
                        key: 'volume',
                        type: 'linear',
                        min: 0,
                        max: 'auto',
                        legend: 'volume',
                        legendPosition: 'start',
                        legendOffset: -20
                    }
                ]}
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
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