import React from 'react';
import './Button.css';

export default props => {
  //Verifica classes para aplicar css
  let classes = 'button ';
  classes += props.operation ? 'operation ' : ''
  classes += props.double ? 'double ' : ''

  return (
    <button
      onClick={ e => props.click && props.click(e.target.label)}
      className={classes}
    >
      {props.label}
    </button>
  )
}
