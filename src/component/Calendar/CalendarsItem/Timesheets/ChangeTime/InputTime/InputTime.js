import React from 'react';
import { connect } from 'react-redux';

import { InputNumber } from 'antd';

import classes from './InputTime.module.css';
import * as timeSheetActions from '../../../../../../store/action/timesheet';

const InputTime = (props) => {

    let title = props.week + " : ";
    let changeTime={};

    const ChangeTime = (value) => {
        changeTime={...props.timesheet};
        changeTime[props.title][props.week]=value;
        props.ChangeTimesheet(changeTime);
    }


    return (
        <React.Fragment>
            {title}
            <InputNumber
                width="10"
                min={0}
                max={24}
                defaultValue={0}
                className={classes.inputTime} 
                onChange={ChangeTime}
                />

        </React.Fragment>

    );
};

const mapStateToProps = state => {

    return {
        timesheet:state.timesheet.timesheet
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ChangeTimesheet: (addTimesheet) => dispatch(timeSheetActions.changeTimeSheet(addTimesheet))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTime);

