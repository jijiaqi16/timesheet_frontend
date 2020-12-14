import React from 'react';

import classes from './DrawerButton.module.css'

import {Button} from 'antd';



const drawButton = (props) => {


    return (
        <React.Fragment>
            <div className={classes.drawerBody}>
                <Button icon={props.icon} className={classes.button} href={props.to}>{props.title}</Button>
            </div>
        </React.Fragment>

    );
};

export default drawButton;