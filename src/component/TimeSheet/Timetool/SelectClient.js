import React from 'react';

import { Select } from 'antd';

const { Option } = Select;


const SelectClient = (props) => {
    let selectClient = (
        <div style={{width:"20%"}}>
            <Select placeholder={props.title} style={{ width: 120, fontWeight: props.fontWeight }} onChange={props.handleClientChange}>

            </Select>
        </div>
    );
    if (props.start) {
        selectClient = (
            <div style={{width:"20%"}}>
                <Select value={props.project} placeholder={props.title} style={{ width: 120, fontWeight: props.fontWeight }} onChange={props.handleClientChange}>
                    {props.provinceData.map(province => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>
            </div>
        );
    }

    return (
        <React.Fragment>
            {selectClient}
        </React.Fragment>

    );
};

export default SelectClient;