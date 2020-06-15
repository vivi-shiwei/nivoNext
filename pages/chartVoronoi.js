import React from 'react';
import Style from 'style-it';

import Chart from '../components/Chart-voronoi'
import ChartLife from '../components/Chart-voronoi/life'
import App from '../App'

const Voronoi = () => {
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

const VoronoiLife = () => {
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

export default { title: 'Voronoi' };

export const Voronois = () => { return App(Voronoi) };
export const VoronoisLife = () => { return App(VoronoiLife) };