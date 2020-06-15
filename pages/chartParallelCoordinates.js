import React from 'react';
import Style from 'style-it';

import { AreaBump, AreaBump1 } from '../components/Chart-parallelCoordinates'
import App from '../App'

const ParallelCoordinates = () => {
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
const ParallelCoordinates1 = () => {
    return (
        <div>
            <AreaBump1 />
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
export default { title: 'ParallelCoordinates' };

export const ParallelCoordinatess = () => { return App(ParallelCoordinates) };
export const Parallel = () => { return App(ParallelCoordinates1) };