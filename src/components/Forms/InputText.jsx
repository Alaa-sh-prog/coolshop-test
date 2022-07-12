export const InputText = ({
  value,
  onChange = () => {},
  className = "",
  disabled = false,
}) => {
  return (
    <input
      class={`form-control ${className}`}
      value={value}
      type="text"
      onChange={onChange}
      disabled={disabled}
    />
  );
};
