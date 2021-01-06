import * as actionTypes from '../action/actionTypes';
import * as update from '../../Utility/update'

const initalState = {
    weekDate:[],   
    timesheet:{},
    show:{},
    loading:false,
    create:false 
};

const createTimeSheetStart=(state,action)=>{
    return update.updateObject(state,{weekDate:[],timesheet:[],show:{},loading:false})
}

const getWeekDate=(state,action)=>{
    return update.updateObject(state,{weekDate:action.weekDate});
}

const createTimeSheet=(state,action)=>{
    return update.updateObject(state,{timesheet:action.timesheet});
}

const showTimeSheet=(state,action)=>{
    return update.updateObject(state,{show:action.show,loading:false});
}

const showTimeSheetLoading=(state,action)=>{
    return update.updateObject(state,{loading:true});
}

const editTimeSheet=(state,action)=>{
    return update.updateObject(state,{show:action.editedTimesheet})
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TIMESHEET_START:return(createTimeSheetStart(state,action));
        case actionTypes.WEEK_DATE_GET:return (getWeekDate(state,action));
        case actionTypes.TIMESHEET_CREATE:return(createTimeSheet(state,action));
        case actionTypes.TIMESHEET_SHOW:return(showTimeSheet(state,action));
        case actionTypes.TIMESHEET_SHOW_LOADING:return(showTimeSheetLoading(state,action));
        case actionTypes.EDIT_TIMESHEET:return(editTimeSheet(state,action))
        default:
            return state;
    }
};

export default reducer;