import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import {UserOutlined} from "@ant-design/icons";

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

const ProfileDropdown: React.FC = () => (
    <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()} className={"cursor-pointer "}>
            <Space>
                <p>Hi Amos</p>
                <div className={'h-12 w-12 border rounded-full flex items-center justify-center'}>
                    <UserOutlined/>
                </div>
            </Space>
        </a>
    </Dropdown>
);

export default ProfileDropdown;