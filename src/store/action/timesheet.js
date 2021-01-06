import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-local';

//change date
export const getWeekdate = (weekDate) => {
    return {
        type: actionTypes.WEEK_DATE_GET,
        weekDate: weekDate
    }
}
export const changeTimesheetStart = () => {
    return {
        type: actionTypes.CREATE_TIMESHEET_START
    }
}
//create timesheet
export const changeTimeSheet = (timesheet) => {
    return {
        type: actionTypes.TIMESHEET_CREATE,
        timesheet: timesheet
    }
}

export const submitTimesheet = (createTimesheet) => {

    let config = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage["timesheettoken"]
        }
    }

    return (dispatch) => {
        axios.post('/creatTimesheet', createTimesheet, config)
            .then(response => {
                console.log(response);
            });
        return Promise.resolve();

    }
}
//show timesheet
export const showTimesheet = (StartDate) => {
    let dateAndName = {};
    let config = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage["timesheettoken"]
        }
    }


    dateAndName = {
        startDate: StartDate,
        username: localStorage.getItem('timesheetUsername')
    }
    // console.log(startDate);
    return (dispatch) => {

        dispatch(showTimesheetLoading());
        axios.post('/showtimesheet', dateAndName, config)
            .then(response => {
                // console.log(response.data);
                setTimeout(() => {
                    dispatch(showTimesheetSuccess(response.data));
                }, 500);

            });
    }
}

export const showTimesheetSuccess = (show) => {
    return {
        type: actionTypes.TIMESHEET_SHOW,
        show: show
    }
}

export const showTimesheetLoading = () => {
    return {
        type: actionTypes.TIMESHEET_SHOW_LOADING
    }
}
//edit timesheet
export const editTimesheet = (editedTimesheet) => {
    return {
        type: actionTypes.EDIT_TIMESHEET,
        editedTimesheet: editedTimesheet
    }
}

export const saveTimesheet = (savedTimesheet,startdate) => {
    let config = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage["timesheettoken"]
        }
    }
    return (dispatch) => {
        axios.post('/savetimesheet', savedTimesheet, config)
            .then(response => {
                dispatch(showTimesheet(startdate));

            });
    }
}
