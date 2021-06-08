import React from 'react'
import Navbar from './components/Navmenu/Navbar'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          paddingTop: '80px',
          paddingLeft: '30px'
        }}
      >
        Content
      </div>
    </>
  )
}

export default Home
