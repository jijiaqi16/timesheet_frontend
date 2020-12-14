import React, { useState } from 'react';

import classes from './Timetoolbar.module.css';

import 'antd/dist/antd.css';
import { DatePicker, TimePicker, Button, Input } from 'antd';

const { RangePicker } = TimePicker;

function Timetoolbar(props) {

    const [date, setDate] = useState("null");
    const [time, setTime] = useState("null");
    const [des, setDes] = useState("null");

    const onChangeInput = (e) => {
        setDes(e.target.value);
    }

    const onChangeDate = (date, dateString) => {
        // console.log(date, dateString);
        setDate(dateString);
    };

    const onChangeTime = (time, timeString) => {
        // console.log(time, timeString);
        setTime(timeString);
    }

    const handleClickAdd = () => {
        const temp = { des, date, time };
        console.log(temp);
    };

    
    return (
        <React.Fragment>
            <div className={classes.Timetoolbar}>
                <div className={classes.placeholder}>
                    <Input placeholder="Add description" className={classes.Input} onChange={onChangeInput} />
                </div>

                <div className={classes.time}><RangePicker onChange={onChangeTime} size="small" bordered={false} format="h:mm A" /></div>
                <div className={classes.date}><DatePicker onChange={onChangeDate} size="small" bordered={false} /></div>

                <div className={classes.add}><Button onClick={handleClickAdd} type="primary">ADD</Button></div>
            </div>
        </React.Fragment>

    );
};

export default Timetoolbar;