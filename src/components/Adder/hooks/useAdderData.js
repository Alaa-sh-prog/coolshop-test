import { useCallback, useMemo, useState } from "react";
import { uniqueId } from "lodash";

const regex = /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

export const useAdderData = () => {
  const [rows, setRows] = useState([]);
  const handleAddRow = useCallback(() => {
    setRows([
      ...rows,
      {
        id: uniqueId("prefix-"),
        sign: "+",
        value: "",
        disabled: false,
      },
    ]);
  }, [rows]);

  const result = useMemo(() => {
    if (rows && rows.length) {
      let value = 0;
      rows.forEach((item) => {
        const num = parseFloat(item.value);
        if (!item.disabled && item.value !== "") {
          if (item.sign === "-") {
            value -= num;
          } else {
            value += num;
          }
        }
      });
      return (
        <h4>
          <span className="badge bg-success text-light">{value}</span>
        </h4>
      );
    }
  }, [rows]);

  const handleChangeSign = useCallback(
    (event, index) => {
      const oldRows = [...rows];
      oldRows[index].sign = event.target.value;
      setRows(oldRows);
    },
    [rows]
  );

  const handleValueChange = useCallback(
    (event, index) => {
      const oldRows = [...rows];
      const value = event.target.value;
      if (value === "" || value.match(regex)) {
        oldRows[index].value = value;
        setRows(oldRows);
      }
    },
    [rows]
  );

  const handleDisable = useCallback(
    (index) => {
      const oldRows = [...rows];
      oldRows[index].disabled = !oldRows[index].disabled;
      setRows(oldRows);
    },
    [rows]
  );

  const handleDelete = useCallback(
    (id) => {
      const newRows = rows.filter((item) => item.id !== id);
      setRows(newRows);
    },
    [rows]
  );

  return useMemo(
    () => ({
      handleDelete,
      handleDisable,
      handleValueChange,
      handleChangeSign,
      result,
      handleAddRow,
      rows,
    }),
    [
      rows,
      result,
      handleAddRow,
      handleDelete,
      handleDisable,
      handleValueChange,
      handleChangeSign,
    ]
  );
};
