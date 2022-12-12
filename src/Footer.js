import React from 'react'

const Footer = () => {
    const today = new Date(); 
    // we get the current data or time using this new Date() object
    // copyright symbol -- &copy;
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer