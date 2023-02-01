import HeaderProfile from "./HeaderProfile";
import ElementsProfile from "./ElementsProfile";

export default function Profile() {
  return (
    <div>
      <HeaderProfile />
      <ElementsProfile name="Mes informations" selected={true} />
      <ElementsProfile name="Mes adresses" selected={false} />
      <ElementsProfile name="Mes commandes" selected={false} />
      <ElementsProfile name="Déconnexion" selected={false} />
    </div>
  );
}
