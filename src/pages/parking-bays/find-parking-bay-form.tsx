import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { Button, Form, Input, InputNumber, Spin } from "antd";
import { unwrapResult } from "@reduxjs/toolkit";
import { TlaError } from "../../utils/messages.ts";
import { findParkingPays } from "../../state/vehicles/vehicleActions.ts";

interface Props {
    callback: (bays: any) => void
}
export default function FindParkingBayForm({ callback }: Props) {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const onFinish = (values: any) => {
        setLoading(true);
        dispatch(findParkingPays({...values, bayLengths: values.bayLengths.split(",")}))
            .then(unwrapResult)
            .then((res) => {
                callback(res)
                setLoading(false);
            })
            .catch((obj) => {
                setLoading(false);
                TlaError(obj.message ?? obj?.errors ?? obj);
            });
    };

    return (
        <Spin spinning={loading}>
            <Form
                requiredMark={false}
                // className={"grid grid-cols-4 items-baseline"}
                size={"large"}
                className={"w-[320px]"}
                layout={"vertical"}
                name="find-bay-form"
                onFinish={onFinish}
            >
                <Form.Item
                    className={"mb-2"}
                    name="bayLengths"
                    label={"Bay sizes"}
                    rules={[
                        {required: true, message: "Bay sizes required"},
                    ]}
                >
                    <Input.TextArea
                        size={"large"}
                        placeholder={"Provide bay sizes separated with commas"}
                    />
                </Form.Item>
                <Form.Item
                    label={"Vehicle Length"}
                    className={"mb-2"}
                    name="vehicleLength"
                    rules={[
                        {required: true, message: "Vehicle Length is required"},
                    ]}
                >
                    <InputNumber min={4}
                        size={"large"}
                                 className={"w-full"}
                        placeholder={"Vehicle Length"}
                                 suffix={"In Meters"}
                    />
                </Form.Item>
                <Button
                    loading={loading}
                    disabled={loading}
                    htmlType="submit"
                    block type={"primary"}
                    size={"large"}
                >
                    Find
                </Button>
            </Form>
        </Spin>
    );
}