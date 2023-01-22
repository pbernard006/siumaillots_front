import { Dispatch, SetStateAction, useState } from "react";

export default function InputLogin({
  type,
  setValue,
  setError,
}: {
  type: string;
  setValue: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<boolean>>;
}) {
  const [renderedValue, setRenderedValue] = useState("");

  const editValue = (event: any) => {
    setValue(event.target.value);
    setRenderedValue(event.target.value);
    setError(false);
  };
  return (
    <input
      type={type}
      value={renderedValue}
      onChange={editValue}
      className="w-full px-2 py-2 font-normal text-lg"
    />
  );
}
