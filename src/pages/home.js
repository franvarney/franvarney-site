import React, {createClass} from 'react'
import {RouteHandler} from 'react-router'

import GithubActivities from '../components/GithubActivities/Container'
import Header from '../components/header'

let Home = createClass({
  render() {
    return (
      <div className="page-home page">
        <section className="one-fourth-col col">
          <Header />
        </section>
        <section className="three-fourth-col col">
          <GithubActivities />
        </section>
      </div>
    )
  }
})

export default Home
