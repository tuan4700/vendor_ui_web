import React from "react";
import Select from "react-select";

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: "1px solid #848484",
    padding: "3px",
    borderRadius: 0,
  }),
  // /input: (styles) => ({ ...styles }),
  //placeholder: (styles) => ({ ...styles }),
};

const ReactSelect = ({ label, id, isRequired, options, getValue }) => (
  <div className="select">
    {label ? (
      <>
        <label
          className={`select_label ${isRequired ? "required" : ""}`}
          htmlFor={id}
        >
          {label}
        </label>
        <div className="select_selectContainer">
          <Select
            className="select_select"
            styles={colourStyles}
            options={options}
            placeholder="- Select -"
            onChange={getValue}
          />
        </div>
      </>
    ) : null}
  </div>
);

export default ReactSelect;
