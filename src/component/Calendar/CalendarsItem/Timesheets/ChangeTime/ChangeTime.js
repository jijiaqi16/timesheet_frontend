import React from 'react';

import { Card, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import InputTime from './InputTime/InputTime';


const ChangeTime = (props) => {



    const handleClickClose = () => {
        props.handleCloseButton(props.title);
    }


    let week = {
        Su: 'Su',
        Mo: 'Mo',
        Tu: 'Tu',
        We: 'We',
        Th: 'Th',
        Fr: 'Fr',
        Sa: 'Sa'
    };


    return (
        <React.Fragment>
            <Card type="inner" title={props.title + "  (DAY:HOURS)"} bodyStyle={{ fontWeight: "bold" }}>
                <div >
                    {Object.keys(week).map(key => (
                        <InputTime
                            key={key}
                            title={props.title}
                            week={key}
                        />
                    ))}
                    <Button danger type="danger" icon={<CloseOutlined />} onClick={handleClickClose}></Button>

                </div>
            </Card>
        </React.Fragment>

    );
};

export default ChangeTime;


