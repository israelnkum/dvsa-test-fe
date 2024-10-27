import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useAppSelector } from "../../hooks";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

const ProfileDropdown: React.FC = () => {
    const email = useAppSelector((state) => state.authSlice.email);

    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()} className={"cursor-pointer "}>
                <Space>
                    <p>Hi {email?.split("@")[0]}</p>
                </Space>
            </a>
        </Dropdown>
    )
};

export default ProfileDropdown;