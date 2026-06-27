import React from 'react'
import { Link, useLocation, Route } from "react-router-dom"
import SinglePage from './SinglePage'

const About = () => {
  const { pathname } = useLocation()
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${pathname}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${pathname}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${pathname}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  )
}
export default About

