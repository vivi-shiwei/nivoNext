import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-swarmPlot'
import ChartDNA from '../components/Chart-swarmPlot/dna'
import App from '../App'

const SwarmPlot = () => {
    return (
        <div>
            <Chart />
            <style jsx>{`
                body {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>

    )
}

const SwarmPlotDNA = () => {
    return (
        <div>
            <ChartDNA />
            <style jsx>{`
                body {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>

    )
}

export default { title: 'SwarmPlot' };

export const Sankeys = () => { return App(SwarmPlot) };
export const Sankeys_DNA = () => { return App(SwarmPlotDNA) };