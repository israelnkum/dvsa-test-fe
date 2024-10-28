import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { getAllCompanies } from "../state/companies/companyActions.ts";
import TlaBaseTable from "../components/tla-base-table.tsx";
import Column from "antd/es/table/Column";
import { Company } from "../types/company.ts";
import { Space, Spin } from "antd";
import { updateCompanyFilter } from "../state/companies/companySlice.ts";
import CompanyTypeFilter from "./filter/company-type-filter.tsx";

export default function Companies() {
    const dispatch = useAppDispatch();
    const { companies, filter } = useAppSelector((state) => state.companySlice);
    const { data, meta } = companies;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(getAllCompanies(new URLSearchParams(filter)))
            .then(() =>  setLoading(false))
            .catch(() => {
              setLoading(false)
            })
    }, [filter]);

    return (
        <div>
            <Spin spinning={loading}>
                <CompanyTypeFilter filter={filter} callback={updateCompanyFilter} />
                <TlaBaseTable numberColumn filterObj={filter} header data={data} meta={meta} callbackFunction={getAllCompanies}>
                    <Column title="Name" dataIndex={"name"}/>
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