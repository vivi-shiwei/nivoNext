import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-line'
import ChartPhone from '../components/Chart-line/phone'
import App from '../App'

const Line = () => {
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
export default { title: 'Line' };

const LinePhone = () => {
    return (
        <div>
            <ChartPhone />
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

export const Lines = () => { return App(Line) };
export const Lines_phone = () => { return App(LinePhone) };