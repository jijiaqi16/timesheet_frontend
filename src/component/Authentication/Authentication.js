import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// import axios from '../../axios/axios-local'

import * as authActions from '../../store/action/auth';
import classes from './Authentication.module.css'

import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



const NormalLoginForm = (props) => {

    const OnFinish = (values) => {
        props.onAuth(values["username"], values["password"]);

    };
    //judge auth state
    let authRedirect = null;
    let failedLogin = null;
    let iconName = null;
    //judge user is valid and info is loaded and localstorage auth and user
    if (props.auth && Object.keys(props.user).length !== 0) {
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('username', props.user.username);
        localStorage.setItem('useremail', props.user.email);
        iconName = (props.user.lastName.substr(0, 1) + props.user.firstName.substr(0, 1)).toUpperCase();
        localStorage.setItem('iconName', iconName);
        authRedirect = <Redirect to="/employee" />
    }

    if (!props.auth && props.error !== "") {
        failedLogin = <p className={classes.failedLogin}>{props.error}</p>
    }

    //form
    let form = (

        <Form className={classes.loginform} onFinish={OnFinish} name="normalLogin">

            <h2 className={classes.title}>Log In</h2>

            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}>
                <Input className={classes.info} prefix={<UserOutlined className="formicon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}>
                <Input className={classes.info} prefix={<LockOutlined className="formicon" />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className={classes.info}>
                    Log in
                </Button>
            </Form.Item>
            {failedLogin}
        </Form>)




    return (
        <React.Fragment>
            <div className={classes.div}>
                {authRedirect}
                {form}
            </div>
        </React.Fragment>

    );
};

const mapStateToProps = state => {

    return {
        auth: state.auth.isAuthenticated,
        error: state.auth.loginError,
        user: state.user.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (name, pwd) => dispatch(authActions.auth(name, pwd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);