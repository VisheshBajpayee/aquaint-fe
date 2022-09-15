import React from 'react'

const Checkbox = ({id, name, label}) => {
  return (
    <div className="form-control flex flex-row gap-5">
        <input type="checkbox" name={name} id={id} className="checkbox" />
        <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox