import React, { useState } from 'react'
import RightNav from './RightNav'

import { Burgerdiv, Overlay } from './styles'

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Burgerdiv open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burgerdiv>
      <RightNav open={open} />
      <Overlay open={open} onClick={() => setOpen(!open)}/>
    </>
  )
}

export default Burger
