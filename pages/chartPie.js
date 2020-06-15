import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-pie'
import ChartLive from '../components/Chart-pie/live'
import ChartLuxuryLife from '../components/Chart-pie/luxuryLife'

import App from '../App'

const Pie = () => {
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

const PieLive = () => {
    return (
        <div>
            <ChartLive />
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

const luxuryLife = () => {
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

export default { title: 'Pie' };

export const Pies = () => { return App(Pie) };
export const PiesLive = () => { return App(PieLive) };
export const luxurysLife = () => { return App(luxuryLife) };