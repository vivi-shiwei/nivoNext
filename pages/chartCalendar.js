import React from 'react';
import Style from 'style-it';

import { CalendarInitial, CalendarClothing } from '../components/Chart-calendar'
import App from '../App'

const Calendarinit = () => {
    return (
        <div>
            <CalendarInitial />
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

const CalendarClos = () => {
    return (
        <div>
            <CalendarClothing />
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
export default { title: 'Calendar' };

export const CalendarInitials = () => { return App(Calendarinit) };
export const CalendarClothings = () => { return App(CalendarClos) };