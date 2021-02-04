import React from 'react'
import './assets/styles/App.less'
import HomeHeader from './component/organisms/Header'
import ContentContainer from './container/ContentContainer'
import "./assets/styles/main.less"


const App = () => (
  <div className="main">
    <HomeHeader />
    <ContentContainer />
  </div>
)

export default App;
