import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button, Select } from 'antd';

import classes from './Timesheets.module.css';
import ChangeTime from './ChangeTime/ChangeTime';
import * as timeSheetActions from '../../../../store/action/timesheet';


const { Option } = Select;

const Timesheets = (props) => {
    const week = {
        Su: 0,
        Mo: 0,
        Tu: 0,
        We: 0,
        Th: 0,
        Fr: 0,
        Sa: 0
    };

    //insert user's project
    let project = [];
    Object.keys(props.projectInfo).map((key) => (
        project.push(props.projectInfo[key]["name"])
    ));
    let addProjectTemp = [];
    let addTimesheetTemp = {};

const [selectProject, setSelectProject] = useState("");
    const [addProject, setAddProject] = useState([]);
    const [disableAdd, setDisableAdd] = useState(true);

    //check add project button disable
    useEffect(() => {
        if (addProject.includes(selectProject) || selectProject === "") {
            setDisableAdd(true);
        } else {
            setDisableAdd(false);
        }
    }, [addProject, selectProject])

    //Add Timesheet
    const handleClickAdd = () => {
        if (!addProject.includes(selectProject) && selectProject !== "") {
            //add Project Array
            addProjectTemp = [...addProject];
            addProjectTemp.push(selectProject);
            setAddProject(addProjectTemp);
            addProjectTemp = [];
            //add Timesheet Object
            if (Object.keys(props.timesheet).length !== 0) {
                addTimesheetTemp = { ...props.timesheet };
            }
            addTimesheetTemp[selectProject] = week;
            props.ChangeTimesheet(addTimesheetTemp);
            addTimesheetTemp = {};
        }
    }

    //remove item from Project Array
    const handleCloseButton = (project) => {
        addProjectTemp = [...addProject];
        addTimesheetTemp = {};
        for (let i = 0; i < addProject.length; i++) {
            if (addProject[i] === project) {
                addProjectTemp.splice(i, 1);
            } else {
                addTimesheetTemp[addProject[i]] = week;
            }
        }
        setAddProject(addProjectTemp);
        props.ChangeTimesheet(addTimesheetTemp);
        addProjectTemp = [];
        addTimesheetTemp = {};
    }

    //select project
    const onChange = (value) => {
        setDisableAdd(false);
        setSelectProject(value);
        if (addProject.includes(value)) {
            setDisableAdd(true);
        } else {
            setDisableAdd(false);
        }
    }
    let select = (
        <Select
            showSearch
            style={{ width: 200, marginLeft: "5%" }}
            placeholder="Select a project"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
                option.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {project.map(item => (<Option key={item} value={item}>{item}</Option>))}
        </Select>
    )


    return (
        <React.Fragment>
            <div className={classes.title}>
                {props.showDate}
                {select}
                <Button type="primary" onClick={handleClickAdd} disabled={disableAdd} style={{ marginLeft: "10px" }}>ADD</Button>

            </div>
            <div className={classes.form}>

                {addProject.map(key => (
                    <ChangeTime
                        key={key}
                        title={key}
                        handleCloseButton={handleCloseButton}
                    />
                ))}
            </div>
        </React.Fragment >

    );

}
const mapStateToProps = state => {

    return {
        timesheet: state.timesheet.timesheet
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ChangeTimesheet: (addTimesheet) => dispatch(timeSheetActions.changeTimeSheet(addTimesheet))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timesheets);
