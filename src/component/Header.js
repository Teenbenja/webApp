import React from 'react'
import '../assets/styles/Header.less'
import { Menu } from 'antd';
import { AppstoreOutlined, AccountBookOutlined } from '@ant-design/icons';


class HomeHeader extends React.Component {
    state = {
        current: 'home',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        const logo = require('../assets/icons/logo.png')
        return (
					<div className="header">
						<img className="logo" src={logo} alt="logo" />
						<Menu 
              className="headerMenu"
              onClick={this.handleClick} 
              selectedKeys={[this.state.current]} 
              mode="horizontal">
              <Menu.Item key="frondYard" className="menuItem" icon={<AppstoreOutlined />}>
                Front Yard
              </Menu.Item>
              <Menu.Item key="expense" className="menuItem" icon={<AccountBookOutlined />}>
                Study
              </Menu.Item>
            </Menu>
					</div>
        )
      }
}

export default HomeHeader