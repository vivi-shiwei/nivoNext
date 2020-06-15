import React from 'react';
import Style from 'style-it';

import { AreaBumpMelon, AreaBump } from '../components/Chart-areaBump'
import App from '../App'

const AreaBumps = () => {
    return (
        <div>
            <AreaBump />
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
const AreaBumpMelons = () => {
    return (
        <div>
            <AreaBumpMelon />
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
export default { title: 'AreaBump' };

export const AreaBumpse = () => { return App(AreaBumps) };
export const AreaBumpMelonse = () => { return App(AreaBumpMelons) };