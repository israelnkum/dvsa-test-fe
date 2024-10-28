import React from 'react';
import { Space } from 'antd';
import { useAppSelector } from "../../hooks";

const ProfileDropdown: React.FC = () => {
    const email = useAppSelector((state) => state.authSlice.email);

    return (
        <Space>
            <p>Hi {email?.split("@")[0]}</p>
        </Space>
    )
};

export default ProfileDropdown;