import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-waffle'
import ChartLife from '../components/Chart-waffle/lift'
import App from '../App'

const Waffle = () => {
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

const WaffleLife = () => {
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

export default { title: 'Waffle' };

export const Waffles = () => { return App(Waffle) };
export const WafflesLife = () => { return App(WaffleLife) };