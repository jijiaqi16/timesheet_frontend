import React from 'react';

import classes from './Timesheet.module.css'
import Timetoolbar from './Timetool/Timetoolbar'

import 'antd/dist/antd.css';

const Timesheet = (props) => {


    return (
        <div className={classes.div}>
            <Timetoolbar/>
        </div>

    );
};

export default Timesheet;