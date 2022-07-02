import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

const style = {
  timeInput: {
    display: "block",
    width: "100%",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#212529",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    appearance: "none",
    borderRadius: "0.25rem",
    transition: "border-color .15s ease-in-out,box-shadow"
  }
}

function FormTimePicker() {
  const [value, onChange] = useState('10:00')

  return (
    <div style={style.timeInput}>
      <TimePicker className="w-100 border-0" onChange={onChange} value={value} />
    </div>
  );
}

export default FormTimePicker