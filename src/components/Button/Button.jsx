export const Button = ({
  variant = "primary",
  size = "md",
  onClick = () => {},
  text = "Delete",
}) => {
  return (
    <button className={`btn btn-${size} btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};
