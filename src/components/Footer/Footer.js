import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <h3> ® Copyright noam meir {new Date().getFullYear()}</h3>
        <div>All rights reserved copyright {new Date().getFullYear()}  ® </div>
      </footer>
  )
}

export default Footer