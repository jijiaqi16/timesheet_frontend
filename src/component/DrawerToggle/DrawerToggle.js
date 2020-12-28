import React, { useState } from 'react';

import classes from './DrawerToggle.module.css'
import DrawerButton from './DrawerButton/DrawerButton'

import { Drawer,Button} from 'antd';
import { MenuOutlined,PlusCircleOutlined,UserAddOutlined,CalendarOutlined} from '@ant-design/icons';


const Drawtroggle = (props) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <React.Fragment>
            <Button type="link" onClick={showDrawer} icon={<MenuOutlined />} style={{ display: props.display }} />
            <Drawer
                width="264"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                className={classes.drawer}
            >
             <DrawerButton icon={<PlusCircleOutlined style={{fontSize:'18px'}}/>} title={"ADD TIMESHEET"} to={"/employee"}/>
             <DrawerButton icon={<UserAddOutlined style={{fontSize:'23px'}}/>} title={"ADD CLIENT OR PROJECT"} to={"/"}/>
             <DrawerButton icon={<CalendarOutlined style={{fontSize:'23px'}}/>} title={"CALENDAR"} to={"/calendar"}/>

            </Drawer>
        </React.Fragment>
    );
};

export default Drawtroggle;