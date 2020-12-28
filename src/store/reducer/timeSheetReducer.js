import * as actionTypes from '../action/actionTypes';
import * as update from '../../Utility/update'

const initalState = {
    weekDate:[],   
    timesheet:{},
    show:{},
    loading:false 
};

const getWeekDate=(state,action)=>{
    return update.updateObject(state,{weekDate:action.weekDate});
}

const changeTimeSheet=(state,action)=>{
    return update.updateObject(state,{timesheet:action.timesheet});
}

const showTimeSheet=(state,action)=>{
    return update.updateObject(state,{show:action.show,loading:false});
}

const showTimeSheetLoading=(state,action)=>{
    return update.updateObject(state,{loading:true});
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.WEEK_DATE_GET:return (getWeekDate(state,action));
        case actionTypes.TIMESHEET_CHANGE:return(changeTimeSheet(state,action));
        case actionTypes.TIMESHEET_SHOW:return(showTimeSheet(state,action));
        case actionTypes.TIMESHEET_SHOW_LOADING:return(showTimeSheetLoading(state,action));
        default:
            return state;
    }
};

export default reducer;