import { useState } from "react"

export default function InputSearch(){
    const [value, setValue] = useState("Rechercher un maillot");
    const [isFirstClick, setIsFirstClick] = useState(true);

    const editValue = (event: any) => {
        setValue(event.target.value);
    }
    const removeValue = (event: any) => {
        if(isFirstClick){
            setIsFirstClick(false);
            setValue("");
        }else{
            event.target.select();
        }
    }
    return (
        <input type={"text"} id="jerseySearch" name="jerseySearch" value={value} onClick={removeValue} onChange={editValue} className="w-full px-2 py-2 font-normal text-lg"/>
    )
}