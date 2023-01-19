import HeaderProfile from "./HeaderProfile";
import ElementsProfile from "./ElementsProfile";

export default function Profile(){
    return (
    <div>
        <HeaderProfile/>
        <ElementsProfile name="Mes informations"/>
        <ElementsProfile name="Mes adresses"/>
        <ElementsProfile name="Mes commandes"/>
        <ElementsProfile name="Déconnexion"/>
    </div>
    )   
}