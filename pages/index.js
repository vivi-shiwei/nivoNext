import React from 'react';
import Chart from '../components/Chart'
import App from '../App'

const Index = () => {
    return (
        <div>
            <Chart />
            <style jsx global>{`
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
export default { title: 'Chart' };

export const Charts = () => { return App(Index) };