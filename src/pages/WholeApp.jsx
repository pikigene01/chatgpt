import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main';

export default function WholeApp({appToView}) {

  return (
    <div>
            <>
            <Header appToView={appToView} />
            <Main appToView={appToView} />
            <Footer/>
            </>
    </div>
  )
}
