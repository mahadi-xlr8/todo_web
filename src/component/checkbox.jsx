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
      <label
        htmlFor={String(props.data.id)}
        className={props.data.checked ? "checked" : "unchecked"}
      >
        {props.data.value}
      </label>
    </div>
  );
};

export default CheckBox;
