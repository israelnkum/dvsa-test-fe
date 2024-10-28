import Widget from "./widget.tsx";
import { ContainerOutlined, TruckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { getAnalytics } from "../../state/dashboard/dashboardActions.ts";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Spin } from "antd";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();

    const {analytics} = useAppSelector(state => state.dashboardSlice)

    useEffect(() => {
        dispatch(getAnalytics())
            .then(unwrapResult)
            .then(() =>  setLoading(false))
            .catch(() => {
                setLoading(false)
            })
    }, []);

    return (
        <Spin spinning={loading}>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-5"}>
                <Widget title={"Companies"} value={analytics?.companies ?? 0} icon={<ContainerOutlined className={"text-4xl"} />}/>
                <Widget title={"Vehicles"} value={analytics?.vehicles ?? 0} icon={<TruckOutlined className={"text-4xl"} />}/>
            </div>
        </Spin>
    );
}