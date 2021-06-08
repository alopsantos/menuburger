import React from 'react'

import Burger from './Burger'
import { Nav } from './styles'
import Logo from '../../../assets/logo.svg'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="#">
          <Logo />
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
