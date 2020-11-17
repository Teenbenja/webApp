import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Header.less'
import { Menu } from 'antd';
import { AppstoreOutlined, AccountBookOutlined } from '@ant-design/icons';
import logo from '../assets/icons/logo.png'

const HomeHeader = () => {
  const pathKeyMap = {
    '/test': 'frontYard',
    '/text': 'expense'
  }
  const [key, setKey] = useState(pathKeyMap[window.location.pathname])

  const handleClick = e => {
    setKey(e.key)
  }

  return (
    <div className="header">
      <Link to='/'>
        <img onClick={handleClick} className="logo" src={logo} alt="logo" />
      </Link>
      <Menu 
        className="headerMenu"
        onClick={handleClick} 
        selectedKeys={[key]} 
        mode="horizontal">
        <Menu.Item key="frontYard" className="menuItem" icon={<AppstoreOutlined />}>
          <Link to='/test'>Front Yard</Link>
        </Menu.Item>
        <Menu.Item key="expense" className="menuItem" icon={<AccountBookOutlined />}>
          <Link to='/text'>Study</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default HomeHeader