import React, { useState } from 'react';

import classes from './DrawerToggle.module.css'
import DrawerButton from './DrawerButton/DrawerButton'

import { Drawer,Button} from 'antd';
import { MenuOutlined,PlusCircleOutlined} from '@ant-design/icons';


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
                
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                className={classes.drawer}
            >
             <DrawerButton icon={<PlusCircleOutlined/>} title={"ADD TIMESHEET"} to={"/employee"}/>


            </Drawer>
        </React.Fragment>
    );
};

export default Drawtroggle;