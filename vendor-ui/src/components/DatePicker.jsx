import DatePicker from "react-date-picker";

const ReactDatePicker = ({
  name,
  id,
  label,
  isRequired,
  value,
  handleChange,
}) => {
  return (
    <div className="datepicker">
      <>
        {label ? (
          <label
            className={`datepicker_label ${isRequired ? "required" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
        ) : null}
        <div className="datepicker_datepickerContainer">
          <DatePicker onChange={handleChange} value={value} />
        </div>
      </>
    </div>
  );
};

export default ReactDatePicker;
