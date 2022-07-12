import { Button } from "../../Button/Button";
import { InputText } from "../../Forms/InputText";
import { InputSelect } from "../../Forms/InputSelect";

const SIGN_ITEMS = [
  {
    label: "-",
    value: "-",
  },
  {
    label: "+",
    value: "+",
  },
];

export const AdderRow = ({
  item,
  onChangeValue = () => {},
  onChangeSign = () => {},
  onDelete = () => {},
  onDisable = () => {},
  index,
}) => {
  return (
    <div className="d-flex gap-2 mt-3">
      <div>
        <InputSelect
          value={item.sign}
          onChange={(event) => onChangeSign(event, index)}
          items={SIGN_ITEMS}
          disabled={item.disabled}
        />
      </div>

      <div>
        <InputText
          disabled={item.disabled}
          value={item.value}
          onChange={(event) => onChangeValue(event, index)}
        />
      </div>
      <div>
        <Button
          variant="danger"
          onClick={() => onDelete(item.id)}
          text="Delete"
        />
      </div>
      <div>
        <Button
          variant="warning"
          onClick={() => onDisable(index)}
          text={item.disabled ? "Enabe" : "Disable"}
        />
      </div>
    </div>
  );
};
