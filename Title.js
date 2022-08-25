import react from 'react';
import StyledButton from './Order.styled';
import Button from './SeeMenu.styled';
import './Title.css';
  
function Title() {
  return (
      <div className="BackgroundImage">
        <br></br><br></br><h1>Food Ordering Made<br></br>Easy</h1>
        <StyledButton>Order Now</StyledButton>
        <Button>See Menu</Button>
      </div>
  );
}

export default Title