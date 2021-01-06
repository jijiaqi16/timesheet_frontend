import React from 'react';
import { connect } from 'react-redux';

import {InputNumber } from 'antd';

import classes from './InputProjectTime.module.css';
import * as timeSheetActions from '../../../../store/action/timesheet';

const InputProjectTime = (props) => {

    let inputTimeTemp={};
    const handChangeTime=(value)=>{   
        if(value==="" || value===null){
            value=0;
        }
        inputTimeTemp = {...props.showTimesheetTime};
        inputTimeTemp["Total(/day)"][props.title] = props.showTimesheetTime["Total(/day)"][props.title]-props.showTimesheetTime[props.projectTitle][props.title]+value;
        inputTimeTemp[props.projectTitle][props.title] = value;
        props.editedTimesheet(inputTimeTemp);
        inputTimeTemp={};
    }


    return (
        <React.Fragment>
            <InputNumber maxLength="2" 
            parser={value=>value.replace(/[^\d]|0[\s\S]|[3-9][\s\S]|[2][5-9]|[\s\S][^\d]/,'0')}   className={classes.inputNumber} defaultValue={props.show[props.title]} min="0" max="24" onChange={handChangeTime} />
        </React.Fragment>
        
    );
};


const mapStateToProps = state => {
    return {
        showTimesheetTime: state.timesheet.show,
    };
}


const mapDispatchToProps = dispatch => {
    return {
        editedTimesheet: (editedTimesheet) => dispatch(timeSheetActions.editTimesheet(editedTimesheet)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputProjectTime);

           