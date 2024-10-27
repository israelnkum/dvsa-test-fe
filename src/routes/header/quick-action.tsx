import React from 'react';
import {Button, MenuProps} from 'antd';
import { Dropdown } from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: "New Company",
    },
    {
        key: '4',
        label: 'New Vehicle',
    },
];

const QuickAction: React.FC = () => (
    <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
            <Button icon={<PlusOutlined />} size={"large"}>New</Button>
        </a>
    </Dropdown>
);

export default QuickAction;