import { useState } from "react"

export default function InputSearch(){
    const [value, setValue] = useState("Rechercher un maillot");
    const [isFirstClick, setIsFirstClick] = useState(true);

    const editValue = (event: any) => {
        setValue(event.target.value);
    }
    const removeValue = (event: any) => {
        if(isFirstClick) {
            setIsFirstClick(false);
            setValue("");
        } else{
            event.target.select();
        }
    }
    return (
        <form action="maillots" autoComplete="off" className="flex">
            <input type={"text"} id="jerseySearch" name="search" value={value} onClick={removeValue} onChange={editValue} className="w-full px-2 py-2 font-normal text-lg"/>
            <button type="submit" className="mr-3"><i className="fas fa-search" ></i></button>
        </form>
    )
}