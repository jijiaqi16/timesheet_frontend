import React, { useState } from 'react';

import classes from './Timetoolbar.module.css';
import SelectClient from './SelectClient';

import 'antd/dist/antd.css';
import { DatePicker, TimePicker, Button, Input, message} from 'antd';

const { RangePicker } = TimePicker;
const { TextArea } = Input;
// select data(will delete)
const provinceData = ['Client1', 'Client2'];
const cityData = {
    Client1: ['Project 1-1', 'Project 1-2', 'Project 1-3'],
    Client2: ['Project 2-1', 'Project 2-2', 'Project 2-3'],
};

function Timetoolbar(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [des, setDes] = useState("");
    const [client, setClient] = useState("");
    const [project, setProject] = useState("");
    const [projectStart,setProjectStart]=useState(false);

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

    const handleClientChange = value => {
        setClient(value);
        if(!projectStart){
            setProjectStart(true);
        }
        setProject(cityData[value][0]);
    };

    const onProjectChange = value => {
        setProject(value);
    };


    const error = () => {
        message.error('The information is incomplete, please fill in all the information.');
    };

    const handleClickAdd = () => {
        if (des === "" || date === "" || time[0] === "" || time[1] === "" || client==="" || project==="") {
            error();
        } else {
            const temp = { des, date, time,client,project };
            console.log(temp);
        }
    };


    return (
        <React.Fragment>
            <div className={classes.Timetoolbar}>
                <div className={classes.placeholder}>
                    <TextArea placeholder="Add description" className={classes.Input} onChange={onChangeInput} autoSize={{ minRows: 1, maxRows: 3 }} />
                    <SelectClient provinceData={provinceData} fontWeight={"bold"} title="Client" handleClientChange={handleClientChange} start="true"/>
                    <SelectClient provinceData={cityData[client]} title="Project" handleClientChange={onProjectChange} start={projectStart} project={project}/>
                </div>

                <div className={classes.time}><RangePicker onChange={onChangeTime} size="small" bordered={false} format="h:mm A" /></div>
                <div className={classes.date}><DatePicker onChange={onChangeDate} size="small" bordered={false} /></div>

                <div className={classes.add}><Button onClick={handleClickAdd} type="primary" size="large">ADD</Button></div>
            </div>
        </React.Fragment>

    );
};

export default Timetoolbar;