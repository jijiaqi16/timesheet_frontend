import React from 'react';
import { connect } from 'react-redux';

import { Popover, Button } from 'antd';

import classes from './Time.module.css';
import InputProjectTime from './InputProjectTime';




const Time = (props) => {
    //set project infomation
    let client;
    let desc;
    let supervisor;
    Object.keys(props.projectInfo).map((item) => {
        if (props.projectInfo[item]["name"] === props.title) {
            client = props.projectInfo[item]["client"];
            desc = props.projectInfo[item]["description"];
            supervisor = props.projectInfo[item]["supervisor"];
        }
        return null;
    });
    //project title show
    let content = (
        <div className={classes.content}>
            <p>{"client : " + client}</p>
            <p>{"description : " + desc}</p>
            <p>{"supervisor : " + supervisor}</p>
        </div>
    );
    //project is total or project
    let project = (
        <div className={classes.projectTitle}>
            <Popover content={content} title={props.title} trigger="click" className={classes.popover}>
                <Button type="text" className={classes.projectShow}>{props.title}</Button>
            </Popover>
        </div>);

    //change time

    let timeNumber = (
        <React.Fragment>
            <InputProjectTime show={props.show} title={"su"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"mo"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"tu"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"we"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"th"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"fr"} projectTitle={props.title}/>
            <InputProjectTime show={props.show} title={"sa"} projectTitle={props.title}/>
        </React.Fragment>
    )
    if (!props.isProject) {
        project = (<div className={classes.total}>{props.title}</div>);
        timeNumber = (
            <React.Fragment>
                <div className={classes.totalNumber}>{props.show["su"]}</div>
                <div className={classes.totalNumber}>{props.show["mo"]}</div>
                <div className={classes.totalNumber}>{props.show["tu"]}</div>
                <div className={classes.totalNumber}>{props.show["we"]}</div>
                <div className={classes.totalNumber}>{props.show["th"]}</div>
                <div className={classes.totalNumber}>{props.show["fr"]}</div>
                <div className={classes.totalNumber}>{props.show["sa"]}</div>
            </React.Fragment>
        );
    }



    return (
        <React.Fragment>
            <div className={classes.background}>
                {project}
                {timeNumber}
            </div>
        </React.Fragment>

    );
};

const mapStateToProps = state => {
    return {
        showTimesheetTime: state.timesheet.show,
    };
}



export default connect(mapStateToProps, null)(Time);