const Input = ({
  name,
  id,
  label,
  isRequired,
  placeholder,
  handleChange,
  defaultValue,
  value,
}) => {
  return (
    <div className="input">
      <>
        {label ? (
          <label
            className={`input_label ${isRequired ? "required" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
        ) : null}
        <div className="input_inputContainer">
          <input
            className="input_input"
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            defaultValue={defaultValue}
            value={value}
          ></input>
        </div>
      </>
    </div>
  );
};

export default Input;
