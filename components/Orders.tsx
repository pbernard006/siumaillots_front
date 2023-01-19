import Image from "next/image";

export default function Orders() {
  return (
    <>
      <div className="mt-20">
        <div className="mx-auto w-10/12 my-10">
          <div className="border-input">
            <div className="pt-8 px-5 font-bold text-xl">
              <span>{"commande n° : 123456".toUpperCase()}</span>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="mt-4 px-10">
                <Image
                  src={"/images/maillots/maillot.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="mb-7"
                />
                <span>Equipe de France | Maillot</span>
              </div>
              <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="mb-4">
                <span>{"commande passée le 19/01/2023".toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
