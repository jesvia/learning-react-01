// to create a functional component type rafce after ctrl + alt + r
// we can uplaod this 'Header' to App.js
import React from 'react'

const Header = () => {
    // const HeaderStyle = {
    //     backgroundColor: 'green',
    //     color: '#fff'
    // }
  return (
    // we can hard code the style within the style only or we can refer to it under a variable
    // <header style = {HeaderStyle}>
    // but not using this, not recommeneded
    <header>
        <h1>Groceries List</h1>
    </header>
  )
}

export default Header