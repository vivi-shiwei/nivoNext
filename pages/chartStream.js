import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-stream'
import ChartLife from '../components/Chart-stream/life'
import App from '../App'

const Stream = () => {
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

const StreamLife = () => {
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

export default { title: 'Stream' };

export const Streams = () => { return App(Stream) };
export const StreamsLife = () => { return App(StreamLife) };