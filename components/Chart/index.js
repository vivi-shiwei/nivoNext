import React from 'react';
import { ResponsivePie } from '@nivo/pie'

import data from './data'

const Chart = () => {

    return (

        <div className="chart">
            <ResponsivePie
                data={data}
                //圓圖的數據
                innerRadius={0.5}
                //中心的半徑
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            />
            <style jsx>{`
                    .chart {
                        height:50vh;
                        width:60vw;
                    }
                `}</style>
        </div>
    )
}

export default Chart