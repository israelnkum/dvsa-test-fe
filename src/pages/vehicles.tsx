import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { getAllVehicles } from "../state/vehicles/vehicleActions.ts";
import { unwrapResult } from "@reduxjs/toolkit";
import TlaBaseTable from "../components/tla-base-table.tsx";
import Column from "antd/es/table/Column";
import { Spin } from "antd";
import CompanyTypeFilter from "./filter/company-type-filter.tsx";
import { updateVehicleFilter } from "../state/vehicles/vehicleSlice.ts";

export default function Vehicles() {
    const dispatch = useAppDispatch();
    const { vehicles, filter } = useAppSelector((state) => state.vehicleSlice);
    const { data, meta } = vehicles;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(getAllVehicles(new URLSearchParams(filter)))
            .then(unwrapResult)
            .then(() =>  setLoading(false))
            .catch(() => {
                setLoading(false)
            })
    }, [filter]);
    return (
        <div>
            <Spin spinning={loading}>
                <CompanyTypeFilter filter={filter} callback={updateVehicleFilter} />
                <TlaBaseTable numberColumn filterObj={filter} header data={data} meta={meta} callbackFunction={getAllVehicles}>
                    <Column title="Company" dataIndex={"company"} />
                    <Column title="Make" dataIndex={"make"} />
                    <Column title="Model" dataIndex={"model"} />
                    <Column title="Registration Number" dataIndex={"registration_number"} />
                    {/*<Column
                        title={"Action"}
                        render={(record) => (
                            <div className={"flex items-center gap-2"}>
                                <TlaDelete
                                    title={"Vehicle"}
                                    callBack={deleteVehicle}
                                    column={record.id}
                                />
                                <TlaEdit
                                    data={record}
                                    // icon={<FiEdit2 className={"icon"} />}
                                    to={"form"}
                                />
                            </div>
                        )}
                    />*/}
                </TlaBaseTable>
            </Spin>
        </div>
    );
}