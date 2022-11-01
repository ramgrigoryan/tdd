import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('red button with initial "Turn to green"',()=>{
  render(<App/>)
  
  // * find an element with the role of button and with text "Turn to green" 

  const colorButton = screen.getByRole('button',{name:/Turn to green/i})
  
  //* expect colorButton to have a red background color

  expect(colorButton).toHaveStyle({backgroundColor:"red"})

  fireEvent.click(colorButton)

  //* expect colorButton to have green bg color and inner text with "Turn to red"

  expect(colorButton).toHaveStyle({backgroundColor:"green"});

  expect(colorButton).toHaveTextContent('Turn to red');
})
