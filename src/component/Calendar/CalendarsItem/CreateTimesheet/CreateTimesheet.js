import React from 'react';
import { connect } from 'react-redux';

import { Button, Select } from 'antd';

import Time from '../Time/Time'
import InputProjectTime from '../Time/InputProjectTime';
import classes from './CreateTimesheet.module.css';
import * as timeSheetActions from '../../../../store/action/timesheet';

const { Option } = Select;

const Timetoolbar = (props) => {

    const week = {
        Su: 0,
        Mo: 0,
        Tu: 0,
        We: 0,
        Th: 0,
        Fr: 0,
        Sa: 0
    };


    return (
        <React.Fragment>
            <div className={classes.background}>
                <Select
                    size="large"
                    className={classes.select}
                    placeholder="Select a project">
                        
                        {Object.keys(props.projectInfo).map((key) => (
                            // console.log(props.projectInfo[key]["name"]);
                            <Option key={key} value={props.projectInfo[key]["name"]}>{props.projectInfo[key]["name"]}</Option>
                        ))
                        }
                </Select>
            </div>
            {/* <InputProjectTime show={props.show} title={"su"} projectTitle={props.title}/> */}
            {/* <InputProjectTime show={props.show} title={"mo"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"tu"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"we"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"th"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"fr"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"sa"} projectTitle={props.title}/>         */}
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


export default connect(mapStateToProps, mapDispatchToProps)(Timetoolbar);
