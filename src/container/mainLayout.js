import React from 'react'
import HomeHeader from '../component/Header'
import { Divider } from 'antd'
import ContentContainer from './contentContainer'
import "../assets/styles/mainLayout.less"


class MainLayout extends React.Component {
    
    
      render() {
        return (
          <div className="main">
            <HomeHeader />
            <Divider style={{marginTop: '-1px'}}/>
            <ContentContainer />
          </div>
        );
      }
}

export default MainLayout