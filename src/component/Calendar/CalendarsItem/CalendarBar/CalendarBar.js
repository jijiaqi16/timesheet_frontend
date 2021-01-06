import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { DatePicker, Button} from 'antd';
import { PlusOutlined, SaveOutlined } from '@ant-design/icons';
import moment from 'moment';

import classes from './CalendarBar.module.css';
import * as timeSheetActions from '../../../../store/action/timesheet'

const { WeekPicker } = DatePicker;

const CalenderBar = (props) => {

    let startDate = "";
    let endDate = "";
    const [date, setDate] = useState({});
    const [showDate, setShowDate] = useState('YYYY/MM/DD');

    const [disableInsertButton, setDisableInsertButton] = useState(true);
    const [disableSaveButton, setDisableSaveButton] = useState(true);



    //check if showTimesheet is null set Button status
    useEffect(() => {
        if (Object.keys(props.weekdate).length === 0 || props.loading) {
            setDisableInsertButton(true);
            setDisableSaveButton(true);

        }
        if (Object.keys(props.weekdate).length !== 0 && !props.loading) {
            if (Object.keys(props.show).length === 0) {
                setDisableInsertButton(false);
                setDisableSaveButton(true);

            }
            if (Object.keys(props.show).length !== 0) {
                setDisableInsertButton(true);
                setDisableSaveButton(false);

            }
        }
    }, [props.show, props.weekdate, props.loading])

    //change week
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


    // const handleSubmitTimesheet = () => {
    //     timesheet = { ...props.timesheet };
    //     timesheet.endDate = date.end
    //     timesheet.startDate = date.start;
    //     timesheet.username = localStorage.getItem("timesheetUsername")
    //     props.SubmitTimesheet(timesheet);
    //     // console.log(date);  
    //     // console.log(timesheet);
    //     console.log("Submit");
    //     props.ShowTimeSheetLoading();
    //     setTimeout(() => {
    //         props.ShowTimesheet(date.start);
    //     }, 2000);
    // };
    const handleClickCreateButton=()=>{
        console.log(props.projectInfo);
        console.log(props.show);
    }


    //save Timesheet
    const handleClickSaveButton = () => {
        console.log(props.show);
        const { "Total(/day)": total, ...saveTemp } = { ...props.show };
        props.saveTimesheet(saveTemp,date.start);
    }

    // let modal = (
    //     <Modal
    //         width={1000}
    //         title={modaltitle}
    //         visible={isModalVisible}
    //         onOk={handleSubmitTimesheet}
    //         okButtonProps={{ disabled: Object.keys(props.timesheet).length === 0 ? true : false }}
    //         okText="SUBMIT"
    //         onCancel={handleCancel}
    //         destroyOnClose
    //     >
    //         <Timesheets
    //             showDate={showDate}
    //             handleSubmit={handleSubmitTimesheet}
    //             projectInfo={props.projectInfo}
    //         />
    //     </Modal>
    // );



    return (
        <React.Fragment>
            <p className={classes.p}>{showDate}</p>
            <div className={classes.body}>
                <Button icon={<SaveOutlined />} className={classes.saveButton} type="primary" size="small" onClick={handleClickSaveButton} disabled={disableSaveButton}>SAVE</Button>
                <Button icon={<PlusOutlined />} className={classes.addButton} type="primary" size="small"  onClick={handleClickCreateButton} disabled={disableInsertButton}>CREATE</Button>
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
        ShowTimesheet: (startDate) => dispatch(timeSheetActions.showTimesheet(startDate)),
        ShowTimeSheetLoading: () => dispatch(timeSheetActions.showTimesheetLoading()),
        changeTimesheetStart: () => dispatch(timeSheetActions.changeTimesheetStart()),
        saveTimesheet:(savedTimesheet,startdate)=>dispatch(timeSheetActions.saveTimesheet(savedTimesheet,startdate))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CalenderBar);