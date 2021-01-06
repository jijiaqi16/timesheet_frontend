import React from 'react';
import { connect } from 'react-redux';

import { Spin } from 'antd';

import classes from './CalendarsItem.module.css';
import Week from './Week/Week';
import Time from './Time/Time'
import TotalTime from './Time/TotalTime';
import CreateTimesheet from './CreateTimesheet/CreateTimesheet';

const CalendarsItem = (props) => {
    //set show Timesheet
    let showTimesheet = null;
    if (props.loading) {
        showTimesheet = (
            <div className={classes.loading}>
                <Week />
                <Spin size="large" style={{ marginTop: "10%" }} />
            </div>
        );
    } else {
        if (Object.keys(props.show).length !== 0 && Object.keys(props.weekdate).length !== 0) {
            showTimesheet = (
                <div className={classes.background}>
                    <Week />
                    {Object.keys(props.show).map((key) =>
                    (
                        <Time key={key} title={key} show={props.show[key]} projectInfo={props.projectInfo} isProject={key==='Total(/day)'?false:true}/>
                    )
                    )}
                    <TotalTime show={props.show['Total(/day)']} />
                </div>);
        } else {
            showTimesheet = (
                <div className={classes.emptyBacground}>
                    <Week />
                    <CreateTimesheet projectInfo={props.projectInfo}/>
                    {/* <p className={classes.noRecord}>NO RECORD</p> */}
                </div>
            );
        }
    }


    return (
        <React.Fragment>
            {showTimesheet}
        </React.Fragment>

    );
};

const mapStateToProps = state => {

    return {
        show: state.timesheet.show,
        weekdate: state.timesheet.weekDate,
        loading: state.timesheet.loading
    };
}



export default connect(mapStateToProps, null)(CalendarsItem);