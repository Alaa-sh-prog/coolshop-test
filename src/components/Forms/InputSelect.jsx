export const InputSelect = ({
  value,
  onChange = () => {},
  className = "",
  items = [],
  disabled = false,
}) => {
  return (
    <select
      class={`form-select ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {items.map((item) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </select>
  );
};
