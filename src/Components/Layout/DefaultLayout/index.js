import React from 'react'
import Header from '~/Components/Layout/components/Header'
import Sider from './Sider'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className="container">
            <Sider/>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout