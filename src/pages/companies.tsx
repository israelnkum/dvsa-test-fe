import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { getAllCompanies } from "../state/companies/companyActions.ts";
import { unwrapResult } from "@reduxjs/toolkit";
import TlaBaseTable from "../components/tla-base-table.tsx";
import Column from "antd/es/table/Column";
import { Company } from "../types/company.ts";
import { Button, Space, Spin } from "antd";

export default function Companies() {
    const dispatch = useAppDispatch();
    const { companies, filter } = useAppSelector((state) => state.companySlice);
    const { data, meta } = companies;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(getAllCompanies(new URLSearchParams(filter)))
            .then(unwrapResult)
            .then(() =>  setLoading(false))
            .catch(() => {
              setLoading(false)
            })
    }, []);
    return (
        <div>
            <Spin spinning={loading}>
                <TlaBaseTable numberColumn filterObj={filter} header data={data} meta={meta} callbackFunction={getAllCompanies}>
                    <Column title="Name" render={(record: Company) => (
                        <Space direction={"vertical"}>
                            {record.name}
                            <Button size={"middle"} type={"primary"}>Vehicles</Button>
                        </Space>
                    )} />
                    <Column title="Address" dataIndex={"address"} />
                    <Column title="Contact Details" render={(record: Company) =>  (
                        <Space align={"center"} className={"flex justify-between"}>
                            <Space direction={"vertical"}>
                                {record.contactDetails.contact_person}
                                {record.contactDetails.phone}
                            </Space>
                            <Space direction={"vertical"} className={"text-right"}>
                                {record.contactDetails.email}
                                {record.contactDetails.website}
                            </Space>
                        </Space>
                    )} />
                </TlaBaseTable>
            </Spin>
        </div>
    );
}