import React from 'react'

const Footer = () => {
  const today = new Date();
  return(
    <footer className='Footer'>
      <p>Copyright &copy; w1z4RdWP {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer