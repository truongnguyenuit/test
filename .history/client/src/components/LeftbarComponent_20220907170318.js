import React from 'react'
import logo from '../logo.jpg'
import { pathName } from '../router/pathName';
import { Menu } from 'antd';
import {
  SettingOutlined,
  ShoppingCartOutlined,
  FilterOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  ProfileOutlined,
  ShopOutlined
} from '@ant-design/icons'


const LeftBarComponent = () => {
  return (
    <div className='bg-blue-100'>
      <div className="bg-red-300 w-[300px] flex items-center justify-start">
        <img className='w-[300px] object-cover' src={logo}></img>
      </div>
      <Menu
        onClick={handleClick}
        style={{ width: 300 }}
        mode="inline"
        theme="light"
      >
        <Menu.Item icon={<HomeOutlined />} key="dashboard">
          <Link to="/user/home">Trang chính</Link>
        </Menu.Item>
        <Menu.Item icon={<FilterOutlined />} key="category">
          <Link to="/user/category">Trang tìm kiếm</Link>
        </Menu.Item>
        <Menu.Item icon={<ShoppingCartOutlined />} key="cart">
          <Link to="/user/cart">Giỏ hàng</Link>
        </Menu.Item>
      </Menu>

    </div>
  )
}

export default LeftBarComponent