import { useAppDispatch } from "../../hooks";
import { Select } from "antd";
import { CompanyTypes } from "../../utils";

interface ICompanyFilter {
    filter: Record<string, any>
    callback: any;
}
export default function CompanyTypeFilter({ filter, callback }: ICompanyFilter) {
    const dispatch = useAppDispatch();

    const handleFilter = (value: string) => {
        dispatch(callback({...filter, type: value}));
    }

    return (
        <div className={"flex items-center gap-2"}>
            <p>Type:</p>
            <Select value={filter?.type ?? "All"} onChange={handleFilter} className={"w-[320px]"} size={"large"}>
                <Select.Option value="">All</Select.Option>
                {Object.keys(CompanyTypes).map((type) => (
                    <Select.Option value={type} key={type}>
                        {CompanyTypes[type as keyof typeof CompanyTypes]}
                    </Select.Option>
                ))}
            </Select>
        </div>
    );
}