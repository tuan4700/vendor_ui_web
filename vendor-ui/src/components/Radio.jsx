const Radio = ({
  name,
  id,
  label,
  isRequired,
  value,
  checked,
  handleChange,
}) => {
  return (
    <div className="radio">
      <>
        {label ? (
          <label
            className={`radio_label ${isRequired ? "required" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
        ) : null}
        <div className="radio_radioContainer">
          <input
            className="radio_radio"
            value={value}
            id={`type_radio_${value}`}
            checked={checked}
            name={name}
            type="radio"
            onChange={handleChange}
          />
        </div>
      </>
    </div>
  );
};

export default Radio;
