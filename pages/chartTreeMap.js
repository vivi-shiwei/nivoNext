import React from 'react';
import Style from 'style-it';

import { ResponsiveTreeMap1, ResponsiveTreeMap2 } from '../components/Chart-treeMap'
import App from '../App'

const Treemap = () => {
    return (
        <div>
            <ResponsiveTreeMap1 />
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
const Treemap1 = () => {
    return (
        <div>
            <ResponsiveTreeMap2 />
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
export default { title: 'TreeMap' };

export const Treemaps = () => { return App(Treemap) };
export const Treemapse = () => { return App(Treemap1) };