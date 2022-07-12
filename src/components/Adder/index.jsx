import { AdderRow } from "./components/AdderRow";
import { useAdderData } from "./hooks/useAdderData";
import { Button } from "../Button/Button";
export const Adder = () => {
  const {
    rows,
    handleAddRow,
    handleChangeSign,
    handleDelete,
    handleDisable,
    handleValueChange,
    result,
  } = useAdderData();

  return (
    <div className="p-3">
      <Button variant="primary" onClick={handleAddRow} text="Add Row" />
      {rows.map((item, index) => {
        return (
          <div key={item.id} className="ms-4">
            <AdderRow
              index={index}
              item={item}
              onChangeSign={handleChangeSign}
              onChangeValue={handleValueChange}
              onDelete={handleDelete}
              onDisable={handleDisable}
            />
          </div>
        );
      })}
      <hr className="text-secondary mt-5" />
      <h2 className="text-light mt-4">Result</h2>
      {result}
    </div>
  );
};
