import React from 'react'

import Burger from './Burger'
import { Nav } from './styles'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">
        Logo
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
