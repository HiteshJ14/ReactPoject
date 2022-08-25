import React from 'react'
import './Navbar.css';
import StyledButton from './Home.styled'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <StyledButton>Home</StyledButton>
        <StyledButton>About Us</StyledButton>
    </div>
  )
}
