import HeaderProfile from "./HeaderProfile";
import Input from "./Input";
import ElementsProfile from "./ElementsProfile";
import Button from "./Button";
import { useState } from "react";

export default function InfoProfile(){
    const [isValueChanged, setIsValueChanged] = useState(false);

    return (
        <div>
            <div className="mt-20">
                
                <div className="mx-auto w-10/12 my-10">
                    <span>{"prénom :".toUpperCase()}</span>
                    <div className="border-input mb-4">
                        <Input type="firstname" data="Quentin" setIsValueChanged={setIsValueChanged}/>
                    </div>
                    <span>{"nom :".toUpperCase()}</span>
                    <div className="border-input mb-4">
                        <Input type="lastname" data="Marque" setIsValueChanged={setIsValueChanged}/>
                    </div>
                    <span>{"adresse email :".toUpperCase()}</span>
                    <div className="border-input mb-4">
                        <Input type="email" data="quentinmarque@gmail.com" setIsValueChanged={setIsValueChanged}/>
                    </div>
                    <span>{"date de naissance :".toUpperCase()}</span>
                    <div className="border-input mb-4">
                        <Input type="birthdate" data="01/01/2000" setIsValueChanged={setIsValueChanged}/>
                    </div>
                <Button valueChanged={isValueChanged}/>
                </div>
            </div>
        </div>
    )   
}