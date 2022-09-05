import React from "react";
import './styles.scss';

const Button = (props) => {
  return (
    <button type={props.type} className='button-component'>
      {props.title}
    </button>
  )
}

export default Button