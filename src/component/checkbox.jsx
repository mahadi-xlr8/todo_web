import React, { Component } from "react";
const CheckBox = (props) => {
  return (
    <div className="checkbox__container">
      <input
        type="checkbox"
        name="checkbox"
        id={String(props.data.id)}
        checked={props.data.checked}
        onChange={() => props.onChange(props.data.id)}
        
      />
      <input
        type='text'
        className={props.data.checked ? "checked" : "unchecked"}
        value={props.data.value}
        style={{width:`${props.data.value.length-props.data.value.length/3}rem`}}
        onChange={(e)=>props.onEdit(props.data.id,e.target.value)}
      />


    </div>
  );
};

export default CheckBox;
