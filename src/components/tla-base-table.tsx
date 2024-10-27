import { type ReactNode, useState } from "react";
import { Table } from "antd";
import type { AsyncThunk } from "@reduxjs/toolkit";
import { unwrapResult } from "@reduxjs/toolkit";
import TlaPagination from "./tla-pagination.tsx";
import { TableMeta } from "../types/common.ts";
import { useAppDispatch } from "../hooks";
import { TlaError } from "../utils/messages.ts";

interface Props {
    data: any[];
    setSelectedRows?: any;
    selectedRows?: any;
    meta: TableMeta;
    children: ReactNode;
    filterObj?: Record<any, any>;
    callbackFunction: AsyncThunk<any, any, any> | undefined;
    modal?: boolean;
    useId?: boolean;
    url?: string;
    numberColumn?: boolean;
    numberColumnTitle?: string;
    hasSelection?: boolean;
    header?: boolean;
    rowClick?: (value: any) => void;
}

function TlaBaseTable({
                          meta,
                          data,
                          callbackFunction,
                          children,
                          numberColumn,
                          numberColumnTitle = "#",
                          hasSelection,
                          filterObj,
                          selectedRows,
                          setSelectedRows,
                          header,
                          rowClick,
                      }: Props) {
    const dispatch = useAppDispatch();
    const [selectedRowKeys, setSelectedRowKeys] = useState([selectedRows]);
    const onSelectChange = (newSelectedRowKeys: any) => {
        setSelectedRows(newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const [loading, setLoading] = useState(false);

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <TlaPagination
            meta={meta}
            loadData={(pageNumber, perPage) => {
                setLoading(true)
                const urlParams = new URLSearchParams(filterObj);
                urlParams.delete("page");
                urlParams.append("page", String(pageNumber));
                urlParams.append("per_page", String(perPage));
                if (callbackFunction) {
                    dispatch(callbackFunction(urlParams))
                        .then(unwrapResult)
                        .then(() => setLoading(false))
                        .catch(() => {
                            setLoading(false)
                            TlaError("Could not fetch data")
                        });
                }
            }}
            showHeader={header}
        >
            <Table loading={loading}
                   rowClassName={rowClick ? "cursor-pointer" : ""}
                   rootClassName={"w-full mx-auto"}
                   rowSelection={hasSelection ? rowSelection : undefined}
                   pagination={false}
                   dataSource={data}
                   scroll={{x: 500}}
                   rowKey={"id"}
            >
                {numberColumn && (
                    <Table.Column
                        fixed
                        width={70}
                        title={numberColumnTitle}
                        render={(_value, _record, index) => {
                            let number = index + meta?.from;
                            return <>{`${number++}.`}</>;
                        }}
                    />
                )}

                {children}
            </Table>
        </TlaPagination>
    );
}

export default TlaBaseTable;
