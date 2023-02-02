export default function Order({ numero, price, date, status }: { numero: string; price: string; date: string; status: string}) {
  status = status == "paid" ? "payée" : "envoyée";
  date = date.split("T")[0];

  return (
    <>
      <div className="mt-20">
        <div className="mx-auto w-1/2 my-10 border-2 border-black rounded-lg">
          <div className="pt-8 px-5 font-bold text-center text-xl">
            <span className="text-center">{("commande n° : ").toUpperCase()} {numero}</span>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="text-left">
              <h5>Prix : {price} €</h5>
              <h5>Statut : {status}</h5>
              <h5>Effectuée le : {date}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
