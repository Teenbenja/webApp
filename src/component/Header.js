import React from 'react'
import { Layout, Menu } from 'antd';
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
        return (
					<Layout.Header>
						<div className="logo">T·W LAND</div>
						<Menu 
            onClick={this.handleClick} 
            selectedKeys={[this.state.current]} 
            mode="horizontal" 
            style={{borderBottom: 'none'}}>
            <Menu.Item key="home" icon={<AppstoreOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="expense" icon={<AccountBookOutlined />}>
              Expenses
            </Menu.Item>
          </Menu>
					</Layout.Header>
        )
      }
}

export default HomeHeader