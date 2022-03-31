import React from 'react';
import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function SideMenu(props) {
  const { routesData } = props;
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      {routesData.map((item) => (
        <Menu.Item key={item.path} icon={<UserOutlined />}>
          <NavLink
            key={item.path}
            // className="list-group-item"
            // activeClassName="navAction"
            to={item.path}
          >
            {item.title}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
}
