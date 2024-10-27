import React from "react";

interface IWidget {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
}
export default function Widget({ title, value, icon }: IWidget) {
    return (
        <div className={"rounded-lg p-5 flex justify-between items-center bg-white"}>
            <div>
                <p className={"text-lg"}>{title}</p>
                <h3 className={"text-3xl font-bold"}>{value}</h3>
            </div>
            {icon}
        </div>
    );
}