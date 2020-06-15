import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-sunburst'
import ChartFood from '../components/Chart-sunburst/food'
import App from '../App'

const Sunburst = () => {
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

const SunburstFood = () => {
    return (
        <div>
            <ChartFood />
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

export default { title: 'Sunburst' };

export const Sunbursts = () => { return App(Sunburst) };
export const Sunbursts_food = () => { return App(SunburstFood) };