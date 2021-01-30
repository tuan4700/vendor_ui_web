const Icon = ({ name, handleClick }) => {
  return (
    <div onClick={handleClick} className={`icon-${name}`}>
      <span></span>
    </div>
  );
};

export default Icon;
