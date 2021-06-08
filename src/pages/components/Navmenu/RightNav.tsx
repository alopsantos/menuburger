import React from 'react'
import { FiFacebook, FiInstagram, FiMapPin, FiPhoneCall } from 'react-icons/fi'

import { Ul } from './styles'

const RightNav: React.FC = ({ open }: any) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">
          <FiInstagram size="24" />
          Instagram
        </a>
      </li>
      <li>
        <a href="#">
          <FiFacebook size="24" />
          Facebook
        </a>
      </li>
      <li>
        <a href="#">
          <FiPhoneCall size="24" />
          Contato
        </a>
      </li>
      <li>
        <a href="#">
          <FiMapPin size="24" />
          Localização
        </a>
      </li>
    </Ul>
  )
}

export default RightNav
