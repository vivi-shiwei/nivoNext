import React from 'react';
import Style from 'style-it';

import { Radars1, Radars } from '../components/Chart-Radar'
import App from '../App'

const Radar = () => {
    return (
        <div>
            <Radars1 />
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

const Radar1 = () => {
    return (
        <div>
            <Radars />
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
export default { title: 'Radar' };

export const Radarse = () => { return App(Radar) };
export const Radarse1 = () => { return App(Radar1) };