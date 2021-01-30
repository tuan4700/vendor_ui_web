const Button = ({ variant, size, children, handleClick }) => {
  return (
    <button
      className={`button ${variant ? `button-${variant}` : "button-default"} ${
        size ? `button-${size}` : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
