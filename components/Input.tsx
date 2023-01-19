import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export default function Input({
  type,
  data,
  setIsValueChanged,
}: {
  type: string;
  data: string;
  setIsValueChanged: Dispatch<SetStateAction<boolean>>;
}) {
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(data);
  }, []);

  const editValue = (event: any) => {
    if (data != event.target.value) {
      setIsValueChanged(true);
    } else {
      setIsValueChanged(false);
    }
    setValue(event.target.value);
  };
  const removeValue = (event: any) => {
    if (isFirstClick) {
      setIsFirstClick(false);
      event.target.selectionStart = event.target.selectionEnd =
        event.target.value.length;
    } else {
      event.target.select();
    }
  };
  return (
    <input
      type={"text"}
      value={value}
      onClick={removeValue}
      onChange={editValue}
      className="w-full px-2 py-2 font-normal text-lg"
    />
  );
}
