import React from 'react';
import Style from 'style-it';
import { ResponsiveVoronoi } from '@nivo/voronoi'

import data from './data'

const Chart = () => {

    return (
        <div className="chart">
            <ResponsiveVoronoi
                data={data}
                xDomain={[0, 100]}
                yDomain={[0, 100]}
                margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
                enableLinks={true}
                linkLineColor="#cccccc"
                cellLineColor="#c6432d"
                pointSize={6}
                pointColor="#c6432d"
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