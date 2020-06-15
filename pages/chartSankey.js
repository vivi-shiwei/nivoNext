import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-sankey'
import ChartLife from '../components/Chart-sankey/life'

import App from '../App'

const Sankey = () => {
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

const SankeyLife = () => {
    return (
        <div>
            <ChartLife />
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

export default { title: 'Sankey' };

export const Sankeys = () => { return App(Sankey) };
export const SankeysLife = () => { return App(SankeyLife) };