import React from 'react';

import classes from './Time.module.css';



const Time = (props) => {


    return (
        <React.Fragment>
            <div className={classes.background}>
                <div className={classes.body}>{props.title}</div>
                <div className={classes.body}>{props.show["su"]+" Hours"}</div>
                <div className={classes.body}>{props.show["mo"]+" Hours"}</div>
                <div className={classes.body}>{props.show["tu"]+" Hours"}</div>
                <div className={classes.body}>{props.show["we"]+" Hours"}</div>
                <div className={classes.body}>{props.show["th"]+" Hours"}</div>
                <div className={classes.body}>{props.show["fr"]+" Hours"}</div>
                <div className={classes.body}>{props.show["sa"]+" Hours"}</div>

            </div>
        </React.Fragment>

    );
};

export default Time;
