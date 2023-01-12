import { useState } from "react"
import Input from "./Input";

export default function Header(){

    const [isConnected, setIsConnected] = useState(false);
 
    return (<>
    <div className="w-screen text-xl font-bold">
        <div className="container mx-auto flex items-start text-center py-8">
            <div className="w-1/12">
<span>logo</span>
            </div>
            <div className="w-9/12 flex items-start">
                <div className="w-2/12 px-2 py-2">
                    <span className="hover-underline-animation">Club</span>
                </div>
                <div className="w-3/12 px-2 py-2">
                    <span className="hover-underline-animation">Equipe nationale</span>
                </div>
                <div className="w-7/12 text-start border-input">
                    <Input />
                </div>
            </div>
            <div className="w-2/12 flex items-start text-right">
            <i className="  far fa-user text-2xl px-2 py-2"></i>
            <i className="far fa-heart text-2xl px-2 py-2"></i>
            <i className="fas fa-shopping-bag text-2xl px-2 py-2" ></i>
            </div>
        </div>
    </div>
    </>)   
}