import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-chord'
import ChartStirfry from '../components/Chart-chord/stirfry'
import App from '../App'

const Chord = () => {
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
export default { title: 'Chord' };

const ChordStirfry = () => {
    return (
        <div>
            <ChartStirfry />
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
// export default { title: 'ChordSchool' };

export const Chords = () => { return App(Chord) };
export const Chord_stirfry = () => { return App(ChordStirfry) };