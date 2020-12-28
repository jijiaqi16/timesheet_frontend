import React from 'react';


import classes from './Calendars.module.css';
import CalendarsItem from './CalendarsItem/CalendarsItem'
import CalendarBar from './CalendarsItem/CalendarBar/CalendarBar'

const Calendars = (props) => {


    return (
        <React.Fragment>
            <div className={classes.background}>
                <div className={classes.title}>
                    <CalendarBar/>
                </div>
                <div className={classes.body}>
                    <CalendarsItem/>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Calendars;