import React from 'react'
import HomeHeader from '../component/Header'
import { Divider } from 'antd';
import "../assets/styles/mainLayout.less"


class MainLayout extends React.Component {
    
    
      render() {
        return (
          <div>
            <HomeHeader />
            <Divider style={{marginTop: '-1px'}}/>
          </div>
        );
      }
}

export default MainLayout