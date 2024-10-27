import { EditOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
  text?: React.ReactNode;
  icon?: React.ReactNode;
  data: NonNullable<unknown>;
  border?: string;
  modal?: boolean;
}

function TlaEdit({
  data,
  text = "",
  icon = <EditOutlined />,
  border = "border",
  modal,
  ...props
}: Props) {
  const location = useLocation();
  return (
    <Link state={{ background: modal ?? location, data }} {...props}>
      <div
        className={`flex items-center hover:bg-white gap-x-3 hover:!text-blue-500 cursor-pointer ${border} p-1.5 rounded-md hover:border-green-900`}
      >
        {icon}
        {text}
      </div>
    </Link>
  );
}

export default TlaEdit;
