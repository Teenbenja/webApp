import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import FrontYard from './FrontYard'
import Book from './Book'
import "../assets/styles/main.less"

const ContentContainer = () => (
  <div className="contentContainer">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/frontYard' component={FrontYard} />
      <Route path='/book' component={Book} />
    </Switch>
  </div>
)

export default ContentContainer