import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "../../state/auth/authActions.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { unwrapResult } from "@reduxjs/toolkit";
import { TlaError } from "../../utils/messages.ts";
import MenuLinks from "../../utils/menu-links.ts";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        dispatch(login(values))
            .then(unwrapResult)
            .then(() => {
                navigate('/' + MenuLinks.dashboard)
            })
            .catch((obj) => {
                setLoading(false);
                TlaError(obj.message ?? obj?.errors ?? obj);
            });
    };

    return (
        <div className={"h-screen flex items-center justify-center bg-gray-100"}>
            <div className={"shadow-md p-5 bg-white"}>
                <div className={"text-center mb-5"}>
                    <h1 className={"text-[30px] font-semibold text-blue-dark mb-5"}>
                        DVSA API
                    </h1>
                    <p className={"text-gray-t300 text-sm -mt-2"}>
                        Please enter your details.
                    </p>
                </div>
                <Form
                    requiredMark={false}
                    className={"w-[320px] mx-auto"}
                    size={"large"}
                    layout="vertical"
                    name="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        className={"mb-2"}
                        label="Email address"
                        name="email"
                        rules={[
                            {required: true, message: "Enter your email!"},
                            {type: "email", message: "Not a valid email!"},
                        ]}
                    >
                        <Input
                            size={"large"}
                            placeholder={"mail@techlineafrica.com"}
                        />
                    </Form.Item>

                    <Form.Item
                        className={"mt-6 mb-2"}
                        label="Password"
                        name="password"
                        rules={[{required: true, message: "Enter your password!"}]}
                    >
                        <Input.Password
                            placeholder={"Password"}
                        />
                    </Form.Item>
                    <div className="flex items-center justify-between">
                        <Form.Item
                            name="remember"
                            className="mb-0"
                            valuePropName="checked"
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </div>

                    <Button
                        loading={loading}
                        disabled={loading}
                        htmlType="submit"
                        block type={"primary"}
                        size={"large"}
                    >
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
