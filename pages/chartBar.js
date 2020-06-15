import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-bar'
import ChartLife from '../components/Chart-bar/life'
import ChartLuxuryLife from '../components/Chart-bar/luxuryLife'

import App from '../App'

const Bar = () => {
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

const BarLife = () => {
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

const BarLuxuryLife = () => {
    return (
        <div>
            <ChartLuxuryLife />
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

export default { title: 'Bar' };

export const Bars = () => { return App(Bar) };
export const BarsLife = () => { return App(BarLife) };
export const BarsLuxuryLife = () => { return App(BarLuxuryLife) };