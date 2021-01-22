import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import FrontYard from './frontYard'
import TextContainer from './textContainer'
import "../assets/styles/main.less"

const ContentContainer = () => (
  <div className="contentContainer">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/frontYard' component={FrontYard} />
      <Route path='/text' component={TextContainer} />
    </Switch>
  </div>
)

export default ContentContainer