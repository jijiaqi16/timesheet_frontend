import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { DatePicker, Button, Modal } from 'antd';
import moment from 'moment';

import classes from './CalendarBar.module.css';
import * as timeSheetActions from '../../../../store/action/timesheet'
import Timesheets from '../Timesheets/Timesheets';

const { WeekPicker } = DatePicker;

const CalenderBar = (props) => {

    let timesheet = {};
    let startDate = "";
    let endDate = "";
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [date, setDate] = useState({});
    const [showDate, setShowDate] = useState('YYYY/MM/DD');
    const [disableInsertButton, setDisableInsertButton] = useState(true);
    const [disableEditButton, setDisableEditButton] = useState(true);
    const [disableDeletetButton, setDisableDeletetButton] = useState(true);

    //check if showTimesheet is null set Button status
    useEffect(() => {
        if (Object.keys(props.weekdate).length === 0 || props.loading) {
            setDisableInsertButton(true);
            setDisableEditButton(true);
            setDisableDeletetButton(true);
        }
        if (Object.keys(props.weekdate).length !== 0 && !props.loading) {
            if (Object.keys(props.show).length === 0) {
                setDisableInsertButton(false);
                setDisableEditButton(true);
                setDisableDeletetButton(true);
            }
            if (Object.keys(props.show).length !== 0) {
                setDisableInsertButton(true);
                setDisableEditButton(false);
                setDisableDeletetButton(false);
            }
        }
    }, [props.show, props.weekdate, props.loading])

    const handleWeekChange = weekData => {
        //pack week
        let week = [];
        if (moment(weekData).isValid()) {
            for (let i = 0; i < 7; i++) {
                week[i] = moment(weekData).day(i).format('MM/DD');
            };
            props.ChangeWeekDate(week);
            // console.log(moment(weekData).week(),moment(weekData).year())
            //display week
            startDate = moment(weekData).day(0).format('YYYY/MM/DD');//Monday
            endDate = moment(weekData).day(6).format('YYYY/MM/DD');//Sunday

            setShowDate(startDate + "——" + endDate);
            setDate({ start: startDate, end: endDate });
            props.ShowTimesheet(startDate);
        } else {
            props.ChangeWeekDate([]);
            setShowDate("YYYY/MM/DD——YYYY/MM/DD");
            setDate({});
            week = [];
            startDate = "";
            endDate = "";
        }

    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        timesheet = { ...props.timesheet };
        timesheet.endDate = date.end
        timesheet.startDate = date.start;
        timesheet.username = localStorage.getItem("timesheetUsername")
        props.SubmitTimesheet(timesheet);
        // console.log(date);  
        // console.log(timesheet);
        console.log("Submit");
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        window.location.reload()
    };

    let modal = (
        <Modal
            width={1000}
            title={"Insert Timesheet"}
            visible={isModalVisible}
            onOk={handleOk}
            okButtonProps={{ disabled: Object.keys(props.timesheet).length === 0 ? true : false }}
            okText="SUBMIT"
            onCancel={handleCancel}
        >
            <Timesheets showDate={showDate} handleSubmit={handleOk} />
        </Modal>
    );

    return (
        <React.Fragment>
            <p className={classes.p}>{showDate}</p>
            <div className={classes.body}>
                {modal}
                <Button className={classes.deleteButton} type="danger" size="small" disabled={disableDeletetButton}>DELETE</Button>
                <Button className={classes.editButton} type="primary" size="small" disabled={disableEditButton}>EDIT</Button>
                <Button className={classes.addButton} type="primary" size="small" onClick={showModal} disabled={disableInsertButton}>CREATE</Button>
                <WeekPicker className={classes.datePicker} onChange={handleWeekChange} />
            </div>

        </React.Fragment>


    );
};

const mapStateToProps = state => {

    return {
        weekdate: state.timesheet.weekDate,
        timesheet: state.timesheet.timesheet,
        show: state.timesheet.show,
        loading: state.timesheet.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ChangeWeekDate: (weekdate) => dispatch(timeSheetActions.getWeekdate(weekdate)),
        SubmitTimesheet: (submitTimesheet) => dispatch(timeSheetActions.submitTimesheet(submitTimesheet)),
        ShowTimesheet: (startDate) => dispatch(timeSheetActions.showTimesheet(startDate))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CalenderBar);