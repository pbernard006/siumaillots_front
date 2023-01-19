import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Address() {
  const [isValueChanged, setIsValueChanged] = useState(false);

  return (
    <>
      <div className="mt-20">
        <div className="mx-auto w-10/12 my-10">
          <span>{"nom : ".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="name"
              data="MARQUE Quentin"
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <span>{"numéro de rue : ".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="name"
              data="10"
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <span>{"nom de rue : ".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="name"
              data="rue Barrau"
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <span>{"code postal : ".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="name"
              data="33000"
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <span>{"pays : ".toUpperCase()}</span>
          <div className="border-input mb-4">
            <Input
              type="name"
              data="France"
              setIsValueChanged={setIsValueChanged}
            />
          </div>
          <Button valueChanged={isValueChanged} />
        </div>
      </div>
    </>
  );
}
