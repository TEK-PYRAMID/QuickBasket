const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`input ${className}`}
      />
    </div>
  );
};

export default Input;
