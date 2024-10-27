import { Modal, Spin } from "antd";
import { useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";

interface Props {
  title?: string;
  fullText?: string;
  children?: any;
  callBack?: () => void;
  showIcon?: boolean;
  btnType?: string;
  okText?: string;
  cancelText?: string;
  okClass?: string;
  danger?: boolean;
  close?: boolean;
  loading?: boolean;
  border?: string;
  cancelClass?: string;
}

const TlaConfirm = (props: Props) => {
  const {
    title = "",
    callBack,
    children,
    showIcon = true,
    loading = false,
    okText = "Delete",
    fullText = "Do you want to delete",
    cancelText = "No, keep it",
    close = false,
    danger = true,
    okClass = "confirm-delete-btn",
    cancelClass = "btn-primary",
    border = "border",
  } = props;

  useEffect(() => {
    if (close) {
      Modal.destroyAll();
    }
  }, [close]);
  const confirm = () => {
    Modal.confirm({
      title,
      icon: <></>,
      content: fullText,
      okText,
      cancelText,
      className: "tla-delete-confirm",
      okButtonProps: {
        className: `btn ${okClass}`,
        danger,
        size: "large",
        block: true,
      },
      cancelButtonProps: {
        className: `btn ${cancelClass}`,
        size: "large",
        block: true,
      },
      onOk: callBack,
    });
  };
  return (
      <Spin spinning={loading}>
        <div
            className={`hover:!text-red-600 cursor-pointer ${border} p-1.5 rounded-md hover:border-red-600 w-fit flex justify-center items-center gap-x-3`}
            onClick={confirm}
        >
          {showIcon && <DeleteOutlined title={"Delete"}/>}
          {children}
        </div>
      </Spin>
  );
};

export default TlaConfirm;
