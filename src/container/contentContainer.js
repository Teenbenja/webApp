import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import TestContainer from './testContainer'
import TextContainer from './textContainer'
import "../assets/styles/main.less"

const ContentContainer = () => (
  <div className="contentContainer">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={TestContainer} />
      <Route path='/text' component={TextContainer} />
    </Switch>
  </div>
)

export default ContentContainer