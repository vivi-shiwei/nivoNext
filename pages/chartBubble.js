import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-bubble'
import ChartOne from '../components/Chart-bubble/one'
import App from '../App'

const Bubble = () => {
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

const BubbleOne = () => {
    return (
        <div>
            <ChartOne />
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
export default { title: 'Bubble' };

export const Bubbles = () => { return App(Bubble) };
export const BubblesOne = () => { return App(BubbleOne) };