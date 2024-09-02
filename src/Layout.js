import React from 'react'
import BarraRedes from './components/barraRedes/BarraRedes'
import MagicHeader from './components/magicHeader/MagicHeader'

const Layout = ({children}) => {
  return (
    <div>
        <MagicHeader/>
        <BarraRedes/>
        {children}
    </div>
  )
}

export default Layout;