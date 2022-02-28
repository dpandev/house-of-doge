import React, { Fragment } from 'react'
import Navbar from '../components/default/Navbar/Navbar'
import Footer from '../components/default/Footer/Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = ({ loggedIn }) => {
  return (
    <Fragment>
      <Navbar loggedIn={loggedIn} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  )
}

export default DefaultLayout