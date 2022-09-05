import React from "react";
import './styles.scss';

const Input = (props) => {
  return (
    <input
      type="text"
      className="input-component"
      ref={props.innerRef}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default Input