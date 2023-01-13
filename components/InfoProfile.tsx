import HeaderProfile from "./HeaderProfile";
import Input from "./Input";
import ElementsProfile from "./ElementsProfile";

export default function InfoProfile(){

    return (
        <div>
            <HeaderProfile />
            <div className="mt-20">
                <div className="w-1/3 mx-auto my-10 border-input">
                    <input  value='Quentin' className="text-center w-full px-2 py-2 font-normal text-lg"/>
                </div>
                <div className="w-1/3 m-auto my-10 border-input">
                    <input type='text' value='Marque' className="text-center w-full px-2 py-2 font-normal text-lg uppercase"/>
                </div>
                <div className="w-1/3 m-auto my-10 border-input">
                    <input type='text' value='quentinm2000@hotmail.fr' className="text-center w-full px-2 py-2 font-normal text-lg"/>
                </div>
                <div className="w-1/3 m-auto my-10 border-input">
                    <input type='text' value='18/07/2000' className="text-center w-full px-2 py-2 font-normal text-lg"/>
                </div>
            </div>
        <ElementsProfile name="Enregistrer"/>
        </div>
    )   
}